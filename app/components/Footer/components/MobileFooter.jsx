import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileFooter = () => {
  return (
    <div className="sm:hidden flex flex-col items-center text-white bg-[#575e21] ">
      <h2 className="uppercase text-[28px] my-[5px]">Contacts</h2>
      <div className="flex justify-center gap-[30px] my-[5px] w-full">
        <Link
          target="_blank"
          href="https://www.instagram.com/icc_garage_uae/reels/"
          className="relative w-[34px] h-[34px]"
        >
          <Image src="/images/instagramIcon.svg" fill alt="instagram" />
        </Link>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=%2B971523383358&text&type=phone_number&app_absent=0"
          className="relative w-[34px] h-[34px]"
        >
          <Image src="/images/whatsapp-transparent.svg" fill alt="whatsapp" />
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/ICCGarage/"
          className="relative w-[38px] h-[38px]"
        >
          <Image src="/images/facebook.svg" fill alt="facebook" />
        </Link>
      </div>
      <p className="text-[16px] my-[5px]">+971 523383358</p>
      <p className="text-center my-[5px] text-[16px]">
        Dubai, Al Quoz Industrial Area 3, streer 22,
        <br /> United Arab Emirates
      </p>
      <div className="my-[15px] flex flex-col items-center  max-w-[200px] w-full">
        <div className="flex w-full items-center justify-between  ">
          <p>Mon - Thu:</p>
          <p>8:30 - 18:30</p>
        </div>
        <div className="flex w-full items-center justify-between ">
          <p>Fri:</p>
          <div className="">
            <p className="text-right">8:30 - 12:30</p>
            <p>14:30 - 18:30</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <p>Sun:</p>
          <p className=" mr-[20px]">Day off</p>
        </div>
      </div>
      <p>info@iccgarage.com</p>
      <Link
        target="_blank"
        href="https://www.google.com/maps/place/ICC+-+Intensive+Car+Care/@25.1223887,55.2208276,15z/data=!4m6!3m5!1s0x3e5f6bdb00000001:0xe5da10f8148c0701!8m2!3d25.1223887!4d55.2208276!16s%2Fg%2F11bccj809j?entry=ttu"
        className="my-[15px] relative w-[200px] h-[120px] rounded-[100px] "
      >
        <Image
          className="rounded-2xl"
          src="/images/map.png"
          alt="map image"
          fill
        />
      </Link>
    </div>
  );
};

export default MobileFooter;
