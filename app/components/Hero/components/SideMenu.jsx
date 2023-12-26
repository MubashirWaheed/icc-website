"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideMenu = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`z-50 fixed h-full w-[70%] bg-[#2f2f2f] top-0 left-0 bottom-0 transition-transform ease-in-out transform duration-500 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-full relative h-[80px] mt-[50px]">
        <Image src="/images/mobile-logo.svg" alt="logo" fill />
      </div>
      <ul className="mt-[40px] text-white  flex flex-col px-[40px] ">
        {menuItems.map(({ name, href }, index) => {
          return (
            <li key={index} className="text-[28px] border-b-2 border-white">
              <Link className="font-inter" href={href}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;

const menuItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Contact Us",
    href: "#contact",
  },
];
