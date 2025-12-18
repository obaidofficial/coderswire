import React from "react";
import Tabs from "./Tabs";

const TechnologiesTabsDark = () => {
  return (
    <div className="pt-6 pb-16">
      <div className="w-[88%] mx-auto">
        <div className="bg-[#292929] px-3 py-16 rounded-lg">
          {/* Text Content */}
          <h2 className="text-[20px] text-center mb-4 md:mb-3 md:text-[28px] lg:text-[36px] leading-[1.2em] text-[#ffffff] font-semibold">
            Emerging Innovation & Disruptive Technologies
          </h2>
          <p className="text-[14px] mb-4 md:mb-6 text-center md:text-[16px] lg:text-[15px] leading-[1.6em] tracking-[0.2px] text-[#ffffff] font-normal">
            Our outsourcing models are designed to optimize your operational
            success and project outcomes.
          </p>
          <div className="px-8">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesTabsDark;
