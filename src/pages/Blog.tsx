import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, Calendar, User, ArrowRight, AlertCircle, RefreshCw, ChevronDown } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { useWordPressPosts, useWordPressCategories } from "@/hooks/useWordPressBlog";
import { BlogGridSkeleton } from "@/components/ui/loading-skeleton";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // WordPress API integration
  const { categories, rawCategories, isLoading: categoriesLoading } = useWordPressCategories();
  
  const { 
    posts, 
    isLoading: postsLoading, 
    error: postsError,
    isFetching,
    total,
    totalPages,
    prefetchNextPage
  } = useWordPressPosts({
    page: currentPage,
    search: searchTerm,
    category: selectedCategory
  });

  // Filter posts locally for better UX (WordPress API might not have all filters)
  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    
    return posts.filter(post => {
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI & Technology": "bg-blue-100 text-blue-800",
      "Hiring Best Practices": "bg-green-100 text-green-800",
      "Industry Insights": "bg-purple-100 text-purple-800",
      "Company News": "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  // Split categories into visible and dropdown
  const visibleCategories = rawCategories?.slice(0, 5) || [];
  const dropdownCategories = rawCategories?.slice(5) || [];

  // Generate pagination items with ellipsis
  const getPaginationItems = () => {
    const items = [];
    const delta = 2; // Number of pages to show around current page
    
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Always show first page
        i === totalPages || // Always show last page
        (i >= currentPage - delta && i <= currentPage + delta) // Show pages around current
      ) {
        items.push(i);
      } else if (
        i === currentPage - delta - 1 || // Show ellipsis before current range
        i === currentPage + delta + 1 // Show ellipsis after current range
      ) {
        items.push('ellipsis');
      }
    }
    
    return items;
  };

  // Prefetch next page when user reaches current page
  useEffect(() => {
    if (currentPage > 1) {
      prefetchNextPage();
    }
  }, [currentPage, prefetchNextPage]);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="blog" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Insights & Updates
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest trends in recruitment, AI technology, and industry insights from the Gigin team.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categoriesLoading ? (
                <div className="flex gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-8 w-24" />
                  ))}
                </div>
              ) : (
                <>
                  <button
                    onClick={() => handleCategoryChange("all")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === "all"
                        ? "bg-pink-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All Categories
                  </button>
                  
                  {/* Visible Categories */}
                  {visibleCategories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/blog/category/${category.slug}`}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {category.name}
                    </Link>
                  ))}
                  
                  {/* Dropdown for Additional Categories */}
                  {dropdownCategories.length > 0 && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 border-none"
                        >
                          More Categories
                          <ChevronDown className="w-4 h-4 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 bg-white border shadow-lg">
                        {dropdownCategories.map((category) => (
                          <DropdownMenuItem key={category.id} asChild>
                            <Link
                              to={`/blog/category/${category.slug}`}
                              className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                              {category.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              {!postsLoading && (
                <>
                  Showing {filteredPosts.length} of {total} articles
                  {selectedCategory !== "all" && ` in ${selectedCategory}`}
                </>
              )}
            </p>
            {isFetching && (
              <div className="flex items-center text-sm text-gray-500">
                <RefreshCw className="w-4 h-4 mr-1 animate-spin" />
                Updating...
              </div>
            )}
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
              {filteredPosts.map((post) => {
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
          {!postsLoading && !postsError && filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          )}

          {/* Pagination with Ellipsis */}
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
                  
                  {getPaginationItems().map((item, index) => {
                    if (item === 'ellipsis') {
                      return (
                        <PaginationItem key={`ellipsis-${index}`}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }
                    
                    return (
                      <PaginationItem key={item}>
                        <PaginationLink
                          onClick={() => handlePageChange(item as number)}
                          isActive={currentPage === item}
                          className="cursor-pointer"
                        >
                          {item}
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

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest recruitment trends, AI insights, and company updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-white"
            />
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
