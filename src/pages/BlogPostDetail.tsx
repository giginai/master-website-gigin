
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useWordPressPost, useWordPressCategories } from "@/hooks/useWordPressBlog";

const BlogPostDetail = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const { post, isLoading, error } = useWordPressPost(slug || '');
  const { rawCategories } = useWordPressCategories();

  // Decode the category from URL
  const decodedCategory = category ? decodeURIComponent(category) : '';
  
  // Find category name from slug
  const categoryData = rawCategories?.find(cat => cat.slug === decodedCategory);
  const categoryName = categoryData?.name || decodedCategory;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header currentPage="blog" />
        <div className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-64 bg-gray-300 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header currentPage="blog" />
        <div className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI & Technology": "bg-blue-100 text-blue-800",
      "Hiring Best Practices": "bg-green-100 text-green-800",
      "Industry Insights": "bg-purple-100 text-purple-800",
      "Company News": "bg-orange-100 text-orange-800",
      "Background Verification": "bg-red-100 text-red-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <>
      <style>
        {`
          .single-post-section {
            padding: 4rem 1rem;
          }

          article.single-post-article {
            width: 100%;
            overflow: hidden;
          }

          figure.wp-block-table.is-style-stripes {
            background: #fff;
            overflow: auto;
          }

          .breadcrumb {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 1.5rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            align-items: center;
          }

          .breadcrumb a {
            text-decoration: none;
            color: #0073e6;
          }

          .single-featured-image img {
            width: 100%;
            height: auto;
            border-radius: 12px;
            margin-bottom: 2rem;
          }

          .single-post-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .post-meta {
            color: #888;
            font-size: 0.95rem;
            margin-bottom: 2rem;
          }

          .single-post-content {
            line-height: 1.7;
            font-size: 1.1rem;
            color: #333;
          }

          .single-post-content h2,
          .single-post-content h3 {
            margin-top: 2rem;
            font-weight: 600;
          }

          .single-post-content img {
            max-width: 100%;
            border-radius: 10px;
            margin: 1.5rem 0;
          }

          .related-posts {
            margin-top: 5rem;
          }

          .related-posts h2 {
            margin-bottom: 2rem;
            font-size: 1.5rem;
          }

          .related-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 2rem;
          }

          .single-featured-image {
            text-align: center;
            width: 516px;
            float: left;
            margin-right: 28px;
          }

          .single-post-content h2 {
            font-size: 2rem;
          }

          .single-post-content h3 {
            font-size: 1.5rem;
          }

          .single-post-content table td {
            border: 1px solid black !important;
            padding: 5px;
          }

          .single-post-content table th {
            font-weight: bold;
          }

          .single-post-content table tr:first-child td {
            font-weight: bold;
          }

          .single-post-content figure {
            background: none;
          }

          .single-post-content a {
            color: blue;
            display: inline;
          }

          div#rank-math-faq h3 {
            font-size: 1rem;
            text-space: 1px;
            letter-spacing: 0.05rem;
          }

          .blog-thumbnail {
            height: 231px;
          }

          /* Responsive styling for mobile */
          @media (max-width: 768px) {
            .single-featured-image {
              float: none;
              width: 100%;
              margin: 0 auto 20px auto;
            }

            .single-post-content table td {
              border: 1px solid black !important;
              padding: 3px;
              font-size: 12px;
            }
          }
        `}
      </style>
      <div className="min-h-screen bg-gray-50 single-post-section">
        <Header currentPage="blog" />
        
        <article className="pt-32 pb-16 single-post-article">
          <div className="max-w-4xl mx-auto px-6">
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb">
              <Link to="/blog">Blog</Link>
              <span>›</span>
              {categoryData && (
                <>
                  <Link to={`/blog/category/${categoryData.slug}`}>
                    {categoryData.name}
                  </Link>
                  <span>›</span>
                </>
              )}
              <span>{post.title}</span>
            </div>

            {/* Category Badge */}
            <div className="mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="single-post-title text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="post-meta flex items-center space-x-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            {/* Featured Image */}
            <div className="single-featured-image mb-8 rounded-2xl overflow-hidden">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            {/* Content */}
            <div 
              className="single-post-content prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-pink-600 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Call to Action */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your Hiring Process?
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover how Gigin can help you find the perfect candidates faster and more efficiently.
                </p>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPostDetail;
