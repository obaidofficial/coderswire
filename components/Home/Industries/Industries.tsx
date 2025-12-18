import Image from "next/image";
import React from "react";
import IndustriesButtons from "./IndustriesButtons";

const Industries = () => {
  return (
    <div className="pt-16 pb-16">
      {/* <div className="absolute h-full w-full dark:grayscale-100 dark:invert bg-[url('/images/industries-bg.jpg')] bg-cover bg-center bg-no-repeat" /> */}
      {/* Blue overlay that affects dark pixels */}
      {/* <div className="absolute inset-0 bg-[#0486ff] mix-blend-screen pointer-events-none dark:hidden" /> */}

      <div className="">
        <div className="w-[92%] lg:w-[88%] mx-auto">
          {/* Text Content */}
          <h2 className="text-[24px] mb-4 md:mb-3 md:text-[28px] lg:text-[40px] leading-[1.2em] text-black dark:text-white font-normal uppercase">
            Industries We Work With
          </h2>
          <p className="text-[14px] mb-4 md:mb-6 md:text-[16px] lg:text-[20px] leading-[1.2em] tracking-[0.2px] text-black font-light">
            Our outsourcing models are designed to optimize your operational
            success and project outcomes.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-4">
            <div className="col-span-2 flex">
              <Image
                src="/images/expertsolutions/cover.avif"
                alt="Health Care"
                width={850}
                height={850}
                className="rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <div className="px-1 text-center">
                <IndustriesButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
