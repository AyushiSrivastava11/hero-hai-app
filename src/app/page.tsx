import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Features from "@/components/landing/Features.componensts";
import ContainerScrollAnimation from "@/components/landing/containscrolling.component";
import AccordionSection from "@/components/landing/accordian.component";
import Footer from "@/components/Footer";
import { FlipWords } from "@/components/landing/flip-words";

const HomePage = () => {
  const words = [
    "stray animals",
    "victics of calamities",
    "refugies",
    "people in need",
  ];
  return (
    <main className="bg-[#333333] ">
      <div className="min-h-screen flex justify-center items-center px-4 dark">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Helping
          <FlipWords words={words} /> <br />
          with the power of the community.
        </div>
      </div>
      <div className="min-h-screen w-full flex">
        <Image
          src="https://utfs.io/f/3ed4dc31-5aa3-4b74-9e0f-a8c2554adc44-6s14dk.jpg"
          alt="dashboard"
          width={5000}
          height={5000}
          className="max-h-screen w-1/2 rounded-tr-lg rounded-br-lg"
        />
        <div className="w-full">
          <Navbar />
          <div className="h-full w-full flex flex-col mt-[220px] text-center items-center text-white">
            <p className="font-extrabold text-[100px]">HERO</p>
            <p className="font-extrabold text-[65px]">HAI APP</p>
          </div>
        </div>
      </div>
      <Features />
      <ContainerScrollAnimation />
      <AccordionSection />
      <Footer />
    </main>
  );
};

export default HomePage;
