import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div>
      <h2 className="font-bold py-[50px] text-center text-white  text-[32px] leading-3 md:text-[55px]">
        Our services include:
      </h2>
      <div className="max-w-[1180px] flex flex-col items-center justify-between gap-4 ">
        {/* ROW */}
        <div className="mb-[50px] mx-[70px] flex flex-col gap-4 sm:flex-row ">
          <div className="flex flex-col md:flex-row  flex-1 items-center gap-2 sm:gap-4">
            <div className="bg-[#6E7D00] rounded-full p-[12px]">
              <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px]">
                <Image src="/images/tools.svg" alt="services" fill />
              </div>
            </div>
            <div className="text-white text-center sm:text-left ">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                perfect Neque porro quisquam est qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit.
              </p>
            </div>
          </div>

          <div className="pb-[20px] px-[36px] flex flex-1 flex-col md:flex-row items-center gap-4 sm:border-x-2 border-y-[1px] sm:border-y-0 border-[#6E7D00] ">
            <div className="bg-[#6E7D00] rounded-full p-[12px]">
              <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px]">
                <Image
                  src="/images/settings.svg"
                  width="50"
                  height="50"
                  alt="services"
                />
              </div>
            </div>
            <div className="text-white text-center sm:text-left">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </p>
            </div>
          </div>

          <div className="pb-[20px] flex flex-1 items-center gap-4 flex-col md:flex-row border-b-[1px] sm:border-b-0 border-[#6E7D00]">
            <div className="bg-[#6E7D00] rounded-full p-[12px]">
              <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px]">
                <Image
                  src="/images/settings.svg"
                  width="50"
                  height="50"
                  alt="services"
                />
              </div>
            </div>
            <div className="text-white text-center sm:text-left">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                LAST Neque porro quisquam est qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit.
              </p>
            </div>
          </div>
        </div>

        {/* ROW */}
        <div className="mx-[70px] flex flex-col gap-4 sm:flex-row ">
          <div className="flex flex-col md:flex-row  flex-1 items-center gap-2 sm:gap-4">
            <div className="bg-[#6E7D00] rounded-full p-[12px]">
              <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px]">
                <Image src="/images/tools.svg" alt="services" fill />
              </div>
            </div>
            <div className="text-white text-center sm:text-left ">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </p>
            </div>
          </div>

          <div className="pb-[20px] px-[36px] flex flex-1 flex-col md:flex-row items-center gap-4 sm:border-x-2 border-y-[1px] sm:border-y-0 border-[#6E7D00] ">
            <div className="bg-[#6E7D00] rounded-full p-[12px]">
              <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px]">
                <Image
                  src="/images/settings.svg"
                  width="50"
                  height="50"
                  alt="services"
                />
              </div>
            </div>
            <div className="text-white text-center sm:text-left">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </p>
            </div>
          </div>

          <div className=" flex flex-1 items-center gap-4 flex-col md:flex-row">
            <div className="bg-[#6E7D00] rounded-full p-[12px]">
              <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px]">
                <Image
                  src="/images/settings.svg"
                  width="50"
                  height="50"
                  alt="services"
                />
              </div>
            </div>
            <div className="text-white text-center sm:text-left">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
