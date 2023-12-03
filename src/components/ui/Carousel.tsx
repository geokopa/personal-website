import React, { useEffect, useCallback } from "react";
import { CarouselProps } from "../../props/CarouselProps";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel: React.FC<CarouselProps> = ({
  autoSlide,
  autoSlideInterval,
  children: slides,
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const prev = useCallback(() => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  }, [slides]);

  const next = useCallback(() => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  }, [slides]);

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, slides, next]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transitioin-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-6 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {Array.isArray(slides) &&
            slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full bg-black/50 hover:bg-white cursor-pointer transition-all duration-300 ${
                  index === currentSlide ? "p-2 bg-pink-500" : "bg-opacity-50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
