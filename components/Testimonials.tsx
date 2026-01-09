"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  text: string;
  author: string;
}

const reviews: Review[] = [
  { text: `I contacted Barnett's Garage Doors through Yelp. Travis Barnett called within 10 minutes and volunteered to come out and take a look. This was at approximately 6:40 pm. I respect Mr. Barnett's willingness to assist in one more customer at such a late time of the day. Travis confirmed his diagnosis of my garage door needs and fixed the door so it opened and closed again within 30 minutes of arriving. The cost was the cost of a normal service call. An extreme value for same day service and resolution. My door is on its last go round and I will be calling Barnett's when I need a new one. Thank You Travis.`, author: "Lawrence" },
  { text: `I 100% recommend Barnett’s Garage Doors! I needed a spring replaced and they got it done the same day I contacted them! It took less than an hour at that! Quick & reliable service. Thank you!`, author: "Megan P" },
];

const FONT_SIZE = 22; // px
const LINE_HEIGHT = 1.33;
const PADDING_OFFSET = 36;

const estimateHeight = (text: string, width: number) => {
  const avgCharWidth = width < 640 ? 9 : width < 1024 ? 11 : 12;
  const charsPerLine = Math.floor(width / avgCharWidth);
  const lines = Math.ceil(text.length / charsPerLine);
  return lines * FONT_SIZE * LINE_HEIGHT + PADDING_OFFSET;
};

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(900);
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Update container width on resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pre-calculate max height to prevent CLS
  const maxHeight = useMemo(() => Math.max(...reviews.map(r => estimateHeight(r.text, containerWidth))), [containerWidth]);

  const startAutoRotate = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % reviews.length);
    }, 6000);
  }, []);

  useEffect(() => {
    if (!hovered) startAutoRotate();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hovered, startAutoRotate]);

  return (
    <section className="w-full max-w-screen mx-auto box-border">
      <div
        ref={containerRef}
        className="w-full h-full mx-auto bg-gray-50 border-8 border-secondary-dark shadow-xl shadow-secondary-dark rounded-4xl p-6 md:p-10 lg:p-12 flex flex-col items-center justify-center text-center transition-all duration-500"
        style={{ minHeight: `${maxHeight}px` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h2 className="text-[1.6rem] font-bold text-text-primary mb-4 text-shadow-2xs md:text-[2rem] lg:text-[2.5rem]">
          What Our Customers Are Saying...
        </h2>

        <div className="relative w-full flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center w-full px-2"
              style={{ minHeight: `${maxHeight}px` }}
            >
              <p className="text-[1.25rem] italic text-text-secondary mb-4 md:text-[1.3rem] lg:text-[1.4rem] max-w-225">
                {"\"" + reviews[index].text + "\""}
              </p>
              <p className="text-[1.07rem] uppercase font-semibold text-text-secondary sm:text-[1.1rem] md:text-[1.25rem] lg:text-[1.3rem]">
                {`– ${reviews[index].author}`}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${i === index ? "bg-primary" : "bg-gray-300  hover:bg-accent"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);