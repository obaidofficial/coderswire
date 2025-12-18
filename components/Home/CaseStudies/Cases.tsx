import MyButton from "@/components/Helper/MyButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: {
    id: number;
    url: string;
    title: string;
    image: string;
    description: string;
  };
};

const Cases = ({ data }: Props) => {
  return (
    <div className="rounded-lg p-6 m-1.5 border-2 border-[#ffffff80] case_card ">
      <div className="w-[96%] mx-auto grid grid-cols-1 lg:grid-cols-11 gap-10">
        <div className="col-span-6 flex flex-col justify-between">
          <div>
            <h4 className="text-[26px] font-medium pt-3 text-white leading-[1.3em] tracking-[0.2px]">
              {data.title}
            </h4>
            <p className="text-[16px] mb-4 font-light pt-2 text-white/90 leading-[1.3em] tracking-[0.2px]">
              {data.description}
            </p>
          </div>
          <Link href={data.url}>
            <MyButton>View Story</MyButton>
          </Link>
        </div>

        <div className="col-span-5 mx-auto">
          <Image
            src={data.image}
            alt={data.title}
            width={600}
            height={600}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Cases;
