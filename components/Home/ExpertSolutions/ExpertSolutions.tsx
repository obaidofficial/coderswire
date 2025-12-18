import MyButton from "@/components/Helper/MyButton";
import Image from "next/image";
import React from "react";

const ExpertSolutions = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[92%] lg:w-[88%] mx-auto">
        {/* Text Content */}
        <h2 className="text-[24px] text-center mb-4 md:mb-3 md:text-[28px] lg:text-[36px] leading-[1.2em] text-[#252525] font-semibold">
          Unlock Your Potential with Expert Solutions
        </h2>
        <p className="text-[14px] lg:w-[750px] mx-auto mb-4 md:mb-6 text-center lg:text-[15px] leading-[1.6em] tracking-[0.2px] text-[#252525] font-normal">
          Elevate your business strategy with our customized services designed
          to deliver excellence across all platforms. Whether you're looking to
          streamline operations, boost productivity, or enhance your
          technological capabilities, we have all the required expertise you
          need. Get started today and transform your business with us.
        </p>
        <div className="lg:px-8 lg:w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="lg:col-span-1 flex items-center lg:mr-[-150px] z-3">
              <div className="bg-white shadow-lg rounded-lg border border-[#00000020] p-6">
                <h3 className="font-bold text-[22px] lg:text-[26px] leading-[1.2em] text-[#252525]">
                  Accelerate Growth with Cloud, AI, and Expert Tech Teams
                </h3>
                <p className="text-[#252525] mt-4 mb-6 text-[14px]">
                  Empower your business with cutting-edge cloud solutions, AI
                  expertise, and skilled technology teams. From scalable
                  software development to precision-driven tech talent, we
                  provide end-to-end support to accelerate innovation, optimize
                  operations, and drive growth. Start building smarter—partner
                  with us today!
                </p>
                <MyButton>Explore More</MyButton>
              </div>
            </div>
            <div className="lg:col-span-2 mt-4 lg:mt-0">
              <Image
                src="/images/expertsolutions/cover.avif"
                width={850}
                height={850}
                alt="Cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSolutions;
