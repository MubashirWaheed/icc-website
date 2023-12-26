import { Inder } from "next/font/google";
import React from "react";
import Accordion from "./Accordion";

const inder = Inder({
  subsets: ["latin"],
  variable: "--font-inder",
  weight: "400",
});

const accordionItems = [
  {
    image: "/images/minorservice.svg",
    title: "Minor/Major Service",
    content:
      "Fluids and filters replacement, engine service for keeping your car like new",
  },
  {
    image: "/images/diagnostic.svg",
    title: "Diagnostic",
    content:
      "Identifying and analyzing vehicle issues using most advanced diagnostic tools and methods",
  },
  {
    image: "/images/mechanical.svg",
    title: "Mechanical Jobs",
    content:
      "Engine, gear, transfer case, brakes, steering and etc. diagnostic, maintenance and repair",
  },
  {
    image: "/images/ac.svg",
    title: "A/C Service",
    content: "Inspect, maintain, repair for cool driving",
  },
  {
    image: "/images/suspension.svg",
    title: "Suspension service",
    content: "Inspect, repair, align—for smooth, safe rides",
  },
  {
    image: "/images/electrical.svg",
    title: "Electrical jobs",
    content:
      "Electrical diagnostics, repairs, and maintenance for any electronic systems and components",
  },
  {
    image: "/images/bodyshop.svg",
    title: "Body Shop",
    content: "Collision repair, denting, painting, refinishing and polishing ",
  },
  {
    image: "/images/tuning.svg",
    title: "Tuning programing ",
    content: "Enhance power and torque - unleash the beast",
  },
  {
    image: "/images/bodykit.svg",
    title: "Body Kits",
    content:
      "Installation, aligment, painting and polishing to make an exclusive vehicle ",
  },
];

const MobileServices = () => {
  return (
    <div className="mb-[40px] flex- flex-col items-center justify-center sm:hidden  w-full px-[40px] text-white">
      <div className={`${inder.variable} text-center  font-inder text-[50px]`}>
        Our Services
      </div>
      <div className=" flex flex-col gap-[50px] px-[20px] items-center">
        {accordionItems.map(({ image, title, content }, index) => {
          return (
            <Accordion
              key={index}
              image={image}
              title={title}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MobileServices;
