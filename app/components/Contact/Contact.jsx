import Image from "next/image";
// import React, { useState } from "react";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <div className="z-50 relative group transition-all ease-out duration-300 rounded-2xl">
      <div className="gap-5 sm:px-[18px] lg:px-[30px] py-[10px] lg:py-[10px] hover:scale-[1.01] hover:shadow-gray-500 hover:shadow-md shadow-sm transition-all duration-300  cursor-pointer rounded-3xl border-black border-[1px] bg-[#606727] flex items-center">
        <div className="rounded-full bg-[#c9dd34] relative w-[40px] h-[40px] xl:w-[60px] xl:h-[60px]">
          <Image src="/images/right-arrow.svg" fill alt="right arrow" />
        </div>
        <p className="sm:px-[18px] lg:text-[24px] xl:text-[28px] font-normal xl:font-medium text-[#a5bc00] uppercase leading-8">
          Special request
        </p>
      </div>
      {/* display this on hover */}
      <div className="z-50 w-full rounded-3xl absolute group-hover:opacity-100 group-hover:block hidden  pacity-0 transition-all bg-[#606727] py-[10px]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
