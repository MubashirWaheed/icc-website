"use client";
import Image from "next/image";
import { useState } from "react";

const servicesRow1 = [
  {
    serviceName: "Minor/major service",
    description:
      "Fluids and filters replacement, engine service for keeping your car like new",
  },
  {
    serviceName: "Tunning programing",
    description: "Enhance power and torque - unleash the beast",
  },
  {
    serviceName: "Suspension service",
    description: "Inspect, repair, align—for smooth, safe rides",
  },
];
const servicesRow2 = [
  {
    serviceName: "A/C Service",
    description: "Inspect, maintain, repair for cool driving",
  },
  {
    serviceName: "Body Shop",
    description:
      "Collision repair, denting, painting, refinishing and polishing ",
  },
  {
    serviceName: "Body Kits",
    description:
      "Installation, aligment, painting and polishing to make an exclusive vehicle ",
  },
];

const servicesRow3 = [
  {
    serviceName: "Mechanical jobs",
    description:
      "Engine, gear, transfer case, brakes, steering and etc. diagnostic, maintenance and repair",
  },
  {
    serviceName: "Electrical jobs",
    description:
      "Electrical diagnostics, repairs, and maintenance for any electronic components",
  },
  {
    serviceName: "Diagnostic",
    description:
      "Identifying and analyzing vehicle issues using most advanced diagnostic tools and methods",
  },
];

const generateDynamicStyles = (index) => {
  if (index === 1) {
    return `
      before:content-[''] before:h-[120px] before:bg-primaryGreen before:w-[1px] lg:before:w-[3px]
      after:content-[''] after:h-[120px] after:bg-primaryGreen after:w-[1px] lg:after:w-[3px]
    `;
  }
  return "";
};

const Services = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="z-10 relative  lg:pt-[20px] " id="services">
      <h2 className="font-bold sm:py-[26px] md:py-[40px] lg:py-[50px] text-center text-white  text-[32px] leading-3 md:text-[55px]">
        Our services include:
      </h2>
      <div className="px-[10px] max-w-[1180px] flex flex-col items-center justify-between gap-6 ">
        {/* ROW */}
        <div className="flex flex-col gap-4 sm:flex-row ">
          {servicesRow1.map((item, index) => (
            <div
              key={index}
              className={`
              flex flex-row items-center flex-1 gap-2 lg:flex-row sm:gap-2 md:gap-4 ${generateDynamicStyles(
                index
              )}`}
            >
              <div className="bg-[#6E7D00] rounded-full p-[12px]">
                <div className="relative w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[38px] md:h-[38px]">
                  <Image src="/images/tools.svg" alt="services" fill />
                </div>
              </div>
              <div className="text-center text-white sm:text-left ">
                <span className="sm:text-[18px] md:text-[20px] lg:text-[28px] cursor-pointer md:leading-3 lg:leading-6 hover:underline">
                  {item.serviceName}
                </span>
                <p className="sm:text-[12px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-5  font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ROW */}
        <div className=" flex flex-col gap-4 sm:flex-row ">
          {servicesRow2.map((item, index) => {
            return (
              <div
                key={index}
                className={` 
                ${generateDynamicStyles(index)}
              flex flex-row items-center flex-1 gap-2 lg:flex-row sm:gap-2 md:gap-4`}
              >
                <div className="bg-[#6E7D00] rounded-full p-[12px]">
                  <div className="relative w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[38px] md:h-[38px]">
                    <Image src="/images/tools.svg" alt="services" fill />
                  </div>
                </div>
                <div className="text-center text-white sm:text-left ">
                  <p className="sm:text-[18px] md:text-[20px] lg:text-[28px] cursor-pointer hover:underline">
                    {item.serviceName}
                  </p>
                  <p className="sm:text-[12px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-5  font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* ROW */}
        <div className=" flex flex-col gap-4 sm:flex-row ">
          {servicesRow3.map((item, index) => {
            return (
              <div
                key={index}
                className={`${generateDynamicStyles(
                  index
                )}flex flex-row items-center flex-1 gap-2 lg:flex-row sm:gap-2 md:gap-4`}
              >
                <div className="bg-[#6E7D00] rounded-full p-[12px]">
                  <div className="relative w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[38px] md:h-[38px]">
                    <Image src="/images/tools.svg" alt="services" fill />
                  </div>
                </div>
                <div className="text-center text-white sm:text-left ">
                  <p className="text-[22px] sm:text-[18px] sm: md:text-[20px] md:leading-5 lg:text-[28px] cursor-pointer hover:underline">
                    {item.serviceName}
                  </p>
                  <p className="sm:text-[12px] md:text-[14px] md:leading-[18px] md:mt-[5px] lg:mt-[0px]  lg:text-[16px] lg:leading-5  font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CONTACT POP UP*/}
        <div className=" z-50 relative group transition-all ease-out duration-300 ">
          <div className="sm:px-[18px]  py-[10px] hover:scale-[1.01] hover:shadow-gray-500 hover:shadow-md shadow-sm transition-all duration-300  cursor-pointer rounded-lg border-black border-[1px] bg-[#6e7f21] flex items-center  ">
            <div className="rounded-full bg-[#a5bc00] relative w-[40px] h-[40px]">
              <Image src="/images/right-arrow.svg" fill alt="right arrow" />
            </div>
            <p className="sm:px-[18px] text-[20px] font-normal text-[#a5bc00] uppercase">
              Special request
            </p>
          </div>
          {/* display this on hover */}
          <div className="  w-full rounded-lg absolute group-hover:opacity-100 group-hover:block hidden   opacity-0 transition-all bg-secondaryGreen py-[10px]">
            <form className="sm:px-[10px] flex flex-col w-full">
              <input
                className="text-white my-[5px] sm:px-[10px] sm:py-[5px] placeholder:text-[12px] focus:outline-black focus:border-none  placeholder-white sm:rounded-md  border-b-[1px] border-white bg-secondaryGreen"
                name="name"
                type="text"
                value={name}
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="my-[5px] sm:px-[10px] sm:py-[5px] placeholder:text-[12px] text-white focus:outline-black focus:border-none  placeholder-white sm:rounded-md  border-b-[1px] border-white bg-secondaryGreen"
                name="phone"
                text="number"
                value={phone}
                placeholder="Phone number "
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className="my-[5px] sm:px-[10px] sm:py-[5px] placeholder:text-[12px] text-white focus:outline-black focus:border-none  placeholder-white sm:rounded-md  border-b-[1px] border-white bg-secondaryGreen"
                name="model"
                type="text"
                value={model}
                placeholder="Make model"
                onChange={(e) => setModel(e.target.value)}
              />
              <input
                className="focus:outline-black text-white  placeholder:text-[12px] focus:border-none my-[5px] sm:px-[10px] sm:py-[5px] placeholder-white sm:rounded-md  border-b-[1px] border-white bg-secondaryGreen"
                name="comment"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Your comment"
              />
            </form>
            <div className="flex w-full items-end justify-end   pr-[20px]">
              <div className=" relative sm:w-[35px] sm:h-[35px] cursor-pointer bg-accentGreen rounded-full p-[10px]">
                <Image
                  src="/images/whatsapp-transparent.svg"
                  fill
                  alt="whatsapp logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
