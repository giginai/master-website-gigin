import { Link } from "react-router-dom";
import { useWordPressPosts } from "@/hooks/useWordPressBlog";

const NewsSection = () => {
  const { posts, isLoading } = useWordPressPosts({ page: 1 });

  // Get the first 4 posts for the homepage
  const featuredPosts = posts.slice(0, 4);

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-4">
              <div className="inline-flex items-center bg-gray-100 text-gray-700 border border-gray-200 rounded-full px-4 py-2">
                <span>✦</span>
                <span className="font-medium mx-2">Blogs</span>
                <span>✦</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Gigin News & Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-video bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <div className="inline-flex items-center bg-gray-100 text-gray-700 border border-gray-200 rounded-full px-4 py-2">
              <span>✦</span>
              <span className="font-medium mx-2">Blogs</span>
              <span>✦</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Gigin News & Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPosts.map((article, index) => (
            <Link
              key={index}
              to={`/blog/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    By {article.author}
                  </p>
                  <span className="text-pink-500 font-medium hover:text-pink-600 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
