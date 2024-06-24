import { getFetch } from "@/utils/fetch";
import { numberFormat, salePercent } from "@/utils/helpers";
import React from "react";
import ProductSlider from "../../../components/layout/carousel/ProductSlider";
import Rating from "@/src/components/products/Rating";

export default async function ProductPage({ params }) {
  const product = await getFetch(`/products/${decodeURI(params.slug)}`);

  const allImages = [
    product.primary_image,
    ...product.images.map((img) => img.image),
  ];

  return (
    <div>
      <section className="overflow-hidden text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <ProductSlider images={allImages} />

            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h2 className="text-sm tracking-widest text-gray-500 title-font">
                {product.category}
              </h2>
              <h1 className="mb-1 text-3xl font-medium text-white title-font">
                {product.name}
              </h1>
              <Rating />
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-800"></div>
              <div className="flex">
                <div className="flex items-center justify-center gap-4">
                  <span>
                    {product.is_sale ? (
                      <>
                        <del className="text-xs">
                          {numberFormat(product.price)}$
                        </del>
                        <p className="mt-1 text-xs text-red-700">
                          {numberFormat(product.sale_price)}$
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-xs">
                          {numberFormat(product.price)}$
                        </p>
                      </>
                    )}
                  </span>

                  <span>
                    {product.is_sale && (
                      <span>
                        {salePercent(product.price, product.sale_price)}٪
                        Discount
                      </span>
                    )}
                  </span>
                </div>
                <button className="flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                  Button
                </button>
                <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-800 border-0 rounded-full">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
