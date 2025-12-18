import Link from "next/link";
import React from "react";

type Props = {
  data: {
    id: number;
    url: string;
    title: string;
    list: string[];
  };
};

const ModelsCard = ({ data }: Props) => {
  return (
    <Link href={data.url} className="backdrop-blur-sm">
      <div className="bg-white/40 dark:bg-[#101010]/70 border-2 border-black/10 hover:border-[#0486ff]/60 hover:shadow-md dark:border-white/10 rounded-lg p-6 m-1.5 h-[290px]">
        <h4 className="text-[24px] mb-4 font-medium text-[#252525] dark:text-white leading-[1.2em] h-[60px]">
          {data.title}
        </h4>
        <ul className="text-[#252525] dark:text-[#ffffffc3] list-disc pl-5 font-light  text-[18px] leading-[1.3em] marker:text-[#0486ff] dark:marker:text-white">
          {data.list.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ModelsCard;
