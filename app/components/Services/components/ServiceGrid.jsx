import Image from "next/image";
import React from "react";

const servicesRow1 = [
  {
    icon: "/images/tools.svg",
    serviceName: "Minor/major service",
    description:
      "Fluids and filters replacement, engine service for keeping your car like new",
  },
  {
    icon: "/images/tools.svg",
    serviceName: "Diagnostic",
    description:
      "Identifying and analyzing vehicle issues using most advanced diagnostic tools and methods",
  },

  {
    icon: "/images/settings.svg",
    serviceName: "Suspension service",
    description: "Inspect, repair, align—for smooth, safe rides",
  },
];
const servicesRow2 = [
  {
    icon: "/images/tools.svg",
    serviceName: "A/C Service",
    description: "Inspect, maintain, repair for cool driving",
  },
  {
    icon: "/images/tools.svg",
    serviceName: "Body Shop",
    description:
      "Collision repair, denting, painting, refinishing and polishing ",
  },
  {
    icon: "/images/settings.svg",
    serviceName: "Body Kits",
    description:
      "Installation, aligment, painting and polishing to make an exclusive vehicle ",
  },
];

const servicesRow3 = [
  {
    icon: "/images/settings.svg",
    serviceName: "Mechanical jobs",
    description:
      "Engine, gear, transfer case, brakes, steering and etc. diagnostic, maintenance and repair",
  },
  {
    icon: "/images/tools.svg",
    serviceName: "Electrical jobs",
    description:
      "Electrical diagnostics, repairs, and maintenance for any electronic components",
  },
  {
    icon: "/images/tools.svg",
    serviceName: "Tunning programing",
    description: "Enhance power and torque - unleash the beast",
  },
];

const ServiceGrid = () => {
  return (
    <div className="relative z-20  px-[10px] max-w-[1280px] flex flex-col items-center justify-between gap-6 xl:gap-7 ">
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
              <div className="relative w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[38px] md:h-[38px] xl:w-[50px] xl:h-[50px]">
                <Image src={item.icon} alt="services" fill />
              </div>
            </div>
            <div className="h-full text-center text-white sm:text-left ">
              <span
                onClick={() =>
                  sendGTMEvent({
                    event: "buttonClicked",
                    value: "Service link clicked",
                  })
                }
                className="sm:text-[18px] md:text-[20px] lg:text-[28px] cursor-pointer md:leading-3 lg:leading-6 hover:underline"
              >
                {item.serviceName}
              </span>
              <p className="lg:mt-[10px] sm:text-[12px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-5 xl:text-[20px] xl:leading-7 2xl:text-[22px]  font-light">
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
                <div className="relative w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[38px] md:h-[38px] xl:w-[50px] xl:h-[50px]">
                  <Image src={item.icon} alt="services" fill />
                </div>
              </div>
              <div className=" text-center h-full  text-white sm:text-left">
                <p className=" sm:text-[18px] md:text-[20px] lg:text-[28px] cursor-pointer hover:underline">
                  {item.serviceName}
                </p>
                <p className="lg:mt-[10px] sm:text-[12px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-5 xl:text-[20px] xl:leading-7 2xl:text-[22px]  font-light">
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
                <div className="relative w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[38px] md:h-[38px] xl:w-[50px] xl:h-[50px]">
                  <Image src={item.icon} alt="services" fill />
                </div>
              </div>
              <div className="h-full  text-center text-white sm:text-left ">
                <p className="text-[22px] sm:text-[18px] sm: md:text-[20px] md:leading-5 lg:text-[28px] cursor-pointer hover:underline">
                  {item.serviceName}
                </p>
                <p className="lg:mt-[15px] sm:text-[12px] md:text-[14px] md:leading-[18px] md:mt-[5px]  lg:text-[16px] lg:leading-5 xl:text-[20px] xl:leading-7 2xl:text-[22px] font-light">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CONTACT POP UP*/}
    </div>
  );
};

export default ServiceGrid;

function generateDynamicStyles(index) {
  if (index === 1) {
    return `
        before:content-[''] before:h-[120px] before:bg-primaryGreen before:w-[1px] lg:before:w-[1px]
        after:content-[''] after:h-[120px] after:bg-primaryGreen after:w-[1px] lg:after:w-[1px]
      `;
  }
  return "";
}
