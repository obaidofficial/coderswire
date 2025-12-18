"use client";
import MyButton from "@/components/Helper/MyButton";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { NavLinks } from "@/constants/navlinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 60) setNavBg(true);
      if (window.scrollY < 60) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`${
        navBg
          ? "backdrop-blur-sm bg-white/20 dark:bg-black/20 shadow-lg shadow-black/5 dark:shadow-white/5"
          : "fixed"
      } transition-all duration-200 h-[74px] z-10000 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[92%] 2xl:w-[88%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="transition-all duration-200">
            <Image
              src="/images/logo.avif"
              alt="Coders Wire Logo"
              width={210}
              height={60}
              className={`${
                navBg
                  ? "brightness-[1] invert-[0] dark:brightness-[0] dark:invert-[1]"
                  : "brightness-[1] invert-[0] dark:brightness-[0] dark:invert-[1]"
              }`}
            />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className={`${
                    navBg
                      ? "text-[#252525] hover:text-[#0486ff] dark:text-[#ffffffc3] dark:hover:text-white"
                      : "text-[#252525] hover:text-[#0486ff] dark:text-[#ffffffc3] dark:hover:text-white"
                  } relative text-base w-fit font-medium`}
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="flex gap-5 items-center">
          {/* Button */}
          <Link href="/contact" className="hidden xl:block">
            <button className="px-3.5 py-2 text-black dark:text-[#ffffffc3] dark:hover:text-white text-base transition-all duration-150 rounded-lg cursor-pointer bg-white dark:bg-[#121212] font-medium dark:font-normal shadow-none border-2 border-black dark:border-white/20 hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)] dark:shadow-none shadow-[#bebebe] drop-shadow-[-2px_2px_0px_rgba(0,0,0,1)]">
              Contact Us
            </button>
          </Link>

          {/* Theme Toggler */}
          {/* <ThemeToggler /> */}

          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className={`w-8 h-8 cursor-pointer ${
              navBg
                ? "text-[#252525] dark:text-white"
                : "text-black dark:text-white"
            } lg:hidden`}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
