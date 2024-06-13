import React from "react";
import About from "@/src/components/about/About";
import Contact from "@/src/components/contact/Contact";
import { Carousel } from "@/src/components/layout/carousel/Carousel";
import ProductTabs from "@/src/components/products/ProductTabs";
import { getFetch } from "@/utils/fetch";

export default async function Page() {
  const productsTabFetch = await getFetch("/products/products-tabs");

  return (
    <div className="bg-[#101827]">
      <Carousel />
      <ProductTabs
        tabList={productsTabFetch.tabList}
        tabPanel={productsTabFetch.tabPanel}
      />
      <About />
      <Contact />
    </div>
  );
}
