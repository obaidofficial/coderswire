"use client";
import { useEffect, useRef, useState } from "react";

const TechComponents = ({ items }) => {
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
              className={`outline-none w-full p-2 border-b-3 border-[#00000020] hover:bg-[#00000010] text-center cursor-pointer text-[#252525] text-[14px] font-light ${
                selectedTab === index ? "changeHrTab" : ""
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="p-1">
          {items.map((item, index) => (
            <div
              key={item.title + "-content"}
              className={`${selectedTab === index ? "" : "hidden"}`}
            >
              <div className="text-[#252525] pb-4 font-light">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechComponents;
