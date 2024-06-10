import React from "react";

export default function ProductTabs({ tabList, tabPanel }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-8">
        <div role="tablist" className="w-2/5 tabs tabs-boxed">
          <a role="tab" className="tab tab-sm">
            Tab 1
          </a>
          <a role="tab" className="tab tab-active tab-sm">
            Tab 2
          </a>
          <a role="tab" className="tab tab-sm">
            Tab 3
          </a>
        </div>
        <div className="m-8 bg-black shadow-xl card w-96">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
