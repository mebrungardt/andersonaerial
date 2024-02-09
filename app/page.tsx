import Image from "next/image";
import jumboTron from "./public/jumboTron.jpg";
import fieldImg from "./public/field.jpg";
import hangarImg from "./public/hangar.jpg";
import Button from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-310px)] flex-col items-center">
      {/* <main className="flex min-h-screen flex-col items-center justify-between"> */}
      <div
        className="flex w-full items-center justify-center lg:flex bg-cover text-white min-h-[460px] "
        style={{
          backgroundImage: `url(${jumboTron.src})`,
        }}
      >
        <div className="flex justify-center align-middle w-9/12 h-9/12 rounded-lg bg-black flex min-h-[320px] bg-opacity-30">
          <div className="flex flex-col justify-around content-center h-full min-h-[300px] text-center">
            <p className="text-3xl font-medium pt-4">Welcome to</p>
            <div className="rounded-lg bg-white h-1 w-full" />
            <p className="text-6xl font-bold">ANDERSON AERIAL</p>
            <div className="rounded-lg bg-white h-1 w-full" />
            <p className="text-3xl font-medium">Your Local Aerial Expert</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around w-full lg:flex bg-cover text-white min-h-[460px] m-4">
        <div className="flex flex-col justify-around w-1/4 lg:flex border-[#636363] border-2 bg-[#636363] text-white min-h-[260px] text-center p-4">
          <p className="text-3xl">Based out of Russel, Kansas</p>
          <p className="font-light text-2xl">
            We primarily service the following counties:
          </p>
          <ul className="font-light text-2xl">
            <li>Russell, </li>
            <li>Osborne, </li>
            <li>Barton, </li>
            <li>Ellis, </li>
            <li> Rooks, </li>
            <li> Lincoln, </li>
            <li> Smith </li>
          </ul>
        </div>
        <div className="flex flex-col justify-around w-3/4 lg:flex border-[#636363] border-y-2 bg-white min-h-[260px] text-center text-[#1780A8] p-8">
          <p className="text-4xl font-bold">
            Anderson Aerial is a family-owned business dedicated to serving
            Kansas farmers and ranchers since 1980.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around w-full lg:flex bg-cover text-white min-h-[460px] mb-6 mt-2">
        <div
          className="flex items-center justify-center lg:flex bg-cover text-white min-h-[460px] w-1/2 ml-5 bg-opacity-30"
          style={{
            backgroundImage: `url(${fieldImg.src})`,
          }}
        >
          <div className="bg-opacity-30 bg-white w-full h-full flex items-center justify-center lg:flex">
            <Button text="Services Available" link="/services" />
          </div>
        </div>
        <div
          className="flex items-center justify-center lg:flex bg-cover text-white min-h-[460px] w-1/2 mr-5"
          style={{
            backgroundImage: `url(${hangarImg.src})`,
          }}
        >
          <div className="bg-opacity-30 bg-white w-full h-full flex items-center justify-center lg:flex">
            <Button text="Contact Us" link="/contact" />
          </div>
        </div>
      </div>
    </main>
  );
}
