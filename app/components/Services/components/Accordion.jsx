"use client";
import Image from "next/image";
import React, { useState } from "react";

const Accordion = ({ image, content, title }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    // bg-[#9db218]

    <div className={` w-full h-full   rounded-full`}>
      <button
        onClick={() => setAccordionOpen((prev) => !prev)}
        className="z-40 text-left leading-[34px] flex flex-col items-center text-[26px]  w-full rounded-full "
      >
        <div className="z-40 flex items-center   bg-[#6e7d00] w-full rounded-[50px]">
          <div className=" px-[30px] m-[5px]  relative w-[70px] h-[70px]   border-black border-[2px] rounded-full ">
            <Image src={image} fill alt={title} />
          </div>
          <p className="w-full pr-[20px] text-center">{title}</p>
        </div>

        {/* CONTENT DIV */}
        {/* -[300px] */}
        <div
          className={` z-10 rounded-b-[30px] mt-[-25px]  bg-[#9db218] overflow-hidden transition-all duration-500 ease-in-out text-white text-[20px] text-sm 
        ${accordionOpen ? "max-h-[300px] " : "max-h-0"}`}
        >
          <div
            className={`z-10 pt-[30px] px-[10px] py-[10px] overflow-hidden text-[20px]`}
          >
            {content}
          </div>
        </div>
      </button>
    </div>
  );
};

export default Accordion;

// bg-[#9db218]
