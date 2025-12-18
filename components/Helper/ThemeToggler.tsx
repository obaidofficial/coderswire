"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 transitio w-10 h-10 bg-[#f5f5f5] dark:bg-[#1c1c1c] border-2 border-white/20 rounded-full flex flex-col items-center justify-center shadow-md shadow-[#bebebe] dark:shadow-none"
    >
      {currentTheme === "dark" ? (
        <BiSun className="text-white dark:text-[#ffffffc3] hover:text-white w-8 h-8 cursor-pointer" />
      ) : (
        <BiMoon className="text-black dark:text-black w-8 h-8 cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeToggler;
