import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import HeroSvg from "../../../public/svgimage/Ai.svg";
import Aistar from "../../../public/svgimage/AiStar.svg";

const Sectionfour = () => {
    return (
      <main
        className={`mx-auto flex mt-40 bg-deep-gradient   ${inter.className}`}
      >
        {/* container */}
        <div className="flex flex-row space-x-20   w-[1340px] h-[515px] mx-auto">
          {/* 01 */}
          <div className="max-w-[641px] m-auto">
            <h1 className="leading-[60px] text-[40px] text-white font-semibold">
              Meet Date Genius Your <br /> Personal Dating Assistant
            </h1>
            <div className="flex flex-row mt-2">
              <Aistar />
              <p className="text-white  text-[16px] font-light">
                Powered by AI to Elevate Your Dating Experience
              </p>
            </div>

            {/* btn */}
            <div className="h-[54px] flex items-center justify-center w-[193px] rounded-[33px] bg-orange-gradient text-white mt-4">
              <p> Test Now</p>
            </div>
          </div>
          {/* 02 */}
          <div className="w-[641px] m-auto ">
            <HeroSvg />
          </div>
        </div>
      </main>
    );
};
export default Sectionfour;
