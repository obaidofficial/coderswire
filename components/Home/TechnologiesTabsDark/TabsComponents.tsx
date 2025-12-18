"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
      <div className="mx-w-md flex flex-col gap-y-2 w-full">
        <div className="p-1 flex justify-between items-center">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={item.title}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 border-b-3 border-[#ffffff20] hover:bg-[#ffffff10] text-center cursor-pointer text-white text-[14px] font-light ${
                selectedTab === index ? "changeHrTab" : ""
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="p-1 w-[94%] mx-auto mt-2">
          {items.map((item, index) => (
            <div
              key={item.title + "-content"}
              className={`${selectedTab === index ? "" : "hidden"}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-11 gap-20">
                <div className="lg:col-span-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="rounded-md"
                  />
                </div>
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div>
                    <div className="text-white pb-2 font-bold text-[26px]">
                      {item.title}
                    </div>
                    <div className="text-white pb-4 font-light">
                      {item.content}
                    </div>
                    <Link href={item.url}>
                      <MyButton>Read More</MyButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponents;
