import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Slide {
  image: string;
  alt?: string;
}

interface DesignCarouselProps {
  slides: Slide[];
}

const DesignCarousel: React.FC<DesignCarouselProps> = ({ slides }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnLastSnap: false,
        playOnInit: true,
      }),
    []
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full bg-gray-50">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: false,
        }}
        plugins={[plugin]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full">
                <Image
                  src={slide.image}
                  alt={slide.alt || "Carousel slide"}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-10 text-white z-20 bg-gradient-to-t from-black/50 to-transparent w-full pointer-events-none">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Design
            <br />
            <span className="font-normal text-xl md:text-2xl lg:text-3xl mt-2 block">
              for life.
            </span>
          </h2>
        </div>

        {/* Navigation Dots */}
        <div className="absolute right-4 bottom-4 md:right-6 md:bottom-6 lg:right-8 lg:bottom-8 flex gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white scale-110"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default DesignCarousel;
