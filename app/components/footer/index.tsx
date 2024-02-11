import React from "react";
// import Link from "next/link";
import PrefixedLink from "../prefixedLink";
import Image from "next/image";
import footerLogo from "../../public/footerLogo.jpg";
import transparentSketch from "../../public//transparent-sketchedplane.png";

const Footer = () => {
  return (
    <>
      <div className="z-10 w-full text-center sm:text-left items-center justify-between font-mono text-sm lg:flex bg-[#E5E5E5] p-4 sm:pr-8 border-t-2 border-[#1780A8]">
        <a
          href="/"
          className="sm:pr-10 sm:border-r-2 border-[#C8C8C8] flex justify-center"
        >
          <Image
            src={footerLogo}
            alt="Anderson Aerial Logo2"
            width={240}
            priority
          />
        </a>
        <div className="flex flex-col text-2xl underline gap-y-5">
          <PrefixedLink
            href="/services"
            className="transition duration-500 hover:scale-125"
          >
            <p>Services Available</p>
          </PrefixedLink>
          <PrefixedLink
            href="/contact"
            className="transition duration-500 hover:scale-125"
          >
            <p>Contact Us</p>
          </PrefixedLink>
        </div>
        <div className="flex justify-center">
          <Image
            src={transparentSketch}
            alt="Sketched Plane"
            width={240}
            priority
          />
        </div>
        <div className="sm:pl-10 sm:border-l-2 border-[#C8C8C8] min-h-[150px]">
          <div>
            <p className="text-xl">Anderson Aerial LLC.</p>
            <p>(785) 483-3437</p>
          </div>
          <div className="mt-2">
            <p>Russell Municipal Airport</p>
            <p>4231 Airport Terrace</p>
            <p>Russell, Ks 67665</p>
          </div>
          <p className="mt-2">© 2024 by Anderson Aerial LLC.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
