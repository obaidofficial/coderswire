import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const MyButton = ({ children }: Props) => {
  return (
    <button className='px-3.5 py-2 text-white text-base transition-all duration-200 rounded-lg cursor-pointer border-2 border-[#0486ff] bg-[#0486ff] after:content-["⇢"] after:text-[#000000] hover:text-[#000000] after:pl-7 my-btn'>
      {children}
    </button>
  );
};

export default MyButton;
