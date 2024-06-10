"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductItem from "./ProductItem";

export default async function ProductTabs({ tabList, tabPanel }) {
  return (
    <>
      <Tabs
        className="flex flex-col items-center justify-center m-8"
        selectedTabClassName={"tab-active"}
      >
        <TabList className="w-2/5 tabs tabs-boxed tabs-sm">
          {tabList.map((list, index) => (
            <Tab key={index} className="tab tab-sm">
              {list}
            </Tab>
          ))}
        </TabList>

        {tabPanel.map((panel, index) => (
          <TabPanel key={index}>
            <div className="container flex flex-wrap justify-center gap-6 p-6 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {panel.map((product) => (
                  <div key={product.id} className="p-4">
                    <ProductItem product={product} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
}

// "use client";
// import React, { useState } from "react";
// import ProductItem from "./ProductItem";

// export default function ProductTabs({ tabList, tabPanel }) {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center m-8">
//         <div role="tablist" className="tabs tabs-bordered">
//           {tabList.map((list, index) => (
//             <input
//               key={index}
//               type="radio"
//               name="product_tabs"
//               role="tab"
//               className={`tab tab-sm ${activeTab === index ? "tab-active" : ""}`}
//               aria-label={list}
//               checked={activeTab === index}
//               onChange={() => setActiveTab(index)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="container flex flex-wrap justify-center gap-6 p-2 mx-auto">
//         {tabPanel.map((panel, index) => (
//           <div
//             key={index}
//             role="tabpanel"
//             className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
//               activeTab === index ? "block" : "hidden"
//             }`}
//           >
//             {panel.map((product) => (
//               <div key={product.id} className="p-4">
//                 <ProductItem product={product} />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
