import MyButton from "@/components/Helper/MyButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactBanner = () => {
  return (
    <div className="relative w-full h-[380px] lg:h-[440px] bg-white ">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/waves.jpg')] bg-center bg-cover bg-no-repeat opacity-25"></div>
      {/* Blue overlay that affects dark pixels */}
      <div className="absolute inset-0 bg-[#0486ff] mix-blend-screen pointer-events-none" />
      <div className="w-full h-full">
        <div className="relative z-4 flex items-center justify-center flex-col w-full h-full">
          <div className="md:w-[88%] w-[92%]">
            <div className="flex justify-center flex-col w-full h-full items-center gap-0.5">
              <p className="breadCrumb flex items-center gap-3 mb-2">
                <Link href="/">
                  <span className="text-[#0486ff]">Home </span>
                </Link>{" "}
                <ArrowRightIcon className="w-3 h-3" /> <span>Contact Us</span>
              </p>
              <h1 className="text-[32px] mb-4 md:mb-3 text-center lg:text-[50px] leading-[1.1em] tracking-[-3px] text-[#121212] font-medium uppercase">
                Let’s Build the{" "}
                <span className="italic text-[#0486ff] font-medium">
                  Future{" "}
                </span>
                Together
              </h1>
              <p className="text-[14px] md:mb-6 w-full text-center lg:text-[20px] leading-[1.3em] text-[#121212] font-light">
                Looking for an AI-powered software solution, cloud
                transformation expertise, or a ready-to-deploy offshore team?
                You’re in the right place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
