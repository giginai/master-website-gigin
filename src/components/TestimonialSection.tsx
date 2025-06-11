
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The Gigin Recruiter app exceeded my expectations. It's efficient, easy to use, and delivers excellent hiring results. Highly recommend it to anyone looking for a smart recruitment solution.",
      author: "Shifa Khan",
      role: "HR Manager"
    },
    {
      quote: "Gigin has transformed our hiring process completely. The AI-powered insights help us make better decisions and find the right candidates faster than ever before.",
      author: "Rajesh Patel",
      role: "Talent Acquisition Lead"
    },
    {
      quote: "The verification process is seamless and reliable. We've reduced our hiring time by 40% since implementing Gigin's solution.",
      author: "Priya Sharma",
      role: "Recruitment Director"
    },
    {
      quote: "Outstanding platform for modern recruitment needs. The candidate experience is exceptional and the results speak for themselves.",
      author: "Amit Kumar",
      role: "VP of Human Resources"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Glass morphism background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 glass-morphism rounded-full opacity-20"></div>
      <div className="absolute top-32 right-20 w-24 h-24 glass-morphism rounded-full opacity-15"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 glass-morphism rounded-full opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-4">
          <div className="inline-flex items-center glass-morphism text-gray-800 rounded-full px-4 py-2 border border-gray-200/30">
            <span>✦</span>
            <span className="font-medium mx-2">Testimonial</span>
            <span>✦</span>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Recruiters Who Trust Gigin
        </h2>
        <p className="text-xl text-gray-600 mb-16">
          Our clients speak on behalf of us!
        </p>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="glass-morphism rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-xl">
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <cite className="text-gray-900 font-semibold text-lg">
                      — {testimonial.author}
                    </cite>
                    <p className="text-gray-600 text-sm mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass-morphism border-white/20" />
            <CarouselNext className="glass-morphism border-white/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
