"use client";
import Image from "next/image";
import { useState } from "react";

const servicesRow1 = [
  {
    serviceName: "Minor/major service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    serviceName: "Tunning programing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    serviceName: "Suspension service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const servicesRow2 = [
  {
    serviceName: "A/C Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    serviceName: "Body Shop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    serviceName: "Body Kits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const servicesRow3 = [
  {
    serviceName: "Mechanical jobs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    serviceName: "Electrical jobs",
    description:
      "Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit,  do  incididunt ut labore dolore magna.",
  },
  {
    serviceName: "Diagnostic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const generateDynamicStyles = (index) => {
  if (index === 1) {
    return `
      before:content-[''] before:h-[120px] before:bg-primaryGreen before:w-[1px] lg:before:w-[5px]
      after:content-[''] after:h-[120px] after:bg-primaryGreen after:w-[1px] lg:after:w-[5px]
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
    <div className="z-10 relative md:pt-[20px] " id="services">
      <h2 className="font-bold py-[50px] text-center text-white  text-[32px] leading-3 md:text-[55px]">
        Our services include:
      </h2>
      <div className="max-w-[1180px] flex flex-col items-center justify-between gap-6 ">
        {/* ROW */}
        <div className="  flex flex-col gap-4 sm:flex-row ">
          {servicesRow1.map((item, index) => (
            <div
              key={index}
              className={`
              ${generateDynamicStyles(index)}
              flex flex-row items-center flex-1 gap-2 lg:flex-row sm:gap-4`}
            >
              <div className="bg-[#6E7D00] rounded-full p-[12px]">
                <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px] md:w-[38px] md:h-[38px] ">
                  <Image src="/images/tools.svg" alt="services" fill />
                </div>
              </div>
              <div className="text-center text-white sm:text-left ">
                <span className="text-[22px] md:text-[20px] lg:text-[28px] cursor-pointer md:leading-3 lg:leading-6 hover:underline">
                  {item.serviceName}
                </span>
                <p className="text-[13px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-5  font-light">
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
              flex flex-row items-center flex-1 gap-2 lg:flex-row sm:gap-4`}
              >
                <div className="bg-[#6E7D00] rounded-full p-[12px]">
                  <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px] md:w-[38px] md:h-[38px]">
                    <Image src="/images/tools.svg" alt="services" fill />
                  </div>
                </div>
                <div className="text-center text-white sm:text-left ">
                  <p className="text-[22px] md:text-[20px] lg:text-[28px] cursor-pointer hover:underline">
                    {item.serviceName}
                  </p>
                  <p className="text-[13px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-5  font-light">
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
                )}flex flex-row items-center flex-1 gap-2 lg:flex-row sm:gap-4`}
              >
                <div className="bg-[#6E7D00] rounded-full p-[12px]">
                  <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px] md:w-[38px] md:h-[38px]">
                    <Image src="/images/tools.svg" alt="services" fill />
                  </div>
                </div>
                <div className="text-center text-white sm:text-left ">
                  <p className="text-[22px] md:text-[20px] lg:text-[28px] cursor-pointer hover:underline">
                    {item.serviceName}
                  </p>
                  <p className="text-[13px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-5  font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CONTACT POP UP*/}
        <div className=" z-50 relative group transition-all ease-out duration-300 ">
          <div className="sm:px-[18px]  py-[10px] hover:scale-[1.01] hover:shadow-gray-500 hover:shadow-md shadow-sm transition-all duration-300  cursor-pointer  rounded-lg border-black border-[1px] bg-[#6e7f21] flex items-center  ">
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
                <Image src="/images/whatsapp-transparent.svg" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
