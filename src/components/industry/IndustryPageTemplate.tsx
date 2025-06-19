import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Star, Users, Shield, TrendingUp, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface UseCase {
  title: string;
  description: string;
  benefits: string[];
}

interface Check {
  name: string;
  description: string;
}

interface CustomerStory {
  company: string;
  role: string;
  quote: string;
  result: string;
}

interface BlogResource {
  title: string;
  url: string;
  date: string;
}

interface ProductFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface IndustryPageProps {
  industryName: string;
  heroImage: string;
  description: string;
  outcomes: string[];
  businessImpact: {
    title: string;
    stats: Array<{ value: string; label: string }>;
    description: string;
  };
  differentiators: string[];
  useCases: UseCase[];
  productFeatures: ProductFeature[];
  customerStory: CustomerStory;
  specificChecks: Check[];
  blogResources: BlogResource[];
  otherIndustries: Array<{ name: string; link: string }>;
}

const IndustryPageTemplate = ({
  industryName,
  heroImage,
  description,
  outcomes,
  businessImpact,
  differentiators,
  useCases,
  productFeatures,
  customerStory,
  specificChecks,
  blogResources,
  otherIndustries
}: IndustryPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="glass-morphism rounded-full px-4 py-2 mb-8 inline-flex items-center">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">{industryName} Solutions</span>
            <span className="text-white">✦</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Background Verification for<br />{industryName}
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Outcomes Does Gigin Provide for {industryName}?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="glass-morphism rounded-2xl p-8 shadow-lg border border-white/20 backdrop-blur-sm bg-white/70 hover:bg-white/80 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-100/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-100/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Business Impact of BGV in {industryName}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {businessImpact.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {businessImpact.stats.map((stat, index) => (
              <div key={index} className="text-center glass-morphism rounded-2xl p-8 bg-white/50 border border-white/30">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Use Cases in {industryName}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="glass-morphism rounded-2xl p-8 shadow-lg border border-white/30 bg-white/60 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="glass-morphism rounded-xl p-6 bg-gradient-to-br from-pink-100/50 to-purple-100/50 border border-white/30">
                      <img 
                        src={`https://images.unsplash.com/photo-${index === 0 ? '1486312338219-ce68d2c6f44d' : index === 1 ? '1581091226825-a6a2a5aee158' : '1518770660439-4636190af475'}?w=400&h=300&fit=crop`}
                        alt={useCase.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ec4899" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Gigin for {industryName}?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((differentiator, index) => (
              <div key={index} className="flex items-start space-x-4 glass-morphism rounded-xl p-6 bg-white/60 border border-white/30">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{differentiator}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Product Features for {industryName}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="glass-morphism rounded-2xl p-8 border border-white/30 bg-gradient-to-br from-gray-50/80 to-white/80 hover:from-pink-50/80 hover:to-purple-50/80 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Story Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M50 0a50 50 0 1 1 0 100 50 50 0 0 1 0-100z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Customer Success Story
          </h2>
          
          <div className="glass-morphism rounded-2xl p-8 border border-white/20 bg-white/10 backdrop-blur-sm">
            <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              "{customerStory.quote}"
            </blockquote>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 mb-6">
              <span className="text-white font-semibold">{customerStory.company}</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">{customerStory.role}</span>
            </div>
            
            <div className="text-pink-200 font-medium bg-white/10 rounded-lg p-4">{customerStory.result}</div>
          </div>
        </div>
      </section>

      {/* Specific Checks Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50/30"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industry-Specific Verification Checks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specificChecks.map((check, index) => (
              <div key={index} className="glass-morphism rounded-xl p-6 border border-white/30 bg-white/70 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  {check.name}
                </h3>
                <p className="text-gray-600">{check.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-pink-100/50 to-transparent rounded-l-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {industryName} Resources & Insights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogResources.map((blog, index) => (
              <div key={index} className="glass-morphism rounded-2xl shadow-lg border border-white/30 bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1461749280684-dccba630e2f6' : index === 1 ? '1498050108023-c5249f4df085' : '1487058792275-0ad4aaf24ca7'}?w=400&h=300&fit=crop`}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{blog.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                  <Link to={blog.url} className="text-pink-600 hover:text-pink-700 font-medium flex items-center group">
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Industries Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Other Industries
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {otherIndustries.map((industry, index) => (
              <Link
                key={index}
                to={industry.link}
                className="glass-morphism rounded-xl p-6 text-center border border-white/30 bg-gray-50/80 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-pink-600">{industry.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your {industryName} Hiring?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of companies who trust Gigin for their background verification needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white/30 glass-morphism bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-lg rounded-lg font-medium">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryPageTemplate;
