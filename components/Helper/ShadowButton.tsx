import React from "react";

type Props = {
  children: React.ReactNode;
};

const ShadowButton = ({ children }: Props) => {
  return (
    <button className="px-4 py-2 w-full text-black text-base transition-all duration-150 rounded-lg cursor-pointer bg-white font-medium shadow-none border-2 border-black hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)] shadow-[#bebebe] drop-shadow-[-2px_2px_0px_rgba(0,0,0,1)]">
      {children}
    </button>
  );
};

export default ShadowButton;
