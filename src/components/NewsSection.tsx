
const NewsSection = () => {
  const articles = [
    {
      title: "Why Gig Talent is Essential for Indian Startups",
      author: "Gigin Team",
      image: "/lovable-uploads/56fc52e0-a841-4b17-a8ac-e498fe418fbd.png"
    },
    {
      title: "Pros And Cons Of Incentive-Based Pay in India's Gig Economy", 
      author: "Gigin Team",
      image: "/lovable-uploads/6ad32495-912d-4b47-bc5b-6904cc4ff79b.png"
    },
    {
      title: "Tech Solutions to Fight The Job Scams For The Informal",
      author: "Gigin Team", 
      image: "/lovable-uploads/71021659-977e-472c-9b8e-227ca8a6bff4.png"
    },
    {
      title: "Interview With Mahesh Kumar – Sharing Insights On Gig Economy",
      author: "Gigin Team",
      image: "/lovable-uploads/baa91ac4-bacf-43fb-81e7-7fd1796bd338.png"
    }
  ];

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
          {articles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    By {article.author}
                  </p>
                  <a href="#" className="text-pink-500 font-medium hover:text-pink-600 transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
