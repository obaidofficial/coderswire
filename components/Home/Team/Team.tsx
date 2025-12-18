import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  data: {
    id: number;
    url: string;
    title: string;
    expert: string;
    years: string;
    skills: string[];
    image: string;
  };
};

const Team = ({ data }: Props) => {
  return (
    <div className="rounded-lg p-3 m-1.5 bg-white shadow border border-[#00000010]">
      <div className="w-full mx-auto grid grid-cols-1 gap-1.5">
        <Image
          src={data.image}
          alt={data.title}
          width={120}
          height={120}
          className="rounded-md mx-auto"
        />
        <h4 className="text-[18px] text-center font-medium text-[#181818] leading-[1.3em] tracking-[0.2px]">
          {data.title}
        </h4>
        <p className="text-[#0486ff] text-[13px] text-center">{data.expert}</p>
        <hr className="text-[#00000020]" />
        <div className="h-[200px] lg:h-[180px]">
          <p className="text-[#252525] text-[14px] text-center mb-2">
            {data.years} Year Experience
          </p>
          <div className="text-center text-[#252525] text-[13px] font-light">
            <ul className="w-[96%] mx-auto flex flex-wrap gap-2 justify-center">
              {data.skills.map((item, index) => (
                <li key={index} className="py-1 px-3 bg-[#00000010] rounded-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="text-[#00000020]" />
        <p className="text-[#0486ff] text-[14px] text-center font-bold">
          09:00 AM - 06:00 PM
        </p>
      </div>
    </div>
  );
};

export default Team;
