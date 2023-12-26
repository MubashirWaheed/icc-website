import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";

const Hero = () => {
  return (
    <>
      <div className="hidden sm:block relative w-full h-[calc(100vh-70px)] sm:h-[100vh]">
        <div className="sm:block">
          <div className="hidden sm:flex z-10 bg-black/60  items-center justify-center absolute top-0 right-0 left-0 ">
            <Navbar />
          </div>
          <Image
            className="sm:block hidden"
            priority={true}
            src="/images/newhero.png"
            alt="hero"
            fill
          />
        </div>
      </div>

      {/* Mobile Hero */}
      <div id="home" className="relative sm:hidden w-full">
        <MobileNav />
        <div className="z-10 relative w-full h-[calc(100vh-70px)]  block sm:hidden">
          <Image priority={true} src="/images/herophone.png" alt="hero" fill />
        </div>
        <div className="z-20 w-full h-[35%] absolute bottom-0 right-0 left-0">
          <div className="relative w-full h-full">
            <Image
              priority={true}
              src="/images/mobile-hero-shadow.png"
              alt="hero"
              fill
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
{
  /* <div className="bg-black/75  absolute bottom-0 right-0 left-0 ">
            <Stats />
          </div> */
}
