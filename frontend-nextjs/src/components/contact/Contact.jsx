import React from "react";
import FormContact from "./FormContact";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function Contact() {
  return (
    <div>
      <section className="relative text-gray-400 bg-gray-900 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
          <div>
            <Map />
          </div>
          <div className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
            <FormContact />
          </div>
        </div>
      </section>
    </div>
  );
}
