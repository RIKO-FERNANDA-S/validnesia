"use client";
import React from "react";
import Image from "next/image";
import Img1 from "../../../public/img/imgFeature/img1.png"
import Img2 from "../../../public/img/imgFeature/img2.png"
import Img3 from "../../../public/img/imgFeature/img3.png"
import Link from "next/link";

function feature() {
  return (
    <main className="w-full h-max max-lg:px-12 p-16 flex flex-col items-center gap-10">
      <article className="w-full flex justify-between max-md:justify-center max-md:flex-col max-md:text-center max-md:gap-3 items-center">
        <div className="w-1/2 max-md:w-full">
        <div className="flex gap-4 items-center max-md:w-full max-md:justify-center">
          <span className="w-5 h-[.25rem] bg-[#adadad] max-lg:hidden"></span>
          <h4 className="text-xl text-[#adadad]">Feature</h4>
        </div>
        <h1 className=" font-bold md:text-3xl lg:text-5xl max-md:text-xl">Important Updates & Announcements</h1>
        </div>
        <p className="w-1/4 text-[#7E7E7E] max-md:w-full md:text-sm md:w-1/3">Stay informed with the latest updates, important notices, and upcoming activities from our platform.</p>
      </article>

      <article className="flex gap-10 max-lg:gap-12 max-lg:flex-wrap overflow-hidden justify-center w-full">
        <div className="flex flex-col items-center gap-2 w-[80%] ">
          <div className=" flex justify-center bg-gradient-to-r from-[#CAF1F8] from-50% to-[#5ADDF4] px-5 pt-5 rounded-t-2xl w-80">
            <Image src={Img1} alt="image" className=" "/>
          </div>
          <h1 className="font-black text-3xl">Chatting</h1>
          <p>Connect and chat with friends</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-[80%] ">
          <div className="flex justify-center bg-gradient-to-r from-[#CAF1F8] from-50% to-[#5ADDF4] px-5 pt-5 rounded-t-2xl w-80">
            <Image src={Img2} alt="image"/>
          </div>
          <h1 className="font-black text-3xl">Blogging</h1>
          <p>Share stories and new ideas</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-[80%] ">
          <div className="flex justify-center bg-gradient-to-r from-[#CAF1F8] from-50% to-[#5ADDF4] px-5 pt-5 rounded-t-2xl w-80">
            <Image src={Img3} alt="image"/>
          </div>
          <h1 className="font-black text-3xl">Anoucement</h1>
          <p>Get latest news and updates</p>
        </div>
      </article>
    </main>
  );
}

export default feature;
