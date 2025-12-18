import Image from "next/image";
import React from "react";

type Props = {
  data: {
    id: number;
    image: string;
    alt: string;
  };
};

const ClientSliderCard = ({ data }: Props) => {
  return (
    <div className="bg-white border-2 border-black/10 hover:border-[#0486ff]/60 hover:shadow-md rounded-lg p-6 m-1.5 flex items-center justify-center h-[100px]">
      <Image src={data.image} alt={data.alt} width={110} height={50} />
    </div>
  );
};

export default ClientSliderCard;
