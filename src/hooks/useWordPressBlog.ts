import { useQuery, useQueryClient } from '@tanstack/react-query';
import { wordpressApi, transformWordPressPost } from '@/services/wordpressApi';
import { BlogPost, WordPressCategory } from '@/types/wordpress';
import { useMemo } from 'react';

// Query keys for React Query
export const QUERY_KEYS = {
  posts: (params?: any) => ['wordpress', 'posts', params],
  categories: () => ['wordpress', 'categories'],
  post: (slugOrId: string | number) => ['wordpress', 'post', slugOrId]
} as const;

export const useWordPressPosts = (params: {
  page?: number;
  search?: string;
  category?: string;
} = {}) => {
  const queryClient = useQueryClient();

  const {
    data: postsResponse,
    isLoading,
    error,
    isFetching
  } = useQuery({
    queryKey: QUERY_KEYS.posts(params),
    queryFn: () => wordpressApi.getPosts({
      page: params.page || 1,
      per_page: 12,
      search: params.search || undefined,
      categories: params.category && params.category !== 'all' ? params.category : undefined
    }),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes (formerly cacheTime)
    refetchOnWindowFocus: false,
    retry: 2
  });

  // Transform WordPress posts to our BlogPost format
  const posts = useMemo(() => {
    if (!postsResponse?.data) return [];
    return postsResponse.data.map(transformWordPressPost);
  }, [postsResponse?.data]);

  // Prefetch next page
  const prefetchNextPage = () => {
    const nextPage = (params.page || 1) + 1;
    if (postsResponse && nextPage <= postsResponse.totalPages) {
      queryClient.prefetchQuery({
        queryKey: QUERY_KEYS.posts({ ...params, page: nextPage }),
        queryFn: () => wordpressApi.getPosts({
          page: nextPage,
          per_page: 12,
          search: params.search || undefined,
          categories: params.category && params.category !== 'all' ? params.category : undefined
        }),
        staleTime: 5 * 60 * 1000
      });
    }
  };

  return {
    posts,
    isLoading,
    error,
    isFetching,
    total: postsResponse?.total || 0,
    totalPages: postsResponse?.totalPages || 0,
    prefetchNextPage
  };
};

export const useWordPressPost = (slug: string) => {
  const { data: post, isLoading, error } = useQuery({
    queryKey: QUERY_KEYS.post(slug),
    queryFn: async () => {
      const wordpressPost = await wordpressApi.getPostBySlug(slug);
      return wordpressPost ? transformWordPressPost(wordpressPost) : null;
    },
    enabled: !!slug,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
    refetchOnWindowFocus: false,
    retry: 2
  });

  return {
    post,
    isLoading,
    error
  };
};

export const useWordPressCategories = () => {
  const { data: categories, isLoading, error } = useQuery({
    queryKey: QUERY_KEYS.categories(),
    queryFn: () => wordpressApi.getCategories(),
    staleTime: 15 * 60 * 1000, // 15 minutes (categories change less frequently)
    gcTime: 60 * 60 * 1000, // 1 hour
    refetchOnWindowFocus: false,
    retry: 2
  });

  // Transform to match our current category format
  const formattedCategories = useMemo(() => {
    if (!categories) return ['all'];
    return ['all', ...categories.map(cat => cat.name)];
  }, [categories]);

  return {
    categories: formattedCategories,
    rawCategories: categories,
    isLoading,
    error
  };
};

// Hook for searching posts with debouncing
export const useWordPressSearch = (searchTerm: string, delay: number = 500) => {
  const debouncedSearchTerm = useMemo(() => {
    const handler = setTimeout(() => searchTerm, delay);
    return () => clearTimeout(handler);
  }, [searchTerm, delay]);

  return useQuery({
    queryKey: QUERY_KEYS.posts({ search: searchTerm }),
    queryFn: () => wordpressApi.searchPosts(searchTerm),
    enabled: searchTerm.length > 2, // Only search if more than 2 characters
    staleTime: 2 * 60 * 1000, // 2 minutes for search results
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false
  });
};
