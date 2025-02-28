"use client"

import { Navbar } from "@/components/sections/Navbar";
import { HomePage } from "@/components/sections/Home";
import Image from "next/image";
import { FootComp } from "@/components/sections/footcomp";
import { About } from "@/components/sections/About";
import { Background } from "@/components/UI/Background";
import { Sponsors } from "@/components/sections/Sponsors";
import { Partners } from "@/components/sections/Partners";
import { ReachUs } from "@/components/sections/ReachUs";
import { Faqs } from "@/components/sections/Faqs";

export default function Home() {
  return (
    <main className="bg-black max-w-screen">
      <Background/>
    <div className="flex relative z-[1] text-white flex-col items-center justify-between md:py-0 pt-20">
      <Navbar/>
      <HomePage/>
      <About/>
      <Sponsors/>
      <Partners/>
      <ReachUs/>
      <Faqs/>
    </div>
    </main>
  );
}
