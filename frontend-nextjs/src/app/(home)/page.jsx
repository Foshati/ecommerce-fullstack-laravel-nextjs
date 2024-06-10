import Carousel from "@/src/components/layout/carousel/Carousel";
import ProductTabs from "@/src/components/products/ProductTabs";
import { getFetch } from "@/utils/fetch";

export default async function page() {
  const productsTabFetch = await getFetch("/products/products-tabs");
  // console.log(productsTabFetch);
  return (
    <div>
      <Carousel />
      <ProductTabs
        tabList={productsTabFetch.tabList}
        tabPanel={productsTabFetch.tabPanel}
      />
    </div>
  );
}
