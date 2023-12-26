// ... (import statements)
"use client";
import { useState } from "react";
import SideMenu from "./SideMenu";
import Image from "next/image";

const MobileNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className={`sticky top-0 z-40 w-full h-[70px] bg-[#2f2f2f]`}>
        <div className="flex items-center h-full justify-between px-[20px]">
          <div className="relative w-[120px] h-[55px]">
            <Image src="/images/test.svg" fill alt="logo" />
          </div>

          {/* Hamburger Icon */}
          <div
            onClick={() => setShowSidebar((prev) => !prev)}
            className={`relative w-[44px] h-[44px] cursor-pointer  ${
              showSidebar ? "hidden" : ""
            }`}
          >
            <Image src="/images/hamburger.svg" fill alt="hamburger" />
          </div>

          {/* Close Menu Icon */}
          <div
            onClick={() => setShowSidebar((prev) => !prev)}
            className={`relative w-[44px] h-[44px] cursor-pointer  ${
              showSidebar ? "" : "hidden"
            }`}
          >
            <Image src="/images/closeMenu.svg" alt="close menu" fill />
          </div>
        </div>
      </div>
      <SideMenu
        isOpen={showSidebar}
        closeSidebar={() => setShowSidebar(false)}
      />
    </>
  );
};

export default MobileNav;
