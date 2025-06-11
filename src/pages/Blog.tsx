
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Calendar, User, Clock } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const categories = ["All", "AI & Technology", "Hiring Best Practices", "Industry Insights", "Company News"];

  const allArticles = [
    {
      id: 1,
      title: "The Future of AI in Recruitment: Trends to Watch in 2024",
      excerpt: "Explore the latest advancements in AI technology and how they're reshaping the recruitment landscape.",
      category: "AI & Technology",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      featured: true
    },
    {
      id: 2,
      title: "10 Best Practices for Remote Hiring in a Post-Pandemic World",
      excerpt: "Learn effective strategies for identifying, interviewing, and onboarding remote talent successfully.",
      category: "Hiring Best Practices",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "How Machine Learning is Eliminating Bias in Recruitment",
      excerpt: "Discover how AI-powered tools are creating more fair and inclusive hiring processes.",
      category: "AI & Technology",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "The Great Resignation: What It Means for Talent Acquisition",
      excerpt: "Analyzing the impact of changing workforce dynamics on recruitment strategies.",
      category: "Industry Insights",
      author: "David Park",
      date: "2024-01-08",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Gigin Raises $50M Series B to Accelerate AI Hiring Solutions",
      excerpt: "Our latest funding round will help us expand our AI capabilities and global reach.",
      category: "Company News",
      author: "Sarah Johnson",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Building Effective Interview Processes: A Complete Guide",
      excerpt: "Step-by-step guidance for creating interview processes that identify the best candidates.",
      category: "Hiring Best Practices",
      author: "Lisa Wang",
      date: "2024-01-03",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      title: "Predictive Analytics in Talent Acquisition: ROI and Results",
      excerpt: "How data-driven insights are transforming hiring decisions and improving success rates.",
      category: "AI & Technology",
      author: "James Miller",
      date: "2024-01-01",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      title: "Salary Benchmarking in 2024: Tech Industry Trends",
      excerpt: "Latest compensation data and trends across different tech roles and locations.",
      category: "Industry Insights",
      author: "Anna Thompson",
      date: "2023-12-28",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 9,
      title: "Creating Inclusive Job Descriptions That Attract Diverse Talent",
      excerpt: "Best practices for writing job posts that appeal to candidates from all backgrounds.",
      category: "Hiring Best Practices",
      author: "Michael Chen",
      date: "2023-12-25",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Filter articles based on search and category
  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/f0acdf04-0015-4664-af62-d43a84908fcd.png)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Header currentPage="blogs" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">Blog</span>
            <span className="text-white">✦</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            Insights & Stories<br />
            From The Future of Hiring
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, industry trends, and practical advice<br />
            from our team of hiring and AI specialists.
          </p>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="relative z-10 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`rounded-full px-4 py-2 ${
                    selectedCategory === category
                      ? "bg-pink-500 hover:bg-pink-600 text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {article.featured && (
                    <Badge className="absolute top-4 left-4 bg-pink-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3 mb-4">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="justify-center">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}

          {/* No Results Message */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest articles, industry trends, and hiring tips delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-3 rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
            />
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready To Transform Your Hiring?
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Put our insights into action. Experience the future of AI-powered recruitment today.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
