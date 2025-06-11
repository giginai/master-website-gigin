
const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
      <div className="absolute top-32 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-200 rounded-full opacity-25"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-4">
          <span className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
            🟢 Testimonial
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Recruiters Who Trust Gigin
        </h2>
        <p className="text-xl text-gray-600 mb-16">
          Our clients speak on behalf of us!
        </p>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Profile images around testimonial */}
          <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
          </div>
          <div className="absolute -top-4 -right-12 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600"></div>
          </div>
          <div className="absolute -bottom-8 -left-12 w-18 h-18 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
          </div>
          <div className="absolute -bottom-4 -right-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600"></div>
          </div>

          {/* Main testimonial card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              "The Gigin Recruiter app exceeded my expectations. It's efficient, easy to use, and delivers excellent hiring results. Highly recommend it to anyone looking for a smart recruitment solution."
            </blockquote>
            <cite className="text-gray-900 font-semibold text-lg">
              — Shifa Khan
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
