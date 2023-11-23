import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
