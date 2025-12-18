import React from "react";

const MapSection = () => {
  return (
    <div className="pt-16 pb-16 bg-white dark:bg-black">
      <div className="w-[92%] lg:w-[88%] mx-auto grid grid-cols-1 lg:grid-cols-9 gap-20">
        {/* Text Content */}
        <div className="lg:col-span-5">
          <h2 className="text-[26px] mb-4 md:mb-3 md:text-[28px] lg:text-[36px] leading-[1.2em] text-[#252525] dark:text-white font-semibold">
            About CodersWire
          </h2>
          <p className="text-[14px] mb-4 md:mb-6 md:text-[16px] lg:text-[15px] leading-[1.6em] tracking-[0.2px] text-[#252525] dark:text-[#ffffffc3] font-regular">
            Access a global talent pool of top 3% coders at CodersWire and save
            up to 60% on costs by hiring our technical experts—from UI/UX
            designers to software developers and cloud engineers. Let's
            collaborate to develop creative solutions that advance your company.
          </p>
        </div>
      </div>

      <div className="w-[92%] lg:w-[88%] mx-auto grid grid-cols-1 lg:grid-cols-9 gap-7 lg:gap-15">
        {/* Map */}
        <div className="lg:col-span-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48181975.307891615!2d-93.1032672!3d42.5171772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87efff90fac48dbf%3A0x582fd6ad593edef8!2s2320%20Richard%20Rd%2C%20Cedar%20Falls%2C%20IA%2050613%2C%20USA!5e0!3m2!1sen!2s!4v1763013584849!5m2!1sen!2s"
            width="100%"
            height="400"
            className="rounded-[10px] dark:grayscale-100 dark:brightness-80"
          ></iframe>
        </div>

        {/* Numbers */}
        <div className="lg:col-span-2">
          <h3 className="text-[30px] mb-4 md:mb-2 md:text-[28px] lg:text-[36px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-bold">
            5000+
          </h3>
          <p className="text-[14px] mb-8 md:mb-6 md:text-[16px] lg:text-[14px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-regular">
            Pre-vetted tech talent pool
          </p>

          <h3 className="text-[30px] mb-4 md:mb-2 md:text-[28px] lg:text-[36px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-bold">
            90%
          </h3>
          <p className="text-[14px] mb-8 md:mb-6 md:text-[16px] lg:text-[14px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-regular">
            Retention Rate
          </p>

          <h3 className="text-[30px] mb-4 md:mb-2 md:text-[28px] lg:text-[36px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-bold">
            60+
          </h3>
          <p className="text-[14px] mb-8 md:mb-6 md:text-[16px] lg:text-[14px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-regular">
            Tools and technologies expertise
          </p>

          <h3 className="text-[30px] mb-4 md:mb-2 md:text-[28px] lg:text-[36px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-bold">
            7+
          </h3>
          <p className="text-[14px] mb-8 md:mb-6 md:text-[16px] lg:text-[14px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-regular">
            Tailored solutions meeting diverse business needs effectively
          </p>
        </div>

        <div className="lg:col-span-2 -mt-5 lg:mt-0">
          <h3 className="text-[30px] mb-4 md:mb-2 md:text-[28px] lg:text-[36px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-bold">
            8+
          </h3>
          <p className="text-[14px] mb-8 md:mb-6 md:text-[16px] lg:text-[14px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-regular">
            Industries Served
          </p>

          <h3 className="text-[30px] mb-4 md:mb-2 md:text-[28px] lg:text-[36px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-bold">
            100+
          </h3>
          <p className="text-[14px] mb-8 md:mb-6 md:text-[16px] lg:text-[14px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-regular">
            Happy Clients
          </p>

          <h3 className="text-[30px] mb-4 md:mb-2 md:text-[28px] lg:text-[36px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-bold">
            250+
          </h3>
          <p className="text-[14px] mb-8 md:mb-6 md:text-[16px] lg:text-[14px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-regular">
            IT Experts
          </p>

          <h3 className="text-[30px] mb-4 md:mb-2 md:text-[28px] lg:text-[36px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-bold">
            20+
          </h3>
          <p className="text-[14px] mb-8 md:mb-6 md:text-[16px] lg:text-[14px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-regular">
            Augmented top talent from 20+ countries
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
