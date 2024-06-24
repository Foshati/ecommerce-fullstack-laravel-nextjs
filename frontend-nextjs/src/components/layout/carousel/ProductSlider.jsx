"use client";
import { useState } from "react";
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
      <figure>
        <Image
          src={images[currentIndex]}
          placeholder="blur"
          blurDataURL={getBlurDataUrl()}
          width={460}
          height={310}
          className="w-full rounded-xl cursor-none"
          alt={`product-image-${currentIndex}`}
        />
      </figure>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
          onClick={goToPrevious}
          className="btn btn-circle btn-neutral btn-sm"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="btn btn-circle btn-neutral btn-sm"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
