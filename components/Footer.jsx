import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="w-[4400px] text-white flex">
        <span className="uppercase inline-block text-white w-full font-medium text-[20px]">
          “WE MAKE YOUR CAR FEEL LIKE NEW”
        </span>

        <span className="uppercase inline-block w-full text-[20px]">
          “WE MAKE YOUR CAR FEEL LIKE NEW”
        </span>
        <span className="inline-block w-full text-[20px] uppercase">
          “WE MAKE YOUR CAR FEEL LIKE NEW”
        </span>
      </div>
    </footer>
  );
};

export default Footer;
