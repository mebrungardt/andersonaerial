"use client";
import React, { useState } from "react";
import ServiceButton from "../components/serviceButton";
import customApplications from "../public/customApplications.png";
import soilSampling from "../public/soilSampling.jpg";
import cashAndCarryChemicals from "../public/cashAndCarryChemicals.jpg";
import ServiceSection from "../components/serviceSection";
import customApplicationsCircle from "../public/customApplicationsCircle.png";
import soilSamplingCircle from "../public/soilSamplingCircle.jpg";
import retailChemicalSales from "../public/retailChemicalSales.jpg";

const Services = () => {
  const [section, setSection] = useState(0);
  return (
    <main className="flex min-h-[calc(100vh-310px)] flex-col items-center">
      <div className="flex flex-col w-full items-center justify-center lg:flex bg-[#636363] text-white min-h-[560px] ">
        <p className="text-6xl font-bold mb-8">SERVICES AVAILABLE</p>
        <div className="flex justify-around content-center w-full min-h-[300px] text-center">
          <ServiceButton
            text="Custom Applications"
            image={customApplications}
            onClick={() => setSection(0)}
          />
          <ServiceButton
            text="Soil and Tissue Sampling"
            image={soilSampling}
            onClick={() => setSection(1)}
          />
          <ServiceButton
            text="Retail Chemical Sales"
            image={cashAndCarryChemicals}
            onClick={() => setSection(2)}
          />
        </div>
      </div>
      {!section ? (
        <ServiceSection
          image={customApplicationsCircle}
          title="Custom Applications"
          text="We have a variety of products to fit your farming program at the best prices possible including Herbicide, Fungicide, Insecticide, Foliar fertilizers and micronutrients."
        />
      ) : section === 1 ? (
        <ServiceSection
          image={soilSamplingCircle}
          title="Soil and Tissue Sampling"
          text="Ask us about our soil and tissue sampling. We have the supplies you will need."
        />
      ) : (
        <ServiceSection
          image={retailChemicalSales}
          title="Retail Chemical Sales"
          text="We carry all the major name brand products FMC, Bayer, Corteva, BASF, Syngenta and have access to all their financing options anywhere from 0%- 3.99%. Cash discounts for pre-pay. Come on in and price us out, we have a long list of options."
        />
      )}
    </main>
  );
};

export default Services;
