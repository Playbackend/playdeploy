import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import HeroSvg from "../../../public/svgimage/HeroImage.svg";

const Sectionone = () => {
  return (
    <main
      className={`mx-auto flex mt-40 bg-hero-gradient   ${inter.className}`}
    >
      {/* container */}
      <div className="flex flex-row space-x-20   w-[1340px] h-[635px] mx-auto">
        {/* 01 */}
        <div className="max-w-[641px]">
          <h1 className="leading-[60px] text-[40px] font-semibold">
            Find Your Perfect Playdate: <br /> Experience a Connection <br />
            That&apos;s
            <span className="bg-orange-gradient text-transparent bg-clip-text">
              Exciting!
            </span>
          </h1>
          <p className="text-[#303030] mt-4 text-[16px] font-light">
            Swipe, Connect, and Spark New Adventures with <br /> Like - Minded
            Singles Today!
          </p>
          {/* btn */}
          <div className="h-[54px] flex items-center justify-center w-[193px] rounded-[33px] bg-orange-gradient text-white mt-4">
            <p> create an account </p>
          </div>
        </div>
        {/* 02 */}
        <div className="w-[641px] ">
          <HeroSvg />
        </div>
      </div>
    </main>
  );
};
export default Sectionone;
