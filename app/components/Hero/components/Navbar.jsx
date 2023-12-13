"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Inter } from "next/font/google";

const navigationData = [
  { id: 1, label: "Home", url: "#" },
  { id: 2, label: "Services", url: "/#services" },
  { id: 3, label: "Contact", url: "#footer" },
];
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

const Navbar = () => {
  return (
    <nav className="px-3 lg:px-0 max-w-[1180px] flex items-center justify-between w-full h-[70px] sm:h-[85px]">
      <div className="relative w-[100px] h-[70px] sm:w-[150px] sm:h-[110px]  lg:w-[170px] lg:h-[130px]">
        <Image
          className="block cursor-pointer"
          src="/images/logo.svg"
          alt="logo"
          fill
          priority={true}
        />
      </div>
      {/* Hamburger menu */}
      <div className="block mr-[10px] sm:hidden relative w-[50px] h-[50px] hover:cursor-pointer">
        <Image src="/images/hamburger.svg" fill alt="hamberger" />
      </div>

      {/* THESE ARE THE LINKS */}
      <div className=" hidden sm:flex items-center gap-3 ">
        <ul className="lg:mt-[10px] pt-[30px] pr-[12px] flex items-center gap-[10px] sm:gap-7 text-white">
          {navigationData.map((item) => (
            <li className="text-center" key={item.id}>
              <a
                className={`
                      ${item.label == "Home" && "after:w-[100%]"}    
                      ${inter.variable} font-inter
                      after:duration-300                 
                      after:content-[""] 
                      after:h-[4px]
                      after:block
                      after:transition-all 
                      after:ease-in-out 
                      hover:after:w-[100%] 
                      after:w-[0%] 
                      after:bg-[#6E7D00] 
                      transition-all 
                      ease-in-out  
                      pr-[5px] 
                      uppercase 
                      text-[13px] 
                      sm:text-[16px] 
                      lg:text-[24px]
                      font-medium 
                      sm:font-semibold
                      cursor-pointer
                      `}
                href={item.url}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* INSTAGRAM LOGO */}
        <Link
          target="_blank"
          href="https://www.instagram.com/icc_garage_uae/"
          className="hover:scale-105 transition-all relative w-[24px] h-[24px] sm:w-[34px] sm:h-[34px] md:w-[44px] md:h-[44px] lg:w-[50px] lg:h-[50px] cursor-pointer"
        >
          <Image src="/images/instagramIcon.svg" alt="instagram logo" fill />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
