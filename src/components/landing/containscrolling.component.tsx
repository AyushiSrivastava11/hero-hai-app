"use client";
import React from "react";
import Image from "next/image";
// TODO: We need a better picture tham this.
import { ContainerScroll } from "./containscrolling";

export default function ContainerScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden bg-[#333333]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                HERO HAI APP
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://utfs.io/f/ad11ffcd-04b7-498a-8cca-0e0258105213-qjbm3a.jpg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
