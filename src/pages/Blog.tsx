import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { useState, useMemo } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered Recruitment: Trends to Watch in 2024",
      excerpt: "Discover how artificial intelligence is revolutionizing the recruitment landscape and what trends you should be watching for in the coming year.",
      author: "Sarah Chen",
      date: "2024-01-15",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Building Diverse Teams: Best Practices for Inclusive Hiring",
      excerpt: "Learn effective strategies for creating more diverse and inclusive workplaces through thoughtful recruitment and hiring practices.",
      author: "Marcus Johnson",
      date: "2024-01-12",
      category: "Hiring Best Practices",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Remote Work Revolution: How to Hire Top Talent Globally",
      excerpt: "Navigate the challenges and opportunities of remote hiring with our comprehensive guide to building distributed teams.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Gigin Raises $50M Series B to Expand AI Recruitment Platform",
      excerpt: "We're excited to announce our Series B funding round that will help us accelerate our mission to transform global recruitment.",
      author: "David Park",
      date: "2024-01-08",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "The Science Behind Effective Job Descriptions",
      excerpt: "Uncover the psychology and data science behind writing job descriptions that attract the right candidates and improve application quality.",
      author: "Dr. Lisa Wang",
      date: "2024-01-05",
      category: "Hiring Best Practices",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Machine Learning in Talent Acquisition: A Deep Dive",
      excerpt: "Explore how machine learning algorithms are being used to improve candidate matching, reduce bias, and streamline recruitment processes.",
      author: "Alex Thompson",
      date: "2024-01-03",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Skills-Based Hiring: Moving Beyond Traditional Qualifications",
      excerpt: "Learn why progressive companies are shifting focus from degrees to skills and how this approach is creating more opportunities for diverse talent.",
      author: "Rachel Green",
      date: "2024-01-01",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "New Partnership with Leading Universities Announced",
      excerpt: "Gigin partners with top universities to create direct pipelines for graduate recruitment and enhance campus hiring programs.",
      author: "Michael Brown",
      date: "2023-12-28",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Candidate Experience: The Secret to Successful Hiring",
      excerpt: "Discover how improving candidate experience throughout the hiring process can dramatically increase your success rate and employer brand.",
      author: "Jennifer Lee",
      date: "2023-12-25",
      category: "Hiring Best Practices",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      title: "AI-Powered Resume Screening: Reducing Bias in Recruitment",
      excerpt: "Discover how artificial intelligence is helping companies make more objective hiring decisions while reducing unconscious bias.",
      author: "Chris Wong",
      date: "2023-12-20",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      title: "The Art of Technical Interviewing",
      excerpt: "Master the techniques for conducting effective technical interviews that accurately assess candidates' skills and potential.",
      author: "Sam Patel",
      date: "2023-12-18",
      category: "Hiring Best Practices",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      title: "Global Talent Pool: Expanding Your Search Worldwide",
      excerpt: "Learn strategies for tapping into international talent markets and building successful remote teams across time zones.",
      author: "Maria Silva",
      date: "2023-12-15",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["all", "AI & Technology", "Hiring Best Practices", "Industry Insights", "Company News"];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + articlesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-pink-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category === "all" ? "All Categories" : category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {currentPosts.length} of {filteredPosts.length} articles
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post) => (
              <Card key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <Button variant="outline" className="w-full group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {currentPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
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
