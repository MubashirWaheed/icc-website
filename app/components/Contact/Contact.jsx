"use client";
import Image from "next/image";
// import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="my-[20px] sm:my-[0px] px-[60px] sm:px-[0px] w-full sm:w-auto  z-40 relative group transition-all ease-out duration-300 rounded-full sm:rounded-2xl">
      <div
        onClick={() => setIsFormOpen((prev) => !prev)}
        className="gap-[0px] sm:gap-5  sm:px-[18px] lg:px-[30px] py-[3px] sm:py-[10px] lg:py-[10px] hover:scale-[1.01] sm:hover:shadow-gray-500 sm:hover:shadow-md shadow-sm transition-all duration-300  cursor-pointer rounded-full sm:rounded-3xl border-black border-[1px] bg-[#606727] flex items-center"
      >
        <div className="mx-[5px] sm:m-[0px] px-[30px] sm:px-[30px]  rounded-full bg-[#c9dd34] relative w-[60px] h-[60px]  sm:w-[40px] sm:h-[40px] xl:w-[60px] xl:h-[60px]">
          <Image src="/images/right-arrow.svg" fill alt="right arrow" />
        </div>
        <p className=" text-center w-full text-[24px]  sm:px-[18px] lg:text-[24px] xl:text-[28px] font-normal xl:font-medium text-[#a5bc00] uppercase leading-8">
          Special request
        </p>
      </div>
      {/* display this on hover */}
      {isFormOpen && (
        <div
          id="contactform"
          className="z-50 w-full rounded-3xl  sm:absolute group-hover:opacity-100 group-hover:block hidden  0pacity-0 transition-all bg-[#606727] py-[10px]"
        >
          <ContactForm />
        </div>
      )}
    </div>
  );
};

export default Contact;
