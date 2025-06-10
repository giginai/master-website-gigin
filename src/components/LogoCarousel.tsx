
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const LogoCarousel = () => {
  // Placeholder array - will be replaced with actual logos
  const placeholderLogos = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`,
    src: `/lovable-uploads/placeholder-logo-${i + 1}.png`
  }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">
            Trusted by Leading Companies
          </h3>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {placeholderLogos.concat(placeholderLogos).map((logo, index) => (
              <CarouselItem key={`${logo.id}-${index}`} className="pl-2 md:pl-4 basis-1/3 md:basis-1/5 lg:basis-1/6">
                <div className="flex items-center justify-center h-20 p-4">
                  <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-medium">Logo</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LogoCarousel;
