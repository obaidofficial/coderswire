import React from "react";
import Image from "next/image";
import ShadowButton from "@/components/Helper/ShadowButton";
import Link from "next/link";

const ServiceBoxes = () => {
  return (
    <div className="pt-10 pb-16 bg-white ">
      <div className="flex items-center justify-center flex-col w-full h-full">
        <div className="w-[92%] lg:w-[88%] mx-auto text-center">
          <h2 className="text-[26px] mb-4 md:mb-3 md:text-[32px] lg:text-[42px] leading-[1.2em] text-[#252525] dark:text-white font-normal uppercase">
            Our Core Software Engineering Services
          </h2>
          <p className="text-[16px] md:text-[24px] lg:text-[22px] mb-4 md:mb-6 leading-[1.2em] tracking-[0.2px] text-[#252525] dark:text-[#ffffffc3] font-light">
            Our outsourcing models are designed to optimize your operational
            success and project outcomes.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-9 gap-2 px-6 py-3">
            <div className="lg:col-span-3 border-2 border-[#0486ff]/50 bg-white rounded-2xl p-8 hover:shadow-xl">
              <Image
                src="/images/industries/ecommerce.png"
                alt="Health Care"
                width={50}
                height={50}
              />
              <h3 className="text-[22px] mb-6 mt-6 md:mb-2 md:text-[24px] lg:text-[28px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] font-normal text-left">
                Cloud Services
              </h3>
              <p className="text-[14px] mb-4 md:mb-0 md:text-[15px] lg:text-[15px] leading-[1.4em] text-[#252525] font-light text-left">
                Our deep industry expertise, combined with the latest
                advancements in cloud technology, allows us to craft customized
                cloud solutions that enhance data accessibility...
              </p>
              <div className="text-left mt-5">
                <Link href="#">
                  <ShadowButton>Read More</ShadowButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBoxes;
