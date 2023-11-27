"use client";
import Image from "next/image";
import React from "react";
import Stats from "./Stats";
import { useWindowSize } from "react-use";

const Hero = () => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="relative w-full h-[90vh]">
        {width > 640 ? (
          <Image className="" src="/images/desktoptest.gif" alt="hero" fill />
        ) : (
          <Image className="" src="/images/phonefinal.jpg" alt="hero" fill />
        )}

        {/* <Image
          // className="block  xl:hidden"
          // src="/images/phone.jpg"
          // alt="hero"
          // width="1600"
          // height="800"
          // objectFit="cover"
          // objectPosition="center"
          // layout="fill"
          // fill
          // className="w-full h-full top-0 left-0 object-cover "
        /> */}
      </div>

      {/* <div className="relative">
        <Image width={1500} height={500} src="/images/hero.png" alt="hero" />
      </div> */}
      {/* <div className="relative w-full h-full">
        <Image
          className="md:hidden"
          src="/images/hero.png"
          alt="hero"
          fill
          priority={true}
        />
        <Image
          className=" hidden md:block"
          src="/images/hero.png"
          layout="fill"
          // objectFit="cover"
          // objectPosition="center"
          alt="hero image"
          priority={true}
        />
        <Image
          className=" hidden lg:block"
          src="/images/hero.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image"
          priority={true}
        />
        <div className="bg-black/75  absolute bottom-0 right-0 left-0 ">
          <Stats />
        </div>
      </div> */}

      {/* <div className="relative sm:w-[640px] sm:h-[470px] md:w-[768px] md:h-[510px] lg:w-[1024px] lg:h-[600px] xl:w-[1280px]  2xl:w-[1536px] 2xl:h-[670px]">
        <Image
        src="/images/previous-hero.png"
        // width="1600"
        // height="500"
        // layout="responsive"
        fill
          alt="hero section"
          />
          <div className="bg-black/75  absolute bottom-0 right-0 left-0 ">
          <Stats />
          </div>
        </div> */}

      {/* <div> */}
      {/* <div className="relative">
        <Image
          src="/images/previous-hero.png"
          width={1440}
          height={0}
          alt="hero"
        />
      </div> */}
      {/* </div> */}
    </>
  );
};

export default Hero;
{
  /* <div className="absolute bg-black bg-opacity-40  inset-0"></div> */
}

// width="1600"
// height="800"
// objectFit="cover"
// objectPosition="center"
// layout="fill"
