import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Image from "next/image";
import people from  "../../../public/people.png"
import { data } from "@/data";


const Sectionthree = () => {
  // console.log(data)
    return (
      <main className={` flex ${inter.className}`}>
        {/* container */}
        <div className=" w-[1340px]  mt-10   mx-auto">
            <div className="flex justify-center items-center  h-10 w-full">
                <h1 className="text-[36px] font-semibold">Love Stories from Playdate</h1>

            </div>
            {/* cards */}
            <div className="grid grid-cols-3 mt-10  ">
             {data.map((x)=>{
              return (
                <div
                  key={x.id}
                  className="h-[158px] w-[401px] border rounded-[10px] border-[#D1D1D6] mb-3 p-4"
                >
                  <p className="font-light text-[15px]">{x.text}</p>
                  <div className="flex flex-row items-center space-x-2 mt-2">
                    <div> {x.img}</div>
                    <div><p className="font-light">{x.name}</p></div>
                  </div>
                </div>
              );
            })}
            </div>
       
       
 
        </div>
      </main>
    );
};
export default Sectionthree;
