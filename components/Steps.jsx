import { useScroll, motion, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Steps = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const direction = [
    "0px",
    "50px",
    "250px",
    "450px",
    "650px",
    "800px",
    "1150px",
    "1450px",
    "1660px",
    "1900px",
  ];

  const test = useTransform(
    scrollYProgress,
    [0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 1],
    direction
  );

  const styles = {
    translateY: test,
  };

  useEffect(() => {
    scrollYProgress.onChange((value) => console.log(value));
  });
  return (
    <div
      ref={targetRef}
      className="sm:px-[60px] sm:py-[30px] md:p-[40px] lg:px-[100px] mb-[50px] relative flex flex-col"
    >
      {/* STEP 1 */}
      <div className=" sm:max-w-[180px] lg:max-w-[270px] xl:max-w-[410px]  flex flex-1 self-start ">
        <div className="flex flex-col ">
          <div className="flex">
            <div className="relative w-[30px] h-[30px] sm:w-[60px] sm:h-[60px]  md:w-[80px] md:h-[80px]  lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[140px]">
              <Image src="/images/1.svg" alt="first step" fill />
            </div>
            <h2 className="text-white self-end sm:text-[18px] md:text-[20px] md:leading-6 lg:text-[30px] xl:text-[30px]">
              Car Pick Up
            </h2>
          </div>
          <p className="mt-[10px] xl:pl-[50px] leading-4 sm:text-[14px] md:text-[15px] md:leading-6 lg:text-[17px] lg:leading-6 xl:text-[20px] xl:leading-7 2xl:text-[22px] 2xl:leading-8 font-normal text-white">
            Picking up your beaty at comfortable time and place
          </p>
        </div>
      </div>
      {/* STEP 2 */}
      <div className=" sm:max-w-[180px] lg:max-w-[270px] xl:max-w-[300px] flex flex-col self-end">
        <div className="flex">
          <div className="relative sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[100] xl:h-[140px]">
            <Image src="/images/2.svg" alt="first step" fill />
          </div>
          <h2 className="self-end text-white sm:text-[18px] md:text-[20px] md:leading-6 lg:text-[30px] xl:text-[30px]">
            Inspection
          </h2>
        </div>
        <p className="mt-[10px leading-4 sm:text-[14px] text-[14px] md:text-[15px] md:leading-6 lg:text-[17px] lg:leading-6 xl:text-[20px] xl:leading-7 2xl:text-[22px] 2xl:leading-8 text-white font-normal">
          Checking car from inside and outside, client compalins noted.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="sm:max-w-[180px] lg:max-w-[270px] xl:max-w-[410px] flex self-start">
        <div className="flex flex-col">
          <div className="flex">
            <div className="relative sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[140px]">
              <Image src="/images/3.svg" alt="first step" fill />
            </div>
            <h2 className="self-end text-white sm:text-[18px] md:text-[20px] md:leading-6 lg:text-[30px] xl:text-[30px]">
              Diagnostic
            </h2>
          </div>
          <p className="text-white font-normal leading-4 text-[14px] mt-[10px] text-left sm:text-[14px] md:text-[15px] md:leading-6 lg:text-[17px] lg:leading-6 xl:text-[20px] xl:leading-7 2xl:text-[22px] 2xl:leading-8">
            Identifying and analyzing car issues
          </p>
        </div>
      </div>

      {/* STEP 4 */}
      <div className="sm:max-w-[180px] lg:max-w-[270px] flex lg:py-[20px]  self-end">
        <div className="flex flex-col">
          <div className="flex">
            <div className="relative sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[140px]">
              <Image src="/images/4.svg" alt="first step" fill />
            </div>
            <h2 className="self-end text-white sm:text-[18px] md:text-[20px] lg:text-[30px]">
              Quotation
            </h2>
          </div>
          <p className="leading-4 text-[14px] mt-[10px] text-left sm:text-[14px] md:text-[15px] md:leading-6  lg:text-[17px] lg:leading-6 xl:text-[20px] xl:leading-7 2xl:text-[22px] 2xl:leading-8 text-white  font-normal">
            Offer different options to satisfy you
          </p>
        </div>
      </div>

      {/* STEP 5 */}
      <div className="sm:max-w-[180px] lg:max-w-[270px] xl:max-w-[410px] flex  self-start ">
        <div className="flex flex-col">
          <div className="flex">
            <div className="relative sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[100] xl:h-[140px]">
              <Image src="/images/5.svg" alt="first step" fill />
            </div>
            <h2 className="self-end text-white sm:text-[18px] md:text-[20px] lg:text-[30px]">
              Approve
            </h2>
          </div>
          <p className="x leading-4 text-[14px] mt-[10px] text-left sm:text-[14px] md:text-[15px] md:leading-6 lg:text-[17px] lg:leading-6 xl:text-[20px] xl:leading-7 2xl:text-[22px] 2xl:leading-8 text-white  font-normal ">
            Cannot start work without client approval
          </p>
        </div>
      </div>

      {/* STEP 6 */}
      <div className="sm:max-w-[180px] lg:max-w-[270px] flex lg:py-[20px]  self-end">
        <div className="flex flex-col">
          <div className="flex">
            <div className="relative sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[100] xl:h-[140px]">
              <Image src="/images/6.svg" alt="first step" fill />
            </div>
            <h2 className="self-end sm:text-[18px] md:text-[20px] lg:text-[30px] text-white">
              Magic
            </h2>
          </div>
          <p className="leading-4 text-[14px] mt-[10px] text-left sm:text-[14px] md:text-[15px] md:leading-6 lg:text-[17px] lg:leading-6 xl:text-[20px] xl:leading-7 2xl:text-[22px] 2xl:leading-8 text-white  font-normal ">
            Your beauty is under construction
          </p>
        </div>
      </div>

      {/* STEP 7 */}
      <div className="sm:max-w-[180px] lg:max-w-[270px] xl:max-w-[410px] flex  self-start ">
        <div className="flex flex-col">
          <div className="flex">
            <div className="relative sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[100] xl:h-[140px]">
              <Image src="/images/7.svg" alt="first step" fill />
            </div>
            <h2 className="self-end sm:text-[18px] md:text-[20px] lg:text-[30px] text-white">
              Quality Control
            </h2>
          </div>
          <p className="leading-4 text-[14px] mt-[10px] text-left sm:text-[14px] md:text-[15px] md:leading-6  lg:text-[17px] lg:leading-6 xl:text-[20px] xl:leading-7 2xl:text-[22px] 2xl:leading-8 text-white font-normal ">
            Checking our work before release the car to client
          </p>
        </div>
      </div>

      {/* STEP 8 */}
      <div className="sm:max-w-[180px] lg:max-w-[270px] xl:max-w-[410px] flex lg:py-[20px]  self-end">
        <div className="flex flex-col">
          <div className="flex">
            <div className="relative sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[100] xl:h-[140px]">
              <Image src="/images/8.svg" alt="first step" fill />
            </div>
            <h2 className="self-end sm:text-[18px] md:text-[20px] lg:text-[30px] text-white">
              Car Wash
            </h2>
          </div>
          <p className="leading-4 text-[14px] mt-[10px] text-left sm:text-[14px] md:text-[15px] md:leading-6 lg:text-[17px] lg:leading-6  xl:text-[20px] xl:leading-7 2xl:text-[22px] 2xl:leading-8 text-white  font-normal ">
            Client receive car neat and clean
          </p>
        </div>
      </div>

      {/* STEP 9 */}
      <div className="sm:max-w-[180px] lg:max-w-[270px] xl:max-w-[410px] flex  self-start ">
        <div className="flex flex-col">
          <div className="flex">
            <div className="relative sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[100] xl:h-[140px]">
              <Image src="/images/9.svg" alt="first step" fill />
            </div>
            <h2 className="md:ml-[10px] self-end sm:text-[18px] md:text-[20px] lg:text-[30px] text-white">
              Car drop off
            </h2>
          </div>
          <p className="leading-4 text-[14px] mt-[10px] text-left sm:text-[14px] md:text-[15px] md:leading-6 lg:text-[17px] lg:leading-6 xl:text-[20px] xl:leading-7 2xl:text-[22px] 2xl:leading-8 text-white font-normal ">
            Bringing car at comforable time and place
          </p>
        </div>
      </div>

      {/* STEP 10 */}
      <div className="sm:max-w-[180px] lg:max-w-[300px] xl:max-w-[410px] flex lg:py-[20px]  self-end">
        <div className="flex flex-col">
          <div className="flex">
            <div className="relative sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[140px] xl:h-[140px]">
              <Image src="/images/10.svg" alt="first step" fill />
            </div>
            <h2 className="md:ml-[10px]  self-end sm:text-[18px] md:text-[20px] lg:ml-[10px] xl:ml-[0px] lg:text-[30px] lg:leading-8 text-white">
              Happy client
            </h2>
          </div>
          <p className="leading-4 text-[14px] mt-[10px] text-left sm:text-[14px] md:text-[15px] md:leading-6 lg:text-[17px] lg:leading-6 xl:text-[20px] xl:leading-7 2xl:text-[22px] 2xl:leading-7 text-white  font-normal ">
            Make sure we see your smile
          </p>
        </div>
      </div>

      {/* STRAIGHT LINE */}
      <div className="absolute xl:left-[530px] xl:top-[200px] 2xl:left:[300px] 2xl:top-[160px] z-10 opacity-50">
        <div className="relative xl:w-[200px] xl:h-[1750px] ">
          <Image src="/images/straightLine.svg" fill alt="striaght line" />
        </div>
      </div>

      {/* CAR  */}
      {/* className="absolute top-[70px] left-[230px] lg:top-[30px] lg:left-[350px] 2xl:top-[70px] 2xl:left-[420px] " */}
      <motion.div
        style={styles}
        className="will-change-transform absolute left-[230px] lg:left-[350px] xl:left-[42%] z-20"
      >
        <div className="relative sm:w-[60px] sm:h-[60px] lg:w-[120px] lg:h-[120px] xl:w-[220px] xl:h-[220px] z-20 ">
          <Image src="/images/car.svg" alt="car" fill />
        </div>
      </motion.div>
    </div>
  );
};

export default Steps;
