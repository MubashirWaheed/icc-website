import Repair from "@/components/Repair";
import Services from "@/components/Services";
import Image from "next/image";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  const undercontruction = true;
  return (
    <div>
      {undercontruction === true ? (
        ""
      ) : (
        <div className="flex bg-[#2f2f2f] justify-center">
          <div className="max-w-[1536px] relative overflow-y-auto   flex flex-col items-center justify-center">
            <Hero />
            <Stats />
            <Services />
            <Repair />
            <Footer />

            <div className="z-0 absolute sm:top-[450px] sm:right-0 md:top-[570px] lg:top-[600px] xl:top-[780px] 2xl:top-[880px]  ">
              <div className="relative sm:w-[260px] sm:h-[220px] lg:w-[400px] lg:h-[400px]">
                <Image src="/images/pattern2.png" fill alt="pattern" />
              </div>
            </div>
            <div className="z-0 absolute sm:top-[1300px] sm:left-0 md:top-[1450px] lg:top-[1250px] lg:left-0 xl:top-[1200px] 2xl:top-[1300px]  ">
              <div className="relative sm:w-[400px] sm:h-[140px] lg:w-[600px] lg:h-[200px] 2xl:h-[240px]">
                <Image src="/images/pattern3.png" fill alt="pattern3" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
