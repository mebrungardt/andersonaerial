import { StaticImageData } from "next/image";
import React from "react";

type ssProps = {
  title: string;
  text: string;
  image: StaticImageData;
};

const ServiceSection = ({ title, text, image }: ssProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-around w-full lg:flex text-black min-h-full m-12">
      <div className="flex flex-col justify-center w-full sm:w-2/3 lg:flex min-h-[260px] p-4">
        <p className="text-5xl font-bold mb-12">{title}</p>
        <p className="font-light text-2xl">{text}</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:w-1/3 lg:flex bg-white min-h-[260px] text-[#1780A8] p-8">
        <div
          className="h-80 w-80 flex items-center justify-center lg:flex bg-cover rounded-full border-[#FFD545] border-4"
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        />
      </div>
    </div>
  );
};

export default ServiceSection;
