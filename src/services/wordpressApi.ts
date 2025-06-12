import { WordPressPost, WordPressCategory, BlogPost, WordPressApiResponse } from '@/types/wordpress';

// Replace with your WordPress site URL
const WORDPRESS_BASE_URL = 'https://gigin.ai/wp-json/wp/v2';

class WordPressApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'WordPressApiError';
  }
}

const fetchFromWordPress = async <T>(endpoint: string, params: Record<string, any> = {}): Promise<WordPressApiResponse<T>> => {
  const url = new URL(`${WORDPRESS_BASE_URL}${endpoint}`);
  
  // Add default parameters
  const defaultParams = {
    _embed: 'true', // Include embedded data (author, featured media, etc.)
    ...params
  };

  Object.entries(defaultParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, String(value));
    }
  });

  try {
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new WordPressApiError(
        `WordPress API request failed: ${response.status} ${response.statusText}`,
        response.status
      );
    }

    const data = await response.json();
    const total = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0');

    return {
      data,
      headers: response.headers,
      total,
      totalPages
    };
  } catch (error) {
    if (error instanceof WordPressApiError) {
      throw error;
    }
    throw new WordPressApiError(`Network error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const wordpressApi = {
  async getPosts(params: {
    page?: number;
    per_page?: number;
    search?: string;
    categories?: string;
    orderby?: string;
    order?: 'asc' | 'desc';
  } = {}): Promise<WordPressApiResponse<WordPressPost[]>> {
    const defaultParams = {
      page: 1,
      per_page: 12,
      orderby: 'date',
      order: 'desc' as const,
      ...params
    };

    return fetchFromWordPress<WordPressPost[]>('/posts', defaultParams);
  },

  async getPost(id: number): Promise<WordPressPost> {
    const response = await fetchFromWordPress<WordPressPost>(`/posts/${id}`);
    return response.data;
  },

  async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    try {
      const response = await fetchFromWordPress<WordPressPost[]>('/posts', {
        slug: slug,
        per_page: 1
      });
      return response.data.length > 0 ? response.data[0] : null;
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }
  },

  async getCategories(): Promise<WordPressCategory[]> {
    const response = await fetchFromWordPress<WordPressCategory[]>('/categories', {
      per_page: 100, // Get all categories
      orderby: 'name',
      order: 'asc'
    });
    return response.data;
  },

  async searchPosts(query: string, page: number = 1): Promise<WordPressApiResponse<WordPressPost[]>> {
    return this.getPosts({
      search: query,
      page,
      per_page: 12
    });
  }
};

// Transform WordPress post to our BlogPost format
export const transformWordPressPost = (post: WordPressPost): BlogPost => {
  const author = post._embedded?.author?.[0]?.name || 'Unknown Author';
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80';
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const category = categories.length > 0 ? categories[0].name : 'Uncategorized';

  // Clean up excerpt by removing HTML tags
  const cleanExcerpt = post.excerpt.rendered
    .replace(/<[^>]*>/g, '')
    .replace(/&[^;]+;/g, '')
    .trim();

  return {
    id: post.id,
    title: post.title.rendered,
    excerpt: cleanExcerpt || 'No excerpt available.',
    author,
    date: post.date,
    category,
    image: featuredImage,
    slug: post.slug,
    content: post.content.rendered
  };
};
