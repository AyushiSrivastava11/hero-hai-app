import React from "react";
import stray_dog from "@/assets/stray-dog.jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Features from "@/components/landing/Features.componensts";
import ContainerScrollAnimation from "@/components/landing/containscrolling.component";
import AccordionSection from "@/components/landing/accordian.component";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <main className="bg-[#1E1E1E] ">
      <div className="min-h-screen w-full flex">
        <Image src={stray_dog} alt="dashboard" className="max-h-screen w-1/2" />
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
