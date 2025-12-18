"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MyButton from "@/components/Helper/MyButton";

const TabsComponents = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef(null);

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);

  return (
    <div className="flex justify-center items-center bg-transparent">
      <div className="mx-w-md flex">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-5">
          <div className="p-2 grid grid-col-1 lg:col-span-2 tabsBgColor bg-[#f5fbff] dark:bg-[#1c1c1c] rounded-lg shadow-md">
            {items.map((item, index) => (
              <button
                ref={index === 0 ? firstBtnRef : null}
                key={item.title}
                onClick={() => setSelectedTab(index)}
                className={`outline-none m-1 p-3 hover:bg-[#00000010] dark:hover:bg-[#ffffff30] text-left cursor-pointer text-[#252525] dark:text-white text-[16px] lg:text-[18px] rounded-lg ${
                  selectedTab === index
                    ? "bg-[#0486ff] hover:bg-[#0486ff] dark:bg-[#ffffff30] text-white font-semibold"
                    : ""
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="p-8 grid grid-col-1 lg:col-span-5 shadow-2xl rounded-lg bg-white dark:bg-[#1c1c1c]">
            {items.map((item, index) => (
              <div
                key={item.title + "-content"}
                className={`${selectedTab === index ? "" : "hidden"}`}
              >
                <div className="text-[#252525] dark:text-white pb-2 font-bold text-[23px] lg:text-[26px]">
                  {item.title}
                </div>
                <div className="text-[#252525] dark:text-white pb-4 text-[14px]">
                  {item.content}
                </div>
                <Link href={item.url}>
                  <MyButton>Read More</MyButton>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsComponents;
