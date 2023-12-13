"use client";
import Image from "next/image";
import React from "react";
import Stats from "../Stats/Stats";
import Navbar from "./components/Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-[calc(100vh-70px)] sm:h-[100vh]">
      <div className=" hidden sm:block">
        <div className="z-10 bg-black/60  flex items-center justify-center absolute top-0 right-0 left-0 ">
          <Navbar />
        </div>
        <Image priority={true} src="/images/newhero.png" alt="hero" fill />
      </div>

      <div className="block sm:hidden">
        <Image
          priority={true}
          className=""
          src="/images/herophone.png"
          alt="hero"
          fill
        />
        {/* <div className="bg-black/75  absolute bottom-0 right-0 left-0 ">
            <Stats />
          </div> */}
      </div>
    </div>
  );
};

export default Hero;
// {<div className="absolute bg-black bg-opacity-40  inset-0"></div> }
