"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/repair.module.css";
import { motion, useInView, useScroll } from "framer-motion";

const Repair = () => {
  const { scrollYProgress } = useScroll();

  const number2Ref = useRef(null);
  const isInView = useInView(number2Ref);

  const carRef = useRef(null);

  console.log("Number 2 isInView: ", isInView);

  return (
    <div className="mt-[30px] w-full  max-w-[1180px]  flex flex-col overflow-hidden">
      <div className="flex flex-col">
        <h2 className="font-bold sm:py-[35px] lg:py-[50px] text-center text-white text-[32px] leading-3 md:text-[55px]">
          Steps to repair cars:
        </h2>

        {/* Wrapper of steps */}
        <div className="sm:px-[60px] sm:py-[30px] md:p-[40px] mb-[50px] relative flex flex-col">
          {/* STEP 1 */}
          <div className=" sm:max-w-[180px] xl:max-w-[410px]  flex flex-1 self-start ">
            <div className="flex flex-col ">
              <div className="flex">
                <div className="relative w-[30px] h-[30px] sm:w-[30px] sm:h-[30px]  lg:w-[100px] lg:h-[100px]">
                  <Image src="/images/1.svg" alt="first step" fill />
                </div>
                <h2 className="text-white self-end xl:text-[30px]">
                  Inspection
                </h2>
              </div>
              <p className="text-white xl:pl-[50px] font-normal leading-4 sm:text-[12px] xl:text-[14px] mt-[10px]">
                Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
                est qui dolorem ipsum
              </p>
            </div>
          </div>
          {/* STEP 2 */}
          <div className=" sm:max-w-[180px] xl:max-w-[410px] flex flex-col  self-end">
            <div className="flex">
              <div className="relative sm:w-[30px] sm:h-[30px] lg:w-[100px] lg:h-[100px]">
                <Image
                  ref={number2Ref}
                  src="/images/2.svg"
                  alt="first step"
                  fill
                />
              </div>
              <h2 className="self-end text-white xl:text-[30px]">Inspection</h2>
            </div>
            <p className="text-white  font-normal leading-4 sm:text-[12px] text-[14px] mt-[10px] ">
              Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
              est qui dolorem ipsum
            </p>
          </div>

          {/* STEP 3 */}
          <div className="sm:max-w-[180px] xl:max-w-[410px] flex self-start">
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative sm:w-[30px] sm:h-[30px] lg:w-[100px] lg:h-[100px]">
                  <Image src="/images/3.svg" alt="first step" fill />
                </div>
                <h2 className="self-end text-white xl:text-[30px]">
                  Inspection
                </h2>
              </div>
              <p className="text-white font-normal leading-4 text-[14px] mt-[10px] text-left">
                Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
                est qui dolorem ipsum
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="sm:max-w-[180px] lg:max-w-[350px] flex lg:py-[20px]  self-end">
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative sm:w-[30px] sm:h-[30px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px]">
                  <Image src="/images/4.svg" alt="first step" fill />
                </div>
                <h2 className="self-end text-white lg:text-[30px]">
                  Inspection
                </h2>
              </div>
              <p className="text-white  font-normal leading-4 text-[14px] mt-[10px] text-left">
                Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
                est qui dolorem ipsum
              </p>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="sm:max-w-[180px] xl:max-w-[410px] flex  self-start ">
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative sm:w-[30px] sm:h-[30px] lg:w-[100px] lg:h-[100px]">
                  <Image src="/images/5.svg" alt="first step" fill />
                </div>
                <h2 className="self-end text-white lg:text-[30px]">
                  Inspection
                </h2>
              </div>
              <p className="text-white font-normal leading-4 text-[14px] mt-[10px] text-left">
                Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
                est qui dolorem ipsum
              </p>
            </div>
          </div>

          {/* STEP 6 */}
          <div className="sm:max-w-[180px] lg:max-w-[350px] flex lg:py-[20px]  self-end">
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative sm:w-[30px] sm:h-[30px] lg:w-[100px] lg:h-[100px]">
                  <Image src="/images/6.svg" alt="first step" fill />
                </div>
                <h2 className="self-end text-white lg:text-[30px]">
                  Inspection
                </h2>
              </div>
              <p className="text-white  font-normal leading-4 text-[14px] mt-[10px] text-left">
                Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
                est qui dolorem ipsum
              </p>
            </div>
          </div>

          {/* STEP 7 */}
          <div className="sm:max-w-[180px] xl:max-w-[410px] flex  self-start ">
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative sm:w-[30px] sm:h-[30px] lg:w-[100px] lg:h-[100px]">
                  <Image src="/images/7.svg" alt="first step" fill />
                </div>
                <h2 className="self-end text-white lg:text-[30px]">
                  Inspection
                </h2>
              </div>
              <p className="text-white font-normal leading-4 text-[14px] mt-[10px] text-left">
                Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
                est qui dolorem ipsum
              </p>
            </div>
          </div>

          {/* STEP 8 */}
          <div className="sm:max-w-[180px] xl:max-w-[410px] flex lg:py-[20px]  self-end">
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative sm:w-[30px] sm:h-[30px] lg:w-[100px] lg:h-[100px]">
                  <Image src="/images/8.svg" alt="first step" fill />
                </div>
                <h2 className="self-end text-white lg:text-[30px]">
                  Inspection
                </h2>
              </div>
              <p className="text-white  font-normal leading-4 text-[14px] mt-[10px] text-left">
                Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
                est qui dolorem ipsum
              </p>
            </div>
          </div>

          {/* STEP 9 */}
          <div className="sm:max-w-[180px] xl:max-w-[410px] flex  self-start ">
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative sm:w-[30px] sm:h-[30px] lg:w-[100px] lg:h-[100px]">
                  <Image src="/images/9.svg" alt="first step" fill />
                </div>
                <h2 className="self-end text-white lg:text-[30px]">
                  Inspection
                </h2>
              </div>
              <p className="text-white font-normal leading-4 text-[14px] mt-[10px] text-left">
                Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
                est qui dolorem ipsum
              </p>
            </div>
          </div>

          {/* STEP 10 */}
          <div className="sm:max-w-[180px] xl:max-w-[410px] flex lg:py-[20px]  self-end">
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative sm:w-[30px] sm:h-[30px] lg:w-[100px] lg:h-[100px]">
                  <Image src="/images/10.svg" alt="first step" fill />
                </div>
                <h2 className="self-end text-white lg:text-[30px]">
                  Inspection
                </h2>
              </div>
              <p className="text-white  font-normal leading-4 text-[14px] mt-[10px] text-left">
                Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
                est qui dolorem ipsum
              </p>
            </div>
          </div>

          {/* LINE */}
          <div className="absolute sm:left-[32%] sm:top-[110px] ">
            <div className="relative sm:w-[250px] sm:h-[850px] md:h-[950px] lg:h-[1200px] ">
              <Image src="/images/Line.svg" fill alt="line" />
            </div>
          </div>

          {/* CAR  */}
          <div className="absolute top-[70px] left-[230px] lg:top-[30px] lg:left-[350px]">
            <div
              ref={carRef}
              className="relative sm:w-[60px] sm:h-[60px] lg:w-[120px] lg:h-[120px]"
            >
              <Image src="/images/car.svg" alt="car" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repair;

// while 2nd in view do the diagonal animation
