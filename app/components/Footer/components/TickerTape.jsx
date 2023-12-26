import styles from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

const TickerTape = () => {
  return (
    <footer className="block sm:hidden  items-center justify-center bg-[#575e21]">
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
  );
};

export default TickerTape;
