import React from "react";
import FormContact from "./FormContact";

export default function Contact() {
  return (
    <div>
      <section className="relative text-gray-400 bg-gray-900 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
          <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-900 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
            />
            <div className="relative flex flex-wrap py-6 bg-gray-900 rounded shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                  EMAIL
                </h2>
                <a className="leading-relaxed text-indigo-400">
                  example@email.com
                </a>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-white title-font">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
            <FormContact />
          </div>
        </div>
      </section>
    </div>
  );
}
