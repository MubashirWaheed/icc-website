import Link from "next/link";
import Image from "next/image";
const navigationData = [
  { id: 1, label: "Home", url: "#" },
  { id: 2, label: "Services", url: "/#services" },
  { id: 3, label: "Contact", url: "#" },
];

const Header = () => {
  return (
    <div className="bg-[#232323] flex items-center justify-center">
      <nav className=" px-3 max-w-[1180px] flex items-center justify-between w-full h-[70px] sm:h-[85px]">
        <div className="relative w-[100px] h-[70px] sm:w-[150px] sm:h-[110px]">
          <Image
            className="block cursor-pointer"
            src="/images/icc-logo.svg"
            alt="logo"
            fill
            priority={true}
          />
        </div>
        <div className="flex items-center gap-1 ">
          <ul className="pt-[30px] pr-[12px] flex gap-[10px] sm:gap-7 text-white">
            {navigationData.map((item) => (
              <li className="text-center" key={item.id}>
                <a
                  className={`
                      ${item.label == "Home" && "after:w-[100%] "}     
                      after:duration-300                 
                      after:content-[""] 
                      after:h-[4px]
                      after:block
                      after:transition-all 
                      after:ease-in-out 
                      hover:after:w-[100%] 
                      after:w-[0%] 
                      after:bg-[#6E7D00] 
                      transition-all 
                      ease-in-out  
                      px-[5px] 
                      uppercase 
                      text-[13px] 
                      sm:text-[16px] 
                      font-medium 
                      sm:font-bold 
                      cursor-pointer
                      `}
                  href={item.url}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Link
            target="_blank"
            href="https://www.instagram.com/icc_garage_uae/"
            className="hover:scale-105 transition-all relative w-[24px] h-[24px] sm:w-[34px] sm:h-[34px] cursor-pointer"
          >
            <Image
              src="/images/whatsapp-transparent.svg"
              alt="instagram logo"
              fill
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
