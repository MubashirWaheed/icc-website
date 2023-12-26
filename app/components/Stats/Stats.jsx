import { Julius_Sans_One } from "next/font/google";
const juliusSansOne = Julius_Sans_One({
  subsets: ["latin"],
  variable: "--font-julius",
  weight: "400",
});
const Stats = () => {
  return (
    <div className="mb-[20px] sm:py-0 bg-[#2f2f2f] sm:bg-[#1E1E1E] w-full flex items-center justify-center">
      <div className="bg-[#2f2f2f] max-w-[1350px] sm:bg-[#1E1E1E] w-full sm:pt-[10px] sm:py-[10px] md:py-[10px] lg:py-[35px] shrink-0 flex gap-[10px] flex-col sm:flex-row flex-wrap  text-white text-center ">
        <div className=" before:content-['I am here'] before:h-[120px] before:bg-primaryGreen before:w-[1px] lg:before:w-[1px] sm:flex-1">
          <p
            className={`
            
            ${juliusSansOne.variable} font-julius text-[60px] sm:text-[28px] md:text-[38px] lg:text-[60px]`}
          >
            15,000+
          </p>
          <p className="sm:mt-[-5px] md:mt-[-15px] text-[24px] sm:text-[14px] md:text-[17px] xl:text-[22px] font-normal">
            Number of satisfied clients
          </p>
        </div>

        <div className="sm:flex-1 ">
          <div className="relative border-x-[1px] border-[#6e7d00]  ">
            <p
              className={` ${juliusSansOne.variable} font-julius text-[60px] sm:text-[28px] md:text-[38px] lg:text-[60px] font-light`}
            >
              1200
              <span
                className={` ${juliusSansOne.variable} font-julius text-[40px] sm:text-[12px] md:text-[30px]`}
              >
                M
              </span>
            </p>
            <span className="font-light absolute top-2 lg:top-3 right-0  lg:text-[22px] lg:right-[-20px] left-[170px] md:left-[150px] text-[22px] sm:text-[16px]  mb-[50px]">
              2
            </span>
          </div>

          <p className="sm:mt-[-5px] md:mt-[-15px] text-[24px] sm:text-[14px] md:text-[17px] xl:text-[22px] font-normal">
            Service area
          </p>
        </div>

        <div className="sm:flex-1 ">
          <p
            className={`${juliusSansOne.variable}  font-julius text-[60px] sm:text-[28px]  md:text-[38px] lg:text-[60px] font-light`}
          >
            25,000+
          </p>
          <p className="sm:mt-[-5px] md:mt-[-15px] text-[24px] sm:text-[14px] xl:text-[22px] md:text-[17px] font-normal">
            Serviced cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
