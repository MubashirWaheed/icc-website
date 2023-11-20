import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="">
      <div className="relative">
        <Image
          src="/images/hero.png"
          width="1600"
          height="800"
          alt="hero section"
        />
        <div className="absolute bg-black bg-opacity-40  inset-0"></div>
      </div>
    </main>
  );
};

export default Hero;
