import Image from "next/image";
import Link from "next/link";

import Repair from "./components/Repair/Repair";
import Services from "./components/Services/Services";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Stats from "./components/Stats/Stats";

export const metadata = {
  title: "ICC Gargage",
  description: "Get the best service in Dubai",
};

export default function Home() {
  const undercontruction = false;
  return (
    <div>
      {undercontruction === true ? (
        ""
      ) : (
        <div className="flex bg-[#2f2f2f] justify-center">
          <div className="max-w-[1900px] w-full relative overflow-y-auto  flex flex-col items-center justify-center">
            <Hero />
            <Stats />
            <Services />
            <Contact />

            <Repair />
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=%2B971523383358&text&type=phone_number&app_absent=0"
              className=" fixed z-50 left-[30px] bottom-[30px] hover:scale-105 transition-all  cursor-pointer bg-primaryGreen rounded-full"
            >
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src="/images/whatsapp-transparent.svg"
                  fill
                  alt="whatsapp logo"
                />
              </div>
            </Link>

            {/* <div className="z-0 absolute sm:top-[480px] sm:right-0 md:top-[600px] lg:top-[700px] xl:top-[700px] 2xl:top-[680px]  ">
              <div className="relative sm:w-[260px] sm:h-[220px] lg:w-[400px] lg:h-[400px]">
                <Image src="/images/pattern2.png" fill alt="pattern" />
              </div>
            </div>
            <div className="z-0 absolute sm:top-[850px] sm:left-0 md:top-[990px] lg:top-[1130px] lg:left-0 xl:top-[1050px] 2xl:top-[1100px]  ">
              <div className="relative sm:w-[400px] sm:h-[140px] lg:w-[600px] lg:h-[200px] 2xl:w-[700px] 2xl:h-[260px] ">
                <Image src="/images/pattern3.png" fill alt="pattern3" />
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
