import Image from "next/image";
import React from "react";

const LeadershipValues = () => {
  return (
    <div className="pb-16 pt-16 bg-white">
      <div className="w-[92%] lg:w-[88%] mx-auto">
        {/* Text Content */}
        <div>
          <h2 className="text-[24px] mb-4 md:mb-3 md:text-[28px] text-center lg:text-[40px] leading-[1.2em] text-[#252525] dark:text-white font-normal uppercase">
            What our Leadership Says
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto w-[1260px] pt-8">
          <div className="col-span-2 flex flex-col justify-center">
            <h4 className="text-[14px] md:text-[16px] lg:text-[40px] leading-[1.2em] text-black font-extrabold mb-3">
              Our Vision
            </h4>
            <p className="text-[16px] text-[#505050] font-normal leading-[1.6em]">
              At <b>CodersWire</b>, we provide cutting-edge software development
              and IT outsourcing services, helping businesses worldwide
              accelerate growth, enhance efficiency, and drive digital
              transformation. With expert development teams in Lahore, Pakistan,
              and a sales office in Texas, USA, we deliver high-quality,
              scalable, and innovative solutions tailored to your business
              needs.
            </p>
            <p className="text-[14px] mt-6  mb-2 md:text-[16px] lg:text-[18px] leading-[1.2em] text-[#373737] font-semibold">
              CEO & Co-Founder
            </p>
            <p className="text-[14px]  mb-2 md:text-[16px] lg:text-[24px] leading-[1.2em] text-[#373737] font-bold">
              Muhammad Soban Raheel
            </p>
          </div>
          <div className="col-span-2">
            <Image
              src="/images/Leaders/soban_raheel.jpg"
              alt="Soban Raheel"
              width={500}
              height={500}
              className="float-right rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto w-[1260px] pt-8">
          <div className="col-span-2">
            <Image
              src="/images/Leaders/soban_raheel.jpg"
              alt="Soban Raheel"
              width={500}
              height={500}
              className="float-left rounded-lg"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center">
            <h4 className="text-[14px] md:text-[16px] lg:text-[40px] leading-[1.2em] text-black font-extrabold mb-3">
              Our Philosophy
            </h4>
            <p className="text-[16px] text-[#505050] font-normal leading-[1.6em]">
              At <b>CodersWire</b>, we believe innovation starts with
              understanding human behavior. Our philosophy centers on{" "}
              <b>Behavioral Impact Engineering</b> — using AI to redefine how
              people and companies connect, collaborate, and grow.
            </p>
            <p className="text-[16px] text-[#505050] font-normal leading-[1.6em] mt-1">
              We innovate to create global hiring ecosystems where the right
              talent meets the right opportunity, solving complex problems that
              go beyond technology. At our core, we engineer human potential
              through intelligence, empathy, and impact.
            </p>
            <p className="text-[14px] mt-6  mb-2 md:text-[16px] lg:text-[18px] leading-[1.2em] text-[#373737] font-semibold">
              COO and Co-Founder
            </p>
            <p className="text-[14px]  mb-2 md:text-[16px] lg:text-[24px] leading-[1.2em] text-[#373737] font-bold">
              Ayyub Zaman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipValues;
