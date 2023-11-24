import React from "react";

const Stats = () => {
  return (
    <div className=" w-full pt-[10px] sm:py-[10px] md:py-[10px] lg:py-[15px] shrink-0 flex gap-[10px] flex-col sm:flex-row flex-wrap  text-white text-center ">
      <div className="sm:flex-1 ">
        <p className="text-[28px] md:text-[38px]  font-light">10,000+</p>
        <p className="text-[14px] md:text-[17px] font-light ">
          Number of satisfied clients
        </p>
      </div>

      <div className="sm:flex-1 border-x-2 border-[#6e7d00]">
        <div className="relative ">
          <p className="text-[28px] md:text-[38px] font-light">
            1200<span className="text-[12px] md:text-[30px]">M</span>
          </p>
          <span className="font-light absolute top-2 right-0 left-[100px] md:left-[150px] text-[12px] sm:text-[16px] mb-[50px]">
            2
          </span>
        </div>

        <p className="text-[14px] md:text-[17px] font-light">Service area</p>
      </div>

      <div className="sm:flex-1 ">
        <p className="opacity-100 text-[28px] md:text-[38px] font-light">
          15,000+
        </p>
        <p className="text-[14px] md:text-[17px] font-light">Serviced cars</p>
      </div>
    </div>
  );
};

export default Stats;
