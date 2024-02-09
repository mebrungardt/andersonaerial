import Image, { StaticImageData } from "next/image";
import React from "react";

type serviceButtonProps = {
  subTitle: string;
  icon: StaticImageData;
  title: string;
};

const ContactButton = ({ subTitle, icon, title }: serviceButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex mt-8">
      <div className="flex flex-col w-full items-center justify-center lg:flex bg-cover min-h-[280px] w-[240px] bg-white border-[#FFD545] border-2 rounded-xl mx-8">
        <Image src={icon} alt={`${title} icon`} width={80} height={80} />
        <p className="text-4xl text-[#1780A8] mt-2">{title}</p>
        <p className="text-black text-xl mt-8">{subTitle}</p>
      </div>
    </div>
  );
};

export default ContactButton;
