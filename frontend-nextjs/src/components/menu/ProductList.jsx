import { getFetch } from "@/utils/fetch";
import React from "react";
import ProductItem from "../products/ProductItem";

export default async function ProductList() {
  const data = await getFetch("/menu");
  return (
    <div className="grid grid-cols-1 gap-4 m-8 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {data.products.map((product) => (
        <div key={product.id} className="">
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}
