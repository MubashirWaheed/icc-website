"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/repair.module.css";
import Steps from "./components/Steps";
import { Inder } from "next/font/google";

const inder = Inder({
  subsets: ["latin"],
  variable: "--font-inder",
  weight: "400",
});

const Repair = () => {
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   // offset: ["start start", "start end"],
  // });

  // const yxlDirection = [
  //   "2700px",
  //   "2300px",
  //   "2100px",
  //   "1800px",
  //   "1500px",
  //   "1200px",
  //   "900px",
  //   "600px",
  //   "300px",
  //   "0px",
  // ];

  // const test = useTransform(
  //   scrollYProgress,

  //   [0, 0.111, 0.222, 0.333, 0.444, 0.555, 0.666, 0.777, 0.888, 0.999],
  //   yxlDirection
  // );

  return (
    <div className="mt-[30px] w-full  max-w-[1280px] flex flex-col overflow-hidden">
      <div className="flex flex-col">
        <h2
          className={`${inder.variable} font-medium font-inder sm:py-[35px] lg:py-[50px] text-center text-white text-[32px] md:text-[55px] lg:text-[65px] leading-3 `}
        >
          Steps to repair cars:
        </h2>
        <Steps />
      </div>
    </div>
  );
};

export default Repair;

// while 2nd in view do the diagonal animation
