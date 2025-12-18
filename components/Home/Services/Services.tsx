import React from "react";
import Tabs from "./Tabs";

const Services = () => {
  return (
    <div className="pt-16 pb-16 bg-white dark:bg-[#121212]">
      <div className="w-[92%] lg:w-[88%] mx-auto">
        {/* Text Content */}
        <h2 className="text-[24px] mb-4 md:mb-3 md:text-[28px] lg:text-[40px] leading-[1.2em] text-black font-normal uppercase">
          Our Core Software Engineering Services
        </h2>
        <p className="text-[14px] mb-4 md:mb-6 md:text-[16px] lg:text-[20px] leading-[1.2em] tracking-[0.2px] text-black font-light">
          Our outsourcing models are designed to optimize your operational
          success and project outcomes.
        </p>

        {/* Tabs */}
        <Tabs />
      </div>
    </div>
  );
};

export default Services;
