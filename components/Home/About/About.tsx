import React from "react";

const About = () => {
  return (
    <div className="pt-10 pb-16 bg-white ">
      {/* <div className="absolute h-full w-full bg-[url('/images/industries-bg.jpg')] bg-cover bg-center bg-no-repeat" /> */}
      {/* <div className="absolute inset-0 bg-[#0486ff] mix-blend-screen pointer-events-none dark:hidden" /> */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,#fff0_0%,#fff_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,#0000_0%,#000_100%)] z-1"></div> */}

      {/* Video */}
      {/* <video
        src="/images/n-bg.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-contain invert grayscale-100 relative"
      /> */}

      {/* Blue overlay that affects dark pixels */}
      {/* <div className="absolute inset-0 bg-[#0486ff] mix-blend-screen pointer-events-none" /> */}

      <div className="z-100 w-full h-full">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div className="w-[92%] lg:w-[88%] mx-auto text-center">
            <h2 className="text-left text-[26px] mb-4 md:mb-3 md:text-[28px] lg:text-[56px] leading-[1.2em] text-[#252525] font-normal uppercase">
              About{" "}
              <span className="italic text-[#0486ff] font-medium">
                Coders Wire
              </span>
            </h2>
            <p className="text-[16px] md:text-[24px] lg:text-[2.1vw] mb-4 md:mb-6 leading-[1.2em] tracking-[0.2px] text-[#252525] font-light text-left">
              Access a global talent pool of top 3% coders at{" "}
              <span className="italic text-[#0486ff] font-normal">
                Coders Wire
              </span>{" "}
              and save up to 60% on costs by hiring our technical experts—from
              UI/UX designers to software developers and cloud engineers. Let's
              collaborate to develop creative solutions that advance your
              company.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-8 gap-2 px-6 py-3">
              <div className="lg:col-span-2 border-2 backdrop-blur-xs border-black/10 dark:border-white/10 rounded-2xl px-6 py-3">
                <p className="text-black/20 dark:text-white/20 text-right text-[30px] font-semibold">
                  01
                </p>
                <h3 className="text-[30px] mb-6 mt-6 md:mb-2 md:text-[28px] lg:text-[56px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-normal text-left">
                  250+
                </h3>
                <p className="text-[14px] mb-4 md:mb-0 md:text-[16px] lg:text-[16px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-light text-left">
                  IT Experts
                </p>
              </div>
              <div className="lg:col-span-2 border-2 backdrop-blur-xs border-black/10 dark:border-white/10 rounded-2xl px-6 py-3">
                <p className="text-black/20 dark:text-white/20 text-right text-[30px] font-semibold">
                  02
                </p>
                <h3 className="text-[30px] mb-6 mt-6 md:mb-2 md:text-[28px] lg:text-[56px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-normal text-left">
                  8+
                </h3>
                <p className="text-[14px] mb-4 md:mb-0 md:text-[16px] lg:text-[16px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-light text-left">
                  Industries Served
                </p>
              </div>
              <div className="lg:col-span-2 border-2 backdrop-blur-xs border-black/10 dark:border-white/10 rounded-2xl px-6 py-3">
                <p className="text-black/20 dark:text-white/20 text-right text-[30px] font-semibold">
                  03
                </p>
                <h3 className="text-[30px] mb-4 mt-6 md:mb-2 md:text-[28px] lg:text-[56px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-normal text-left">
                  90+
                </h3>
                <p className="text-[14px] mb-4 md:mb-0 md:text-[16px] lg:text-[16px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-light text-left">
                  Retention Rate
                </p>
              </div>
              <div className="lg:col-span-2 border-2 backdrop-blur-xs border-black/10 dark:border-white/10 rounded-2xl px-6 py-3">
                <p className="text-black/20 dark:text-white/20 text-right text-[30px] font-semibold">
                  04
                </p>
                <h3 className="text-[30px] mb-4 mt-6 md:mb-2 md:text-[28px] lg:text-[56px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-normal text-left">
                  100+
                </h3>
                <p className="text-[14px] mb-4 md:mb-0 md:text-[16px] lg:text-[16px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-light text-left">
                  Happy Clients
                </p>
              </div>

              <div className="lg:col-span-2 border-2 backdrop-blur-xs border-black/10 dark:border-white/10 rounded-2xl px-6 py-3">
                <p className="text-black/20 dark:text-white/20 text-right text-[30px] font-semibold">
                  05
                </p>
                <h3 className="text-[30px] mb-4 mt-6 md:mb-2 md:text-[28px] lg:text-[56px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-normal text-left">
                  5000+
                </h3>
                <p className="text-[14px] mb-4 md:mb-0 md:text-[16px] lg:text-[16px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-light text-left">
                  Pre-Vetted Tech Talent Pool
                </p>
              </div>
              <div className="lg:col-span-2 border-2 backdrop-blur-xs border-black/10 dark:border-white/10 rounded-2xl px-6 py-3">
                <p className="text-black/20 dark:text-white/20 text-right text-[30px] font-semibold">
                  06
                </p>
                <h3 className="text-[30px] mb-4 mt-6 md:mb-2 md:text-[28px] lg:text-[56px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-normal text-left">
                  60+
                </h3>
                <p className="text-[14px] mb-4 md:mb-0 md:text-[16px] lg:text-[16px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-light text-left">
                  Tools & Technologies Expertise
                </p>
              </div>
              <div className="lg:col-span-2 border-2 backdrop-blur-xs border-black/10 dark:border-white/10 rounded-2xl px-6 py-3">
                <p className="text-black/20 dark:text-white/20 text-right text-[30px] font-semibold">
                  07
                </p>
                <h3 className="text-[30px] mb-4 mt-6 md:mb-2 md:text-[28px] lg:text-[56px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-normal text-left">
                  20+
                </h3>
                <p className="text-[14px] mb-4 md:mb-0 md:text-[16px] lg:text-[16px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-light text-left">
                  Talent across 20+ countries
                </p>
              </div>
              <div className="lg:col-span-2 border-2 backdrop-blur-xs border-black/10 dark:border-white/10 rounded-2xl px-6 py-3">
                <p className="text-black/20 dark:text-white/20 text-right text-[30px] font-semibold">
                  08
                </p>
                <h3 className="text-[30px] mb-4 mt-6 md:mb-2 md:text-[28px] lg:text-[56px] leading-[0.6em] lg:leading-[1.2em] text-[#252525] dark:text-white font-normal text-left">
                  7+
                </h3>
                <p className="text-[14px] mb-4 md:mb-0 md:text-[16px] lg:text-[16px] leading-[1.2em] text-[#252525] dark:text-[#ffffffc3] font-light text-left">
                  Solutions tailored to your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
