import { Julius_Sans_One } from "next/font/google";
const juliusSansOne = Julius_Sans_One({
  subsets: ["latin"],
  variable: "--font-julius",
  weight: "400",
});
const Stats = () => {
  return (
    <div className="bg-[#1E1E1E] w-full pt-[10px] sm:py-[10px] md:py-[10px] lg:py-[15px] shrink-0 flex gap-[10px] flex-col sm:flex-row flex-wrap  text-white text-center ">
      <div className="sm:flex-1 ">
        <p
          className={` ${juliusSansOne.variable} font-julius text-[28px] md:text-[38px] lg:text-[60px]`}
        >
          15,000+
        </p>
        <p className="text-[14px] md:text-[17px] xl:text-[22px] font-normal">
          Number of satisfied clients
        </p>
      </div>

      <div className="sm:flex-1 border-x-2 border-[#6e7d00]">
        <div className="relative ">
          <p
            className={` ${juliusSansOne.variable} text-[28px] md:text-[38px] lg:text-[60px] font-light`}
          >
            1200<span className="text-[12px] md:text-[30px]">M</span>
          </p>
          <span className="font-light absolute top-2 lg:top-3 right-0  lg:text-[22px] lg:right-[-20px] left-[100px] md:left-[150px] text-[12px] sm:text-[16px] mb-[50px]">
            2
          </span>
        </div>

        <p className="text-[14px] md:text-[17px] xl:text-[22px] font-normal">
          Service area
        </p>
      </div>

      <div className="sm:flex-1 ">
        <p
          className={` ${juliusSansOne.variable} opacity-100 text-[28px]  md:text-[38px] lg:text-[60px] font-light`}
        >
          25,000+
        </p>
        <p className="text-[14px] xl:text-[22px] md:text-[17px] font-normal">
          Serviced cars
        </p>
      </div>
    </div>
  );
};

export default Stats;