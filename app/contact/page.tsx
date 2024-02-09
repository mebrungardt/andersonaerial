import React from "react";
import ContactButton from "../components/contactButton";
import phoneIcon from "../public/phone.svg";
import emailIcon from "../public/email.svg";
import textIcon from "../public/text.svg";
import familyPhoto from "../public/FamilyPhotoCrp.jpg";

const Contact = () => {
  return (
    <main className="flex min-h-[calc(100vh-310px)] flex-col items-center">
      <div className="flex flex-col w-full items-center justify-center lg:flex bg-[#E5E5E5] text-white min-h-[560px] ">
        <p className="text-6xl font-bold mb-12 text-[#1780A8]">CONTACT US</p>
        <p className="text-xl text-black">
          Whether it's a quick question, you need a quote, or just want to touch
          base.
        </p>
        <div className="flex justify-center content-center w-full min-h-[300px] text-center">
          <ContactButton
            icon={phoneIcon}
            title="CALL"
            subTitle="(785) 483-3437"
          />
          <ContactButton
            icon={textIcon}
            title="TEXT"
            subTitle="(785) 483-3437"
          />
          <ContactButton
            icon={emailIcon}
            title="EMAIL"
            subTitle="(785) 483-3437"
          />
        </div>
      </div>
      <div className="flex flex-row justify-around w-full lg:flex text-black min-h-[400px] bg-[#636363]">
        <div className="flex flex-col justify-center items-center w-1/3 lg:flex min-h-[260px] text-[#1780A8] p-8">
          <div
            className="h-80 w-80 flex w-full items-center justify-center lg:flex bg-cover rounded-full border-[#FFD545] border-4"
            style={{
              backgroundImage: `url(${familyPhoto.src})`,
            }}
          />
        </div>
        <div className="flex flex-col justify-center w-2/3 lg:flex min-h-[260px] p-4">
          <p className="text-5xl font-bold mb-12">Mason Angel</p>
          <p className="font-light text-2xl">Owner Operator</p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
