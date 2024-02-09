import { StaticImageData } from "next/image";
import React from "react";

type serviceButtonProps = {
  text: string;
  onClick: () => void;
  image: StaticImageData;
};

const ServiceButton = ({ text, onClick, image }: serviceButtonProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center lg:flex mt-8 transition duration-500 hover:scale-125 cursor-pointer"
      onClick={() => onClick()}
    >
      <div
        className="flex w-full items-center justify-center lg:flex bg-cover text-white min-h-[240px] max-w-[200px] border-[#FFD545] border-2 rounded-xl"
        style={{
          backgroundImage: `url(${image.src})`,
        }}
      />
      <div className="flex flex-col justify-around content-center h-full text-center">
        <p className="text-2xl text-white mt-4">{text}</p>
      </div>
    </div>
  );
};

export default ServiceButton;
