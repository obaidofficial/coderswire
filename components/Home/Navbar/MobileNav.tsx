import MyButton from "@/components/Helper/MyButton";
import { NavLinks } from "@/constants/navlinks";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "Translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-10002 bg-white/10 dark:bg-black/10 w-full h-screen`}
      ></div>

      {/* NavLinks */}
      <div
        className={`${navOpen} fixed pt-[100px] flex flex-col h-full transform transition-all duration-500 delay-300 w-full bg-white/40 dark:bg-[#25252580] backdrop-blur-md space-y-4 z-10050`}
      >
        {NavLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="relative text-[#252525] dark:text-[#ffffffc3] hover:dark:text-white w-fit text-[20px] ml-8 pb-1 sm:text-[30px] hover:text-[#0486ff] font-medium">
                {link.label}
              </p>
            </Link>
          );
        })}
        <div className="ml-8 mr-2">
          <Link href="#">
            <button className="px-3.5 py-2 text-black dark:text-[#ffffffc3] dark:hover:text-white text-base transition-all duration-200 rounded-lg cursor-pointer bg-white dark:bg-[#121212] font-medium dark:font-normal shadow-none border-2 border-black hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)] dark:shadow-none shadow-[#bebebe] drop-shadow-[-2px_2px_0px_rgba(0,0,0,1)]">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Close BTN */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[1.4rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
