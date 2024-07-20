import { Inter } from "next/font/google";
import HeroSvg from "../../../public/svgimage/PlayLogo.svg";
const inter = Inter({ subsets: ["latin"] });
const Nav = () => {
  return (
    <main className={`mx-auto flex    ${inter.className}`}>
      <div className="w-[1340px]  font-light mx-auto h-20 items-center flex flex-row justify-between  ">
        <div>
          <HeroSvg className="" />
        </div>
        <div>
          <ul className="flex flex-row space-x-4">
            <li>Download App</li>
            <li>About</li>
            <li>Support</li>
            <li>Language</li>
          </ul>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <p>Login</p>
          <div className="h-[48px] flex items-center justify-center w-[147px] rounded-[33px] bg-orange-gradient text-white ">
            <p>Get started </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Nav;
