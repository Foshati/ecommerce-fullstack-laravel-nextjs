import React from "react";
import About from "@/src/components/about/About";
import Contact from "@/src/components/contact/Contact";
import { Carousel } from "@/src/components/layout/carousel/Carousel"; // Correct import
import ProductTabs from "@/src/components/products/ProductTabs";
import { getFetch } from "@/utils/fetch";

export default async function Page() {
  const productsTabFetch = await getFetch("/products/products-tabs");

  const carouselData = [
    { src: "/images/slider1.jpg", alt: "Slider Image 1" },
    { src: "/images/slider2.jpg", alt: "Slider Image 2" },
    { src: "/images/slider3.jpg", alt: "Slider Image 3" },
  ];

  return (
    <div>
      <Carousel data={carouselData} />
      <ProductTabs
        tabList={productsTabFetch.tabList}
        tabPanel={productsTabFetch.tabPanel}
      />
      <About />
      <Contact />
    </div>
  );
}
