"use client ";
import styles from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.tickerTapeContainer}>
          <div className={styles.tickerTape}>
            <span className="whitespace-nowrap uppercase text-white font-medium text-[22px] xl:text-[26px]">
              WE MAKE YOUR CAR FEEL LIKE NEW
            </span>

            <span className="whitespace-nowrap uppercase  text-[22px] xl:text-[26px] font-medium">
              WE MAKE YOUR CAR FEEL LIKE NEW
            </span>
            <span className="text-white whitespace-nowrap text-[22px] xl:text-[26px] uppercase  font-medium">
              WE MAKE YOUR CAR FEEL LIKE NEW
            </span>
          </div>

          <div className={styles.tickerTape} aria-hidden="true">
            <span className=" whitespace-nowrap uppercase text-white font-medium text-[22px] xl:text-[26px]">
              WE MAKE YOUR CAR FEEL LIKE NEW
            </span>

            <span className="whitespace-nowrap uppercase   text-[22px] xl:text-[26px] font-medium">
              WE MAKE YOUR CAR FEEL LIKE NEW
            </span>
            <span className="whitespace-nowrap  text-[22px] xl:text-[26px] uppercase font-medium">
              WE MAKE YOUR CAR FEEL LIKE NEW
            </span>
          </div>
        </div>
      </footer>

      <div className="bg-[#575e21] flex items-center justify-center">
        <div className="max-w-[1800px] sm:px-[20px] sm:py-[10px] xl:pl-[50px] flex  text-white   ">
          <div className="flex-1 flex flex-col">
            <h4 className="sm:my-[20px]  sm:text-[16px] lg:text-[24px] text-[22px] font-normal uppercase">
              Follow Us:
            </h4>
            <div className="">
              {/* <div className="flex">
                <div className="relative gap-2 w-[20px] h-[20px] xl:w-[30px] xl:h-[30px] ml-[10px]">
                  <Image
                    src="/images/whatsapp-transparent.svg"
                    fill
                    alt="whatsapp logo"
                  />
                </div>
                <p className="text-[14px] xl:text-[20px] ml-[10px]">
                  +971523383358
                </p>
              </div> */}
              {/* <div className="flex">
                <div className="relative gap-2 xl:w-[30px] xl:h-[30px]">
                  <Image
                    src="/images/whatsapp-transparent.svg"
                    fill
                    alt="whatsapp logo"
                  />
                </div>
                <p className="xl:text-[20px]">info@iccgarage.com</p>
              </div> */}
              <ul>
                <li className="flex items-center gap-2 xl:text-[20px] cursor-pointer">
                  <Link
                    target="_blank"
                    className="flex gap-3 items-center"
                    href="https://api.whatsapp.com/send/?phone=%2B971523383358&text&type=phone_number&app_absent=0"
                  >
                    <div className="relative  w-[28px] h-[26px] xl:w-[38px] xl:h-[50px]">
                      <Image
                        src="/images/whatsapp-transparent.svg"
                        fill
                        alt="whatsapp logo"
                      />
                    </div>
                    +971523383358
                  </Link>
                </li>
                <li className="flex items-center gap-2 xl:text-[20px] cursor-pointer">
                  <Link
                    target="_blank"
                    className="flex gap-3 items-center"
                    href="https://www.instagram.com/icc_garage_uae/"
                  >
                    <div className="relative  w-[28px] h-[26px] xl:w-[55px] xl:h-[60px] ml-[-10px]">
                      <Image
                        src="/images/instagramIcon.svg"
                        fill
                        alt="Instagram icon"
                      />
                    </div>
                    Icc_garage_uae
                  </Link>
                </li>
                <li className="flex  xl:text-[20px] cursor-pointer">
                  <Link
                    className="flex gap-5 items-center"
                    target="_blank"
                    href="https://www.facebook.com/ICCGarage/"
                  >
                    <div className="relative w-[20px] h-[20px]  xl:w-[40px] xl:h-[40px] ml-[-5px]">
                      <Image
                        src="/images/facebook.svg"
                        fill
                        alt="facebook logo"
                      />
                    </div>
                    facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex-1 flex flex-col ">
            <h4 className="sm:my-[20px] lg:text-[24px]  sm:text-[16px] text-[22px] font-normal uppercase">
              Opening Hours:
            </h4>
            <div className="text-[14px] xl:text-[16px]">
              <p className="xl:text-[20px]">Mon-Thr: 8:30-18:30</p>
              <p className="xl:text-[20px]">Fri: 08:30-12:30; 14:30-18:30</p>
              <p className="xl:text-[20px]">Sat: 8:30-16:00 </p>
              <p className="xl:text-[20px]">Sun: Off</p>
            </div>
          </div>
          <div className=" flex-1 flex flex-col ">
            <h4 className="sm:my-[20px] lg:text-[24px]  sm:text-[16px]  text-[22px] font-normal uppercase">
              Address:
            </h4>
            <div className="">
              <p className="xl:text-[20px] font-bold">Dubai</p>
              <p className="xl:text-[20px]">
                Al Quoz Industrial Area 3, street 22 United Arab Emirates
              </p>
            </div>
          </div>
          <div className="flex-1 flex h-full justify-center items-center">
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/ICC+-+Intensive+Car+Care/@25.1223887,55.2208276,17z/data=!4m6!3m5!1s0x3e5f6bdb00000001:0xe5da10f8148c0701!8m2!3d25.1223887!4d55.2208276!16s%2Fg%2F11bccj809j?entry=ttu"
            >
              <div className="relative sm:w-[150px] sm:h-[140px] md:w-[] lg:w-[220px] lg:h-[170px] xl:w-[280px] xl:h-[230px]">
                <Image
                  className="cursor-pointer py-[20px]"
                  // width="300"
                  // height="250"
                  alt="map"
                  fill
                  src="/images/map.png"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
