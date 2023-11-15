import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Icc Garage",
  description: "Get the best service in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#232323] flex items-center justify-center">
          <nav className=" px-3 max-w-[1180px] flex items-center justify-between w-full h-[70px] sm:h-[85px]">
            <div>
              <Image
                className="h-full cursor-pointer block sm:hidden"
                src="/images/icc-logo.svg"
                alt="logo"
                width="100"
                height="70"
                priority={true}
              />
              <Image
                className="h-full hidden sm:block"
                src="/images/icc-logo.svg"
                alt="logo"
                width="150"
                height="110"
                priority={true}
              />
            </div>

            <ul className="flex gap-[10px] sm:gap-7  text-white">
              <li>
                <a
                  className="uppercase text-[13px] sm:text-[16px] font-medium sm:font-bold"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="uppercase text-[13px] sm:text-[16px] font-medium sm:font-bold"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="uppercase text-[13px] sm:text-[16px] font-medium sm:font-bold"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
