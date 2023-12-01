"use client";
import Image from "next/image";
import React from "react";
import Stats from "./Stats";
import { useWindowSize } from "react-use";

const Hero = () => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="relative w-full h-[calc(100vh-70px)] sm:h-[calc(100vh-80px)]">
        {width > 640 ? (
          <div>
            <Image
              className=""
              priority={true}
              src="/images/newhero.png"
              alt="hero"
              fill
            />
            <div className="bg-black/75  absolute bottom-0 right-0 left-0 ">
              <Stats />
            </div>
          </div>
        ) : (
          <div>
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
        )}
      </div>
    </>
  );
};

export default Hero;
// {
/* <div className="absolute bg-black bg-opacity-40  inset-0"></div> */
// }

// width="1600"
// height="800"
// objectFit="cover"
// objectPosition="center"
// layout="fill"
