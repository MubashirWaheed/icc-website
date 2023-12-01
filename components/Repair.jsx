"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/repair.module.css";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "react-use";
import Steps from "./Steps";

const Repair = () => {
  const { width } = useWindowSize();

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
        <h2 className="font-bold sm:py-[35px] lg:py-[50px] text-center text-white text-[32px] leading-3 md:text-[55px]">
          Steps to repair cars:
        </h2>
        <Steps />
      </div>
    </div>
  );
};

export default Repair;

// while 2nd in view do the diagonal animation
