import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Slide {
  image: string;
  alt?: string;
}

interface DesignCarouselProps {
  slides: Slide[];
}

const DesignCarousel: React.FC<DesignCarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const pathname = usePathname();

  // Always start from first slide on component mount (page load)
  useEffect(() => {
    setCurrentSlide(0);
    setIsInitialized(true);
  }, []);

  // Reset carousel state when route changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [pathname]);

  // Reset to first slide when slides array changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [slides]);

  // Auto-advance carousel only after initialization
  useEffect(() => {
    if (!isInitialized || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, isInitialized]);

  // Handle manual slide navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full overflow-hidden bg-gray-50">
      {/* Carousel Track - Horizontal sliding container */}
      <div
        className="relative w-full flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          minHeight: "300px",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={`slide-${index}-${slide.image}`} // Unique key to force re-render
            className="relative w-full flex-shrink-0 flex justify-center items-center"
            style={{ minHeight: "inherit" }}
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <Image
                src={slide.image}
                alt={slide.alt || `Carousel slide ${index + 1}`}
                width={100}
                height={100}
                className="object-contain w-full h-auto"
                priority={index === 0}
                quality={90}
              />
            </div>
          </div>
        ))}
      </div>

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
      {slides.length > 1 && (
        <div className="absolute right-4 bottom-4 md:right-6 md:bottom-6 lg:right-8 lg:bottom-8 flex gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20 ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default DesignCarousel;