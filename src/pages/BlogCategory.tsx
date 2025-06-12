
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, ArrowRight, Search, RefreshCw, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Header from "@/components/Header";
import { useWordPressPosts, useWordPressCategories } from "@/hooks/useWordPressBlog";
import { BlogGridSkeleton } from "@/components/ui/loading-skeleton";
import { useState } from "react";

const BlogCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { categories, rawCategories, isLoading: categoriesLoading } = useWordPressCategories();
  
  // Find the category name from slug
  const currentCategory = rawCategories?.find(cat => cat.slug === categorySlug);
  const categoryName = currentCategory?.name || categorySlug;

  const { 
    posts, 
    isLoading: postsLoading, 
    error: postsError,
    isFetching,
    total,
    totalPages
  } = useWordPressPosts({
    page: currentPage,
    search: searchTerm,
    category: currentCategory?.id?.toString()
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Error component
  const ErrorState = ({ error, onRetry }: { error: any, onRetry: () => void }) => (
    <div className="text-center py-12">
      <div className="text-red-400 mb-4">
        <AlertCircle className="w-12 h-12 mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-gray-600 mb-2">Failed to load blog posts</h3>
      <p className="text-gray-500 mb-4">
        {error?.message || "Please check your internet connection and try again."}
      </p>
      <Button onClick={onRetry} variant="outline">
        <RefreshCw className="w-4 h-4 mr-2" />
        Try Again
      </Button>
    </div>
  );

  if (categoriesLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header currentPage="blog" />
        <div className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <BlogGridSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="blog" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Posts
          </Link>
          
          <div className="text-center">
            <div className="mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(categoryName || '')}`}>
                {categoryName}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {categoryName} Articles
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our latest insights and updates in {categoryName?.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={`Search ${categoryName} articles...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center gap-4">
              {!postsLoading && (
                <p className="text-gray-600">
                  {posts.length} of {total} articles
                </p>
              )}
              {isFetching && (
                <div className="flex items-center text-sm text-gray-500">
                  <RefreshCw className="w-4 h-4 mr-1 animate-spin" />
                  Updating...
                </div>
              )}
            </div>
          </div>

          {/* Loading State */}
          {postsLoading && <BlogGridSkeleton />}

          {/* Error State */}
          {postsError && !postsLoading && (
            <ErrorState 
              error={postsError} 
              onRetry={() => window.location.reload()} 
            />
          )}

          {/* Blog Grid */}
          {!postsLoading && !postsError && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post) => {
                const categorySlugForUrl = rawCategories?.find(cat => cat.name === post.category)?.slug || post.category.toLowerCase().replace(/\s+/g, '-');
                
                return (
                  <Card key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </CardDescription>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="px-6 pb-6">
                      <Link to={`/blog/${encodeURIComponent(categorySlugForUrl)}/${post.slug}`}>
                        <Button variant="outline" className="w-full group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 transition-all duration-300">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* No Results */}
          {!postsLoading && !postsError && posts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms.</p>
            </div>
          )}

          {/* Pagination */}
          {!postsLoading && totalPages > 1 && (
            <div className="flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    if (totalPages > 7 && (page < currentPage - 2 || page > currentPage + 2) && page !== 1 && page !== totalPages) {
                      return null;
                    }
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogCategory;
