"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { Inder } from "next/font/google";
import styles from "@/styles/services.module.css";
import ServiceGrid from "./components/ServiceGrid";

const inder = Inder({
  subsets: ["latin"],
  variable: "--font-inder",
  weight: "400",
});

const Services = () => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once animation has occurred
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className=" relative  lg:pt-[20px] " id="services">
      <h2
        className={`${inder.variable} font-inder sm:py-[26px] md:py-[40px] lg:py-[55px] md:text-[55px]  text-center text-white  text-[32px] leading-3 `}
      >
        Our Services
      </h2>
      <ServiceGrid />

      {/* Lightning */}
      <div
        ref={elementRef}
        className={`z-0  absolute top-0 left-[-150px] w-full h-full `}
      >
        <div className={isVisible ? styles.lightning : "hidden z-0"}>
          <Image src="/images/lightning.svg" fill alt="lightning" />
        </div>
      </div>
    </div>
  );
};

export default Services;
