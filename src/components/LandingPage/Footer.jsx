import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import HeroSvgs from "../../../public/svgimage/PlayLogo.svg";
import Androids from "../../../public/svgimage/Android.svg";
import Apples from "../../../public/svgimage/Apple.svg";
import Aistar from "../../../public/svgimage/AiStar.svg";
const Footer = () => {
  return (
    <main className={`    ${inter.className}`}>
      <div className="w-[1213px]  font-light mx-auto h-20  flex flex-row space-x-[300px]  ">
        <div>
          <HeroSvgs className="" />
        </div>
        <div className="flex flex-row   space-x-10 ">
          <ul className="">
            <li className="font-bold">Resources</li>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
              <ul className="">
             <li className="font-bold">Social</li>
            <li>About</li>
            <li>Support</li>
            <li>Language</li>
          </ul>
        </div>
        <div className="space-y-4">
          <Androids/>
        <Apples/>
     
        </div>
      </div>
    </main>
  );
};

export default Footer;
