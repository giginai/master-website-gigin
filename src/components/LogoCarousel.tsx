import { useEffect, useRef } from "react";
const LogoCarousel = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const logos = [{
    id: 1,
    name: "Apex Systems",
    src: "/lovable-uploads/9446c406-cf7e-4610-8b09-b549cc9c0a59.png"
  }, {
    id: 2,
    name: "Whistle Drive",
    src: "/lovable-uploads/ad6e8080-9f19-46e6-8516-f011ff112090.png"
  }, {
    id: 3,
    name: "Heat and Control",
    src: "/lovable-uploads/fe66448b-a292-4e40-b8b0-5afdf99e39ed.png"
  }, {
    id: 4,
    name: "Paradigm Services",
    src: "/lovable-uploads/355fe424-01e5-478d-8b9e-900206ac4d33.png"
  }, {
    id: 5,
    name: "BijliPay",
    src: "/lovable-uploads/6fc1b73e-663b-4966-8207-4c1ee44922ff.png"
  }, {
    id: 6,
    name: "Retail Insights",
    src: "/lovable-uploads/50b33daf-fcde-4a3a-82a8-a09b81ecccb4.png"
  }, {
    id: 7,
    name: "DPD Zero",
    src: "/lovable-uploads/951f4d3f-018f-43ea-be9c-a0e4a87f0d4c.png"
  }, {
    id: 8,
    name: "Paytm",
    src: "/lovable-uploads/a1813bf2-3549-4889-966a-d0f363681d11.png"
  }];
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clone the logos for seamless loop
    const scrollerInner = scroller.querySelector('.scroller-inner');
    if (!scrollerInner) return;
    const scrollerContent = Array.from(scrollerInner.children);

    // Duplicate content for seamless loop
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);
  return <section className="pt-12 pb-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Trusted by 200+ Leading Companies</h3>
        </div>
        
        <div ref={scrollerRef} className="scroller overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="scroller-inner flex gap-16 animate-scroll hover:[animation-play-state:paused]">
            {logos.map(logo => <div key={logo.id} className="flex items-center justify-center min-w-[280px] h-20 p-6 flex-shrink-0 px-[24px] py-[16px]">
                <img src={logo.src} alt={logo.name} className="max-w-full max-h-full filter hover:filter-none transition-all duration-300 opacity-80 hover:opacity-100 object-contain" />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default LogoCarousel;