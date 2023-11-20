import Repair from "@/components/Repair";
import Services from "@/components/Services";
import Image from "next/image";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative overflow-y-auto bg-[#2f2f2f] flex flex-col items-center justify-center">
      <Hero />
      <Stats />
      <Services />
      <Repair />
      <Footer />
      <div className=" absolute sm:top-[450px] sm:right-0 md:top-[520px]  lg:top-[750px] lg:right-0">
        <div className="relative sm:w-[260px] sm:h-[220px] lg:w-[400px] lg:h-[400px]">
          <Image src="/images/pattern2.png" fill alt="pattern" />
        </div>
      </div>
      <div className="absolute sm:top-[1300px] sm:left-0 md:top-[1450px] lg:top-[1050px] lg:left-0">
        <div className="relative sm:w-[400px] sm:h-[140px]  lg:w-[600px] lg:h-[200px]">
          <Image src="/images/pattern3.png" fill alt="pattern3" />
        </div>
      </div>
    </div>
  );
}
