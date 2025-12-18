"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] sm:h-screen">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-[radial-gradient(50%_50%_at_50%_50%,#fff0_0%,#fff_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,#0000_0%,#000_100%)] z-1"></div>

      {/* Video */}
      <video
        src="/images/bg.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover invert dark:invert-0 grayscale-100 dark:grayscale-0"
      />

      {/* Text Content */}
      <div className="absolute z-100 w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div className="md:w-[88%] w-[92%]">
            <h1 className="text-[28px] mb-4 md:mb-3 text-center lg:text-[100px] leading-[1.1em] tracking-[-3px] text-[#121212] dark:text-white font-normal uppercase">
              Elevate Your Brand with{" "}
              <span className="italic text-[#0486ff] font-medium">
                Coders Wire
              </span>{" "}
              Services
            </h1>
            <p className="text-[14px] mb-4 md:mb-6 w-full lg:w-[1000px] mx-auto text-center lg:text-[32px] leading-[1.2em] text-[#121212] dark:text-white font-light">
              We build innovative, custom-fit solutions that solve what matters
              most and help you reach your highest potential.
            </p>
            <div className="text-[18px] mb-4 md:mb-3 text-center md:text-[26px] lg:text-[32px] leading-[1.2em] text-[#121212] dark:text-white font-medium md:flex block justify-center items-center uppercase">
              We connect you with top 3%
              <fieldset className="typing backdrop-blur-xs bg-black/1 dark:bg-white/1 text-[#252525] dark:text-white uppercase border-2 border-black/20 dark:border-white/20 rounded-lg text-[26px] px-3 pb-4 pt-2 lg:pb-2 lg:pt-2 ml-5 mt-4 lg:mt-0">
                {/* <legend className="text-[14px] text-left font-light px-2.5 text-[#121212] dark:text-white leading-0 capitalize">
                  Action
                </legend> */}
                <span className="inline-block w-[330px]">
                  <Typewriter
                    options={{
                      strings: [
                        "UI / UX Engineers",
                        "Offshore Developers",
                        "DevOps Engineers",
                        "Software Developers",
                        "QA Engineers",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </fieldset>
            </div>
            {/* <div className="flex gap-4 items-center text-center justify-center">
              <Link href="#" className="hidden xl:block">
                <button className="px-6 py-2 text-black dark:hover:text-white text-base transition-all duration-200 rounded-lg cursor-pointer bg-[#f5f5f5] font-medium dark:font-normal shadow-md border-2 border-white/20 dark:shadow-none shadow-[#bebebe] uppercase">
                  Services
                </button>
              </Link>
              <Link href="#" className="hidden xl:block">
                <button className="px-6 py-2 text-white dark:text-[#ffffffc3] dark:hover:text-white text-base transition-all duration-200 rounded-lg cursor-pointer bg-black dark:bg-[#121212] font-medium dark:font-normal shadow-md border-2 border-[#1c1c1c] dark:shadow-none shadow-[#bebebe] uppercase">
                  Portfolio
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
