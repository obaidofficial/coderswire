import Image from "next/image";
import React from "react";

const SiteRatings = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[88%] mx-auto">
        {/* Text Content */}
        <h2 className="text-[20px] text-center mb-4 md:mb-10 md:text-[28px] lg:text-[36px] leading-[1.2em] text-[#252525] font-semibold">
          Review Site Ratings
        </h2>
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="lg:col-span-1 mx-auto">
            <Image
              src="/images/ratings/The-Manifeat.avif"
              width={300}
              height={300}
              alt="clutch"
              className="shadow-xl border border-[#00000030] p-6"
            />
          </div>
          <div className="lg:col-span-1 mx-auto">
            <Image
              src="/images/ratings/Clutch.avif"
              width={300}
              height={300}
              alt="clutch"
              className="shadow-xl border border-[#00000030] p-6"
            />
          </div>
          <div className="lg:col-span-1 mx-auto">
            <Image
              src="/images/ratings/TB_logo.avif"
              width={300}
              height={300}
              alt="clutch"
              className="shadow-xl border border-[#00000030] px-12 py-29"
            />
          </div>
          <div className="lg:col-span-1 mx-auto">
            <Image
              src="/images/ratings/Good-Firms.avif"
              width={300}
              height={300}
              alt="clutch"
              className="shadow-xl border border-[#00000030] p-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteRatings;
