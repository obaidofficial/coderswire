import MyButton from "@/components/Helper/MyButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[500px] bg-white ">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/waves.jpg')] bg-center bg-cover bg-no-repeat opacity-25"></div>
      {/* Blue overlay that affects dark pixels */}
      <div className="absolute inset-0 bg-[#0486ff] mix-blend-screen pointer-events-none" />
      <div className="w-full h-full">
        <div className="relative z-4 flex items-center justify-end flex-col w-full h-full">
          <div className="md:w-[88%] w-[92%]">
            <div className="grid grid-cols-1 lg:grid-cols-9 gap-2">
              <div className="lg:col-span-4 flex justify-center flex-col w-full h-full">
                <p className="breadCrumb flex items-center gap-3 mb-2">
                  <Link href="/">
                    <span className="text-[#0486ff]">Home </span>
                  </Link>{" "}
                  <ArrowRightIcon className="w-3 h-3" /> <span>About</span>
                </p>
                <h1 className="text-[28px] mb-4 md:mb-3 text-left lg:text-[50px] leading-[1.1em] tracking-[-3px] text-[#121212] font-medium uppercase">
                  ABOUT{" "}
                  <span className="italic text-[#0486ff] font-medium">
                    Coders Wire
                  </span>
                </h1>
                <p className="text-[14px] mb-4 md:mb-6 w-full text-left lg:text-[20px] leading-[1.3em] text-[#121212] font-light">
                  Looking for a tech partner you can trust? We offer bespoke
                  cutting-edge software development and global IT outsourcing.
                  With our next-gen app development offerings, we simplify
                  business complexities so you can focus on running your
                  business.
                </p>

                {/* Button */}
                <Link href="/contact">
                  <MyButton>Contact Coders Wire</MyButton>
                </Link>
              </div>

              <div className="lg:col-span-5 flex justify-evenly">
                <div className="rounded-full bg-radial-[at_50%_45%] from-[#0486ff] via-white to-transparent">
                  <Image
                    src="/images/abt-banner.webp"
                    alt="About Banner Team"
                    width={650}
                    height={650}
                    className="z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
