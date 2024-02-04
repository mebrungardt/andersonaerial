import React from "react";
import Link from "next/link";
import Image from "next/image";
import footerLogo from "../../public/footerLogo.jpg";
import transparentSketch from "../../public//transparent-sketchedplane.png";
import { usePathname } from "next/navigation";

const Footer = () => {
  //   const path = usePathname();
  //   const isContact = path.includes("/contact");
  //   const isServices = path.includes("/services");
  //   const isHome = !isContact && !isServices;

  return (
    <>
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex bg-[#E5E5E5] p-4 pr-8 border-t-2 border-[#1780A8]">
        <a href="/" className="pr-10 border-r-2 border-[#C8C8C8]">
          <Image
            src={footerLogo}
            alt="Anderson Aerial Logo2"
            width={240}
            priority
          />
        </a>
        <div className="flex flex-col text-2xl underline gap-y-5">
          <Link href="/services">
            <p>Services Available</p>
          </Link>
          <Link href="/contact">
            <p>Contact Us</p>
          </Link>
        </div>
        <div>
          <Image
            src={transparentSketch}
            alt="Sketched Plane"
            width={240}
            priority
          />
        </div>
        <div className="pl-10 border-l-2 border-[#C8C8C8] min-h-[150px]">
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
        {/* <ul className="hidden md:flex gap-x-10 text-black text-xl">
          <li className="transition duration-500 hover:scale-125">
            <Link href="/" className={isHome ? "underline" : ""}>
              <p>Home</p>
            </Link>
          </li>
          <li className="transition duration-500 hover:scale-125">
            <Link href="/services" className={isServices ? "underline" : ""}>
              <p>Available Services</p>
            </Link>
          </li>
          <li className="transition duration-500 hover:scale-125">
            <Link href="/contact" className={isContact ? "underline" : ""}>
              <p>Contact Us</p>
            </Link>
          </li> */}
        {/* </ul> */}
      </div>
    </>
  );
};

export default Footer;
