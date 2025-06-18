
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TestimonialSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation<HTMLDivElement>(0.3);

  const testimonials = [{
    quote: "The Gigin Recruiter app exceeded my expectations. It's efficient, easy to use, and delivers excellent hiring results. Highly recommend it to anyone looking for a smart recruitment solution.",
    author: "Shifa Khan",
    role: "HR Manager"
  }, {
    quote: "Gigin has transformed our hiring process completely. The AI-powered insights help us make better decisions and find the right candidates faster than ever before.",
    author: "Rajesh Patel",
    role: "Talent Acquisition Lead"
  }, {
    quote: "The verification process is seamless and reliable. We've reduced our hiring time by 40% since implementing Gigin's solution.",
    author: "Priya Sharma",
    role: "Recruitment Director"
  }, {
    quote: "Outstanding platform for modern recruitment needs. The candidate experience is exceptional and the results speak for themselves.",
    author: "Amit Kumar",
    role: "VP of Human Resources"
  }, {
    quote: "The best hiring platform we've used. The interface is intuitive and the results are consistently impressive.",
    author: "Neha Gupta",
    role: "Recruitment Manager"
  }, {
    quote: "Gigin's AI technology has revolutionized how we approach talent acquisition. Highly recommended for any growing company.",
    author: "Vikram Singh",
    role: "Head of Talent"
  }, {
    quote: "Exceptional service and support. The platform delivers on its promises and has significantly improved our hiring efficiency.",
    author: "Anita Desai",
    role: "HR Director"
  }];
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/f0acdf04-0015-4664-af62-d43a84908fcd.png)'
      }}></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div 
          ref={titleRef}
          className={`mb-4 transition-all duration-700 ${
            titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center glass-morphism border border-white/20 rounded-full px-4 py-2">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">Testimonial</span>
            <span className="text-white">✦</span>
          </div>
        </div>
        
        <h2 
          className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-200 ${
            titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          Trusted by 150k+ Recruiters
        </h2>
        <p 
          className={`text-xl text-white/80 mb-16 transition-all duration-700 delay-400 ${
            titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          Our clients speak on behalf of us!
        </p>

        {/* Testimonial Carousel */}
        <div 
          ref={carouselRef}
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-600 ${
            carouselVisible ? 'animate-fade-in animate-scale-in' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => <CarouselItem key={index}>
                  <div className="glass-morphism rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-xl shadow-2xl bg-white/10">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg">
                      <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-white/10">
                          <span className="text-white font-bold text-lg">
                            {testimonial.author.split(' ').map(name => name[0]).join('')}
                          </span>
                        </div>
                        <div className="text-left">
                          <cite className="text-white font-semibold text-lg not-italic">
                            {testimonial.author}
                          </cite>
                          <p className="text-white/70 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="glass-morphism border-white/20 text-white hover:bg-white/10" />
            <CarouselNext className="glass-morphism border-white/20 text-white hover:bg-white/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
