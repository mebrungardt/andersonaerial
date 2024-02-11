import React from "react";
// import Link from "next/link";
import PrefixedLink from "../prefixedLink";
type buttonProps = {
  text: string;
  link: string;
};

const Button = ({ text, link = "/" }: buttonProps) => {
  return (
    <PrefixedLink
      href={link}
      className="flex justify-center align-middle sm:w-9/12 sm:h-1/4 rounded-lg bg-white border-[#1780A8] border-2 flex cursor-pointer transition duration-500 hover:scale-125 py-5 px-2"
    >
      <div className="flex flex-col justify-around content-center h-full text-center">
        <p className="text-4xl text-[#1780A8]">{text}</p>
      </div>
    </PrefixedLink>
  );
};

export default Button;
