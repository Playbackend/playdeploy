import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image"

import HeroSvg from "../../../public/svgimage/Ai.svg";
import Sectionbg  from "../../../public/svgimage/Sectionbg.svg";
import Aistar from "../../../public/svgimage/AiStar.svg";
import Phone from "../../../public/svgimage/Phones.svg";
import Androids from "../../../public/svgimage/Android.svg";
import Apples from "../../../public/svgimage/Apple.svg";
import orangebg from "../../../public/orangebg.png";



const SectionFive = () => {
    return (
      <main className={`mx-auto flex mt-40 mb-10   ${inter.className}`}>
        {/* container */}
        <div className="flex rounded-[40px] w-[1340px] h-[440px] mx-auto" >
        <Image src={orangebg} width={1213} height={440} className="h-[440px] absolute  w-[1213px]"/>
        <div className="w-[1213px] h-[440px] flex flex-row   relative   justify-between">
          {/* 01 */}
          <div className="w-full justify-center mx-20 my-auto">
              <h1 className="text-[36px] text-white font-semibold">Get Playdate App <br/> Today!</h1> 
             <p className="text-[#ffffff] mt-4 text-[16px] font-light">Find Love and Adventure Anytime, Anywhere</p> 
             <div className="flex flex-row mt-2 space-x-3">
                <Androids/>
                <Apples/>
             </div>
             <p className="text-[#ffffff] mt-2 text-[16px] font-light">Find Love and Adventure Anytime, Anywhere</p> 
          </div>
           {/* 02 */}
                <div className=" ">
                <Phone className="h-[533px] w-[630] -top-[92px] -right-3 relative"/>   
          </div>
        </div>   
        </div>
      </main>
    );
};
export default SectionFive;
