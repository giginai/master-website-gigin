
import { useEffect, useRef } from "react";

const LogoCarousel = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const logos = [
    { id: 1, name: "Chai Days", src: "/lovable-uploads/baa91ac4-bacf-43fb-81e7-7fd1796bd338.png" },
    { id: 2, name: "DPD Zero", src: "/lovable-uploads/beecfc18-7b22-448d-8a55-dba9333a3ced.png" },
    { id: 3, name: "Paradigm Services", src: "/lovable-uploads/6ad32495-912d-4b47-bc5b-6904cc4ff79b.png" },
    { id: 4, name: "Retail Insights", src: "/lovable-uploads/e05ceff6-fc47-4e20-a343-00fa60c3f2ac.png" },
    { id: 5, name: "Sona Comstar", src: "/lovable-uploads/71021659-977e-472c-9b8e-227ca8a6bff4.png" },
    { id: 6, name: "SIS", src: "/lovable-uploads/56fc52e0-a841-4b17-a8ac-e498fe418fbd.png" },
    { id: 7, name: "Paytm", src: "/lovable-uploads/d3b7e973-7b38-4327-a321-970ea9af74fa.png" },
    { id: 8, name: "Cafe Coffee Day", src: "/lovable-uploads/fddfa5f5-7050-43bc-82eb-6b8f442b8692.png" },
    { id: 9, name: "Whistle Drive", src: "/lovable-uploads/cbc9857f-0271-482c-9bd5-a1612afa5efe.png" },
    { id: 10, name: "Heat and Control", src: "/lovable-uploads/d8e99f47-c4db-469d-96ee-4f111c32f5fe.png" },
  ];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clone the logos for seamless loop
    const scrollerInner = scroller.querySelector('.scroller-inner');
    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children);
    
    // Duplicate content for seamless loop
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className="pt-12 pb-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Trusted by 100+ Leading Companies
          </h3>
        </div>
        
        <div 
          ref={scrollerRef}
          className="scroller overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        >
          <div className="scroller-inner flex gap-16 animate-scroll hover:[animation-play-state:paused]">
            {logos.map((logo) => (
              <div 
                key={logo.id} 
                className="flex items-center justify-center min-w-[280px] h-20 p-6 flex-shrink-0"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
