import styles from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="w-[4400px] text-white flex gap-6">
          <span className="whitespace-nowrap uppercase  text-white w-full font-medium text-[22px]">
            WE MAKE YOUR CAR FEEL LIKE NEW
          </span>

          <span className="whitespace-nowrap uppercase inline-block w-full text-[22px]">
            WE MAKE YOUR CAR FEEL LIKE NEW
          </span>
          <span className="whitespace-nowrap inline-block w-full text-[22px] uppercase">
            WE MAKE YOUR CAR FEEL LIKE NEW
          </span>
        </div>
      </footer>
      <div className="bg-[#575e21] flex items-center justify-center">
        <div className="max-w-[1800px] sm:px-[20px] sm:py-[10px] xl:pl-[50px] flex  text-white   ">
          <div className="flex-1 flex flex-col">
            <h4 className="sm:my-[20px]  sm:text-[16px] lg:text-[24px] text-[22px] font-normal uppercase">
              Follow Us:
            </h4>
            <div className="">
              <p className="xl:text-[20px]">+97123456789</p>
              <ul>
                <li className="xl:text-[20px] cursor-pointer">
                  <Link href="https://www.instagram.com/icc_garage_uae/">
                    Icc_garage_uae
                  </Link>
                </li>
                <li className="xl:text-[20px] cursor-pointer">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/ICCGarage/"
                  >
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
                Al Quoz Industrial Area 3, streey 22 United Arab Emirates
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
