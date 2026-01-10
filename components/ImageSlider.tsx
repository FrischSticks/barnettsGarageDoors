import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import styles from "../styles/imageSlider.module.css";

// IMAGES
import personalPhoto from "../public/images/barnetts-personal-photo.png";
import garageDoorInstallation1 from "../public/images/barnetts-installing-garage-door.jpg";
import garageDoorInstallation2 from "../public/images/barnetts-installing-garage.jpg";
import garageDoorInstallation3 from "../public/images/barnetts-installing-new-garage-door.jpg";

interface Slide {
  image: StaticImageData;
  alt: string;
}

const slidesData: Slide[] = [
  { image: personalPhoto, alt: "Photo of Barnett's Garage Doors standing in front of a garage door installation." },
  { image: garageDoorInstallation1, alt: "Barnett's Garage Doors actively installing a customer's garage door." },
  { image: garageDoorInstallation2, alt: "Barnett's Garage Doors actively installing a customer's garage door." },
  { image: garageDoorInstallation3, alt: "Barnett's Garage Doors actively installing a customer's garage door." },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = useMemo(() => slidesData, []);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  // ✅ useCallback ensures stable references for hooks
  const previousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // ✅ Auto-scroll (pauses on hover)
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      autoScrollRef.current = setInterval(() => {
        if (!isHoveredRef.current) nextSlide();
      }, 5000);
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };
  }, [nextSlide]);

  // ✅ Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") previousSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [previousSlide, nextSlide]);

  return (
    <div className={styles.mainContainer}>
      {/* Image Container */}
      <div
        className="relative w-full aspect-9/16 sm:aspect-9/16 md:aspect-3/4 rounded-lg overflow-hidden border-8 border-primary-dark"
        onMouseEnter={() => (isHoveredRef.current = true)}
        onMouseLeave={() => (isHoveredRef.current = false)}
      >
        <Image
          key={currentIndex}
          src={slides[currentIndex].image}
          alt={slides[currentIndex].alt}
          fill
          style={{ objectFit: "cover", transition: "opacity 0.5s ease-in-out" }}
          priority={currentIndex < 2}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 50vw"
          loading={currentIndex >= 2 ? "lazy" : "eager"}
        />

        {/* Arrows */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 text-white"
          onClick={previousSlide}
          aria-label="Previous Slide"
        >
          <BsChevronCompactLeft size={40} />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 text-white"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <BsChevronCompactRight size={40} />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`
              w-5 h-5 rounded-full border-2 border-gray-400
              ${currentIndex === idx ? "bg-primary opacity-100" : "bg-transparent opacity-50"}
              transition
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;