import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
// import Footer from "@/components/Footer";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  loading: () => <p>Loading...</p>,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Icc Garage",
  description: "Get the best service in town",
};

export default function RootLayout({ children }) {
  const undercontruction = true;
  return (
    <html lang="en">
      <body className={inter.className}>
        {undercontruction ? (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-[28px] mt-[10px] font-medium">
              Website under development
            </h1>
          </div>
        ) : (
          <Header />
        )}
        {children}
        {/* <Footer /> */}
        {/* <DynamicFooter /> */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
