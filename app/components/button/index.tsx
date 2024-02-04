import React from "react";
import Link from "next/link";

type buttonProps = {
  text: string;
  link: string;
};

const Button = ({ text, link = "/" }: buttonProps) => {
  return (
    <Link
      href={link}
      className="flex justify-center align-middle w-9/12 h-1/4 rounded-lg bg-white border-[#1780A8] border-2 flex cursor-pointer transition duration-500 hover:scale-125"
    >
      <div className="flex flex-col justify-around content-center h-full text-center">
        <p className="text-4xl text-[#1780A8]">{text}</p>
      </div>
    </Link>
  );
};

export default Button;
