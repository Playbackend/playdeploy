import Image from "next/image";
import { Inter } from "next/font/google";

import Sectionone from "@/components/LandingPage/sectionone";
import Sectiontwo from "@/components/LandingPage/Sectiontwo"
import Sectionthree from "@/components/LandingPage/Sectionthree";
import Sectionfour from "@/components/LandingPage/Sectionfour";
import SectionFive from "@/components/LandingPage/SectionFive";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Sectionone/>
      <Sectiontwo/>
      <Sectionthree/>
      <Sectionfour/>
      <SectionFive/>
    </main>

  );
}
