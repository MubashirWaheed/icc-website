import Image from "next/image";
import Link from "next/link";

import Repair from "./components/Repair/Repair";
import Services from "./components/Services/Services";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Stats from "./components/Stats/Stats";
import AboutUs from "./components/About/AboutUs";
import TickerTape from "./components/Footer/components/TickerTape";
import MobileServices from "./components/Services/components/MobileServices";

export const metadata = {
  title: "ICC Gargage",
  description: "Get the best service in Dubai",
};

export default function Home() {
  // I only want to show the component if the mobile view open
  return (
    <div className="overflow-x-hidden">
      <div className="overflow-x-hidden flex bg-[#2f2f2f] justify-center">
        <div className="max-w-[1900px] w-full relative overflow-y-auto  flex flex-col items-center justify-center">
          <Hero />
          <AboutUs />
          <Stats />
          <div className="block w-[100vw] sm:hidden">
            <TickerTape />
          </div>
          {/* <div className="block sm:hidden"> */}
          <MobileServices />
          {/* </div> */}
          <div className="hidden sm:flex w-full">
            <Services />
          </div>
          <Contact />
          <div className="hidden sm:flex w-full">
            <Repair />
          </div>

          <Link
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=%2B971523383358&text&type=phone_number&app_absent=0"
            className="hidden sm:block fixed z-50 left-[30px] bottom-[30px] hover:scale-105 transition-all  cursor-pointer bg-primaryGreen rounded-full"
          >
            <div className="relative w-[60px] h-[60px]">
              <Image
                src="/images/whatsapp-transparent.svg"
                fill
                alt="whatsapp logo"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
