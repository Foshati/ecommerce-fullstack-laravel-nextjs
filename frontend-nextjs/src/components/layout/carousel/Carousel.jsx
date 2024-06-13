"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  if (!data || data.length === 0) {
    return null; // Return null or a fallback UI if data is not available
  }

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={prevSlide}
        className="absolute z-10 p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 left-4"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <div className="relative h-[100vh]">
        {data.map((item, idx) => (
          <Image
            key={idx}
            src={item.src}
            alt={item.alt}
            layout="fill"
            objectFit="cover"
            className={`${slide === idx ? "block" : "hidden"}`}
            priority={idx === 0} // Add priority for the first image
          />
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute z-10 p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 right-4"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute z-10 flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              slide === idx ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};
