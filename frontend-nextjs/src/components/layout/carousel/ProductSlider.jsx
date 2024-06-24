"use client";
import React, { useState } from "react";
import Image from "next/image";
import { getBlurDataUrl } from "@/utils/helpers";

const ProductSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-md">
      <Image
        src={images[currentIndex]}
        placeholder="blur"
        blurDataURL={getBlurDataUrl()}
        width={464}
        height={309}
        className="w-full"
        alt={`product-image-${currentIndex}`}
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={goToPrevious} className="btn btn-circle">
          ❮
        </button>
        <button onClick={goToNext} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
