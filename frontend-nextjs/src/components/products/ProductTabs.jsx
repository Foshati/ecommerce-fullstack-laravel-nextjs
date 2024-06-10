import React from "react";
import ProductItem from "./ProductItem";

export default function ProductTabs({ tabList, tabPanel }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-8 ">
        <div role="tablist" className="w-2/5 tabs tabs-boxed tabs-sm">
          {tabList.map((list, index) => (
            <a key={index} role="tab" className="tab tab-sm ">
              {list}
            </a>
          ))}
        </div>
      </div>
      <div className="container flex flex-wrap justify-center gap-6 p-2 mx-auto">
        {tabPanel.map((panel, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {panel.map((product) => (
              <div key={product.id} className="p-4 ">
                <ProductItem product={product} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
