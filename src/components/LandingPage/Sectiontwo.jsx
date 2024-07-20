import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


import Peeps from "../../../public/svgimage/People.svg"


const Sectiontwo = () => {
  return (
    <main className={`mx-auto flex  bg-[#FFF9F6]   ${inter.className}`}>
      {/* container */}
      <div className="flex flex-row space-x-20 w-[1340px] h-[600px] mx-auto">
        {/* 01 */}
        <div className="w-[641px] ">
          {/* <Image src={people} alt="people" height={500} width={500} /> */}
          <Peeps />
        </div>

        {/* 02 */}
        <div className="max-w-[641px]">
          <h1 className=" text-[36px] font-semibold">
            Experience the Magic of Playdate <br /> Your Adventure in Love
            Awaits
          </h1>
          <p className="text-[#303030] mt-4 text-[16px] font-light ">
            PLAYDATE is more than a swipe. Connect with people who get you.
            Whether <br /> it&apos;s a fun date or a lasting bond, your next
            great experience starts here.
          </p>
          {/* <p className="text-[#303030] mt-4 text-[16px] font-light">
              Swipe, Connect, and Spark New Adventures with <br /> Like - Minded
              Singles Today!
            </p> */}
          {/* btn */}
          <div className="h-[54px] flex items-center justify-center w-[193px] rounded-[33px] bg-orange-gradient text-white mt-4">
            <p> Join now </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Sectiontwo;
