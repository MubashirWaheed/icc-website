"use client";
import Image from "next/image";
import { useState } from "react";

const Services = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="relative md:pt-[20px] " id="services">
      <h2 className="font-bold py-[50px] text-center text-white  text-[32px] leading-3 md:text-[55px]">
        Our services include:
      </h2>
      <div className="max-w-[1180px] flex flex-col items-center justify-between gap-6 ">
        {/* ROW */}
        <div className="mx-[70px] flex flex-col gap-4 sm:flex-row ">
          <div className="flex flex-col items-center flex-1 gap-2 lg:flex-row sm:gap-4">
            <div className="bg-[#6E7D00] rounded-full p-[12px]">
              <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px]">
                <Image src="/images/tools.svg" alt="services" fill />
              </div>
            </div>
            <div className="text-center text-white sm:text-left ">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                perfect Neque porro quisquam est qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit.
              </p>
            </div>
          </div>

          <div className="pb-[20px] px-[36px] flex flex-1 flex-col lg:flex-row items-center gap-4 sm:border-x-2 border-y-[1px] sm:border-y-0 border-[#6E7D00] ">
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
            <div className="text-center text-white sm:text-left">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </p>
            </div>
          </div>

          <div className="pb-[20px] flex flex-1 items-center gap-4 flex-col lg:flex-row border-b-[1px] sm:border-b-0 border-[#6E7D00]">
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
            <div className="text-center text-white sm:text-left">
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
          <div className="flex flex-col items-center flex-1 gap-2 lg:flex-row sm:gap-4">
            <div className="bg-[#6E7D00] rounded-full p-[12px]">
              <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px]">
                <Image src="/images/tools.svg" alt="services" fill />
              </div>
            </div>
            <div className="text-center text-white sm:text-left ">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </p>
            </div>
          </div>

          <div className="pb-[20px] px-[36px] flex flex-1 flex-col lg:flex-row items-center gap-4 sm:border-x-2 border-y-[1px] sm:border-y-0 border-[#6E7D00] ">
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
            <div className="text-center text-white sm:text-left">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1 gap-4 lg:flex-row">
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
            <div className="text-center text-white sm:text-left">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </p>
            </div>
          </div>
        </div>
        {/* ROW */}
        <div className="mx-[70px] flex flex-col gap-4 sm:flex-row ">
          <div className="flex flex-col items-center flex-1 gap-2 lg:flex-row sm:gap-4">
            <div className="bg-[#6E7D00] rounded-full p-[12px]">
              <div className="relative w-[28px] h-[28px] sm:w-[50px] sm:h-[50px]">
                <Image src="/images/tools.svg" alt="services" fill />
              </div>
            </div>
            <div className="text-center text-white sm:text-left ">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </p>
            </div>
          </div>

          <div className="pb-[20px] px-[36px] flex flex-1 flex-col lg:flex-row items-center gap-4 sm:border-x-2 border-y-[1px] sm:border-y-0 border-[#6E7D00] ">
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
            <div className="text-center text-white sm:text-left">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1 gap-4 lg:flex-row">
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
            <div className="text-center text-white sm:text-left">
              <p className="text-[22px] md:text-[28px]">Body shope</p>
              <p className="text-[13px] md:text-[16px] leading-4 md:leading-5 font-light">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </p>
            </div>
          </div>
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
