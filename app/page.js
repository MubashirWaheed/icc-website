import Repair from "@/components/Repair";
import Services from "@/components/Services";
import Image from "next/image";
import styles from "@/styles/footer.module.css";

export default function Home() {
  return (
    <div className="overflow-y-auto bg-[#2f2f2f] flex flex-col items-center justify-center">
      <main className="">
        <div className="relative">
          <Image
            src="/images/hero.png"
            width="1600"
            height="800"
            alt="hero section"
          />
          <div className="absolute bg-black bg-opacity-40  inset-0"></div>
        </div>
      </main>

      {/* STATS */}
      <div className="max-w-[1180px]  pt-[10px] md:py-[20px] sm:py-[50px] w-full shrink-0 flex gap-[10px] flex-col sm:flex-row flex-wrap  text-white text-center ">
        <div className="sm:flex-1 ">
          <p className="text-[28px] md:text-[50px] font-light">10,000+</p>
          <p className="text-[14px] md:text-[22px] font-light">
            Number of satisfied clients
          </p>
        </div>

        <div className="sm:flex-1 border-x-2 border-[#6e7d00]">
          <div className="relative ">
            <p className="text-[28px] md:text-[50px] font-light">
              1200<span className="text-[12px] md:text-[30px]">M</span>
            </p>
            <span className="font-light absolute top-2 right-0 left-[100px] md:left-[150px] text-[12px] sm:text-[16px] mb-[50px]">
              2
            </span>
          </div>

          <p className="text-[14px] md:text-[22px] font-light">Service area</p>
        </div>

        <div className="sm:flex-1 ">
          <p className="text-[28px] md:text-[50px] font-light">15,000+</p>
          <p className="text-[14px] md:text-[22px] font-light">Serviced cars</p>
        </div>
      </div>

      {/* SERVICES */}
      <Services />

      {/* REPAIR */}
      <Repair />

      <footer
        //  className="w-full text-center "
        className={styles.footer}
      >
        <div className="w-[4400px]  text-red-300 flex">
          <span className="uppercase inline-block  text-white w-full font-medium text-[20px]">
            “WE MAKE YOUR CAR FEEL LIKE NEW”
          </span>

          <span className="inline-block w-full">
            “WE MAKE YOUR CAR FEEL LIKE NEW”
          </span>
          <span className="inline-block w-full">
            “WE MAKE YOUR CAR FEEL LIKE NEW”
          </span>
        </div>
      </footer>
    </div>
  );
}
