import { Inder } from "next/font/google";
import React from "react";

const inder = Inder({
  subsets: ["latin"],
  variable: "--font-inder",
  weight: "400",
});
const AboutUs = () => {
  return (
    <div className=" sm:hidden px-[20px] flex flex-col  items-center text-white pb-[30px]">
      <h2
        className={`${inder.variable} text-[36px] font-normal font-inder pb-[5px]`}
      >
        About us:
      </h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequatur iure inventore voluptatibus eius expedita hic. Vero facere
        ipsam nam ad similique hic, consequuntur vel itaque. Minima architecto
        recusandae suscipit!
      </p>
    </div>
  );
};

export default AboutUs;
