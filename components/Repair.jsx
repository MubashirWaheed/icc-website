import Image from "next/image";
import React from "react";
import styles from "@/styles/repair.module.css";

const Repair = () => {
  return (
    <div className="mt-[30px] w-full  max-w-[1180px]  flex flex-col overflow-hidden">
      <div className="flex flex-col">
        <h2 className="font-bold py-[50px] text-center text-white text-[32px] leading-3 md:text-[55px]">
          Steps to repair cars:
        </h2>

        {/* Wrapper of steps */}
        <div className="sm:p-[60px] md:p-0 mb-[50px] relative flex flex-col">
          {/* STEP 1 */}
          <div className="flex flex-1 self-start py-[20px] sm:max-w-[200px] xl:max-w-[410px] ">
            <div className="flex flex-col ">
              <div className="flex">
                <div className="relative w-[30px] h-[30px] sm:w-[30px] sm:h-[30px]  xl:w-[100px] xl:h-[100px]">
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
          <div className=" sm:pl-[30px] sm:max-w-[200px] xl:max-w-[410px] flex flex-col py-[20px] self-end">
            <div className="flex">
              <div className="relative sm:w-[30px] sm:h-[30px] xl:w-[100px] xl:h-[100px]">
                <Image src="/images/2.svg" alt="first step" fill />
              </div>
              <h2 className="self-end text-white xl:text-[30px]">Inspection</h2>
            </div>
            <p className="text-white  font-normal leading-4 sm:text-[12px] text-[14px] mt-[10px] ">
              Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
              est qui dolorem ipsum
            </p>
          </div>

          {/* STEP 3 */}
          <div className="ml-[40px] max-w-[410px] flex self-start py-[20px]  ">
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative sm:w-[30px] sm:h-[30px] xl:w-[100px] xl:h-[100px]">
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
          <div className=" max-w-[410px] flex py-[20px]  self-end ">
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative w-[100px] h-[100px]">
                  <Image src="/images/4.svg" alt="first step" fill />
                </div>
                <h2 className="self-end text-white text-[30px]">Inspection</h2>
              </div>
              <p className="text-white  font-normal leading-4 text-[14px] mt-[10px] text-left">
                Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
                est qui dolorem ipsum
              </p>
            </div>
          </div>

          {/* STEP 5 */}
          <div className=" ml-[40px] max-w-[410px]  flex   self-start ">
            <div className="flex flex-col">
              <div className="flex">
                <div className="relative w-[100px] h-[100px]">
                  <Image src="/images/5.svg" alt="first step" fill />
                </div>
                <h2 className="self-end text-white text-[30px]">Inspection</h2>
              </div>
              <p className="text-white font-normal leading-4 text-[14px] mt-[10px] text-left">
                Neque porro quisquam est qui dolorem ipsum. Neque porro quisquam
                est qui dolorem ipsum
              </p>
            </div>
          </div>

          {/* First line  */}
          <div className="bg-opacity-40 absolute sm:w-[100px] sm:h-[100px] xl:w-[300px] xl:h-[220px] top-[50px] left-[430px] ">
            <div className="bg-red-700  ">
              <Image src="/images/line1.svg" fill alt="line" />
            </div>
          </div>

          {/* Second line*/}
          <div className=" absolute w-[300px] top-[10px]  left-[445px] h-[800px]">
            <div className="  ">
              <Image src="/images/line2.svg" fill alt="line" />
            </div>
          </div>

          {/* Car I guess */}
          <div
            className={styles.carTransloate}
            // className=" w-[120px] h-[120px] absolute top-[30px] left-[420px]"
          >
            <Image src="/images/car.svg" alt="car" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repair;
