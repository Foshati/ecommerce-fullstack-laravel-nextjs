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

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative w-full h-80">
        {images.map((image, index) => (
          <figure
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              placeholder="blur"
              blurDataURL={getBlurDataUrl()}
              width={460}
              height={310}
              className="object-cover w-full h-full rounded-xl"
              alt={`product-image-${index}`}
            />
          </figure>
        ))}
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/5">
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
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`mx-1 p-1 border ${
              currentIndex === index ? "border-red-500" : "border-gray-500"
            } rounded`}
          >
            <Image
              src={image}
              placeholder="blur"
              blurDataURL={getBlurDataUrl()}
              width={50}
              height={50}
              className="object-cover w-12 h-12 rounded"
              alt={`thumbnail-${index}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
