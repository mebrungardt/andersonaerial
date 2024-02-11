"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bannerLogo from "../../../public/bannerLogo.jpg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const isContact = path.includes("/contact");
  const isServices = path.includes("/services");
  const isHome = !isContact && !isServices;

  return (
    <>
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex bg-white p-4 pr-8 border-b-2 border-[#1780A8]">
        <a href="/" className="max-w-[240px]">
          <Image
            src={bannerLogo}
            alt="Anderson Aerial logo"
            // width={240}
            priority
          />
        </a>
        <ul className="hidden md:flex gap-x-10 text-black text-xl">
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
