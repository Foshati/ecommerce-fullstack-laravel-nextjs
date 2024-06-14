"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export const Carousel = () => {
  const carouselData = [
    { src: "/images/slider1.jpg", alt: "Slider Image 1" },
    { src: "/images/slider2.jpg", alt: "Slider Image 2" },
    { src: "/images/slider3.jpg", alt: "Slider Image 3" },
  ];

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? carouselData.length - 1 : slide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [slide]);

  if (!carouselData || carouselData.length === 0) {
    return null; // Return null or a fallback UI if data is not available
  }

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={prevSlide}
        className="absolute z-10 p-2 text-white transition duration-300 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 left-4 hover:bg-opacity-75"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <div className="relative h-screen pointer-events-none">
        {carouselData.map((item, idx) => (
          <Image
            key={idx}
            src={item.src}
            alt={item.alt}
            fill
            // style={{ objectFit: "cover" }}
            className={`absolute object-cover top-0 left-0 transition-opacity duration-500 ${
              slide === idx ? "opacity-100" : "opacity-0"
            }`}
            priority={idx === 0} // Add priority for the first image
          />
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute z-10 p-2 text-white transition duration-300 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 right-4 hover:bg-opacity-75"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute z-10 flex flex-col items-center space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        <button className="m-6 btn btn-wide hover:bg-opacity-75 ">
          Learn more...
        </button>
        <div className="flex space-x-2">
          {carouselData.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${slide === idx ? "bg-white" : "bg-gray-400"}`}
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
