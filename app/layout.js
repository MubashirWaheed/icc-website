import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const DynamicFooter = dynamic(() => import("@/app/components/Footer/Footer"), {
  loading: () => <p>Loading...</p>,
});

const inter = Inter({ subsets: ["latin"] });
const gtmid = process.env.NEXT_PUBLIC_GTMID;

export const metadata = {
  title: "Icc Garage",
  description: "Get the best service in town",
};

export default function RootLayout({ children }) {
  const undercontruction = false;
  return (
    <html lang="en">
      <body>
        {undercontruction ? (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-[28px] mt-[10px] font-medium">
              Website under development
            </h1>
          </div>
        ) : (
          <div></div>
        )}
        {children}
        <DynamicFooter />
        <Analytics />
        <GoogleTagManager gtmId={gtmid} />
      </body>
    </html>
  );
}
