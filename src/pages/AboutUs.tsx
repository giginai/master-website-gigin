
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
      description: "Former VP of Engineering at Google with 15+ years in AI and machine learning."
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      description: "Ex-Principal Engineer at Microsoft, leading AI research and development initiatives."
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      description: "Product strategy expert from LinkedIn with deep expertise in HR technology solutions."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in hiring technology, always staying ahead of industry trends."
    },
    {
      icon: Users,
      title: "Human-Centric",
      description: "While we leverage AI, we never forget that hiring is fundamentally about connecting people."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "We're constantly evolving our platform based on user feedback and market insights."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from product quality to customer service."
    }
  ];

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

      <Header currentPage="about-us" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">About Us</span>
            <span className="text-white">✦</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            Revolutionizing Hiring<br />
            Through AI Innovation
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Founded in 2021, Gigin is on a mission to transform the way companies find, hire,<br />
            and onboard talent using cutting-edge artificial intelligence and machine learning.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that finding the right talent shouldn't be a time-consuming, expensive, and inefficient process. Our mission is to democratize access to top talent while making hiring faster, smarter, and more accurate through the power of AI.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By combining advanced machine learning algorithms with human expertise, we're creating a future where every company, regardless of size, can build exceptional teams that drive growth and innovation.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              These core principles guide everything we do and shape how we build products, serve customers, and grow as a team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our diverse team of engineers, designers, and hiring experts are passionate about solving the world's most challenging recruitment problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-pink-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-pink-600 mb-2">100+</h3>
              <p className="text-gray-600 font-medium">Companies Trust Us</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-pink-600 mb-2">50k+</h3>
              <p className="text-gray-600 font-medium">Successful Hires</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-pink-600 mb-2">70%</h3>
              <p className="text-gray-600 font-medium">Faster Hiring Process</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-pink-600 mb-2">95%</h3>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Whether you're looking to transform your hiring process or join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
              Get Started
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-lg font-medium transition-all duration-300">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
