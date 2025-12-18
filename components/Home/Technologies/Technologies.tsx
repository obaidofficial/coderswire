import React from "react";
import Tabs from "./Tabs";

const Technologies = () => {
  return (
    <div className="pt-16 pb-16 bg-[#f2f9ff] h-[800px]">
      <div className="w-[88%] mx-auto">
        {/* Text Content */}
        <h2 className="text-[20px] text-center mb-4 md:mb-3 md:text-[28px] lg:text-[36px] leading-[1.2em] text-[#252525] font-semibold">
          Technologies We Work With
        </h2>
        <p className="text-[14px] w-[700px] mx-auto mb-4 md:mb-6 text-center md:text-[16px] lg:text-[15px] leading-[1.6em] tracking-[0.2px] text-[#252525] font-normal">
          Our commitment to using the best tools in the industry ensures that
          your projects are developed using the most advanced and suitable
          technologies available.
        </p>
        <div className="px-8">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
