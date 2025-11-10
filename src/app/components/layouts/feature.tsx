"use client";
import React from "react";
import Image from "next/image";
import Img1 from "../../../../public/img/imgFeature/img1.png"
import Img2 from "../../../../public/img/imgFeature/img2.png"
import Img3 from "../../../../public/img/imgFeature/img3.png"
import Link from "next/link";

function feature() {
  return (
    <main className="w-full h-max px-16 py-16 flex flex-col items-center gap-10">
      <article className="w-full flex justify-between items-center">
        <div className="w-1/2">
        <div className="flex gap-4 items-center">
          <span className="w-5 h-[.25rem] bg-[#adadad]"></span>
          <h4 className="text-xl text-[#adadad]">Disscusion</h4>
        </div>
        <h1 className="text-5xl font-bold">Important Updates & Announcements</h1>
        </div>
        <p className="w-1/4 text-[#7E7E7E]">Stay informed with the latest updates, important notices, and upcoming activities from our platform.</p>
      </article>

      <article className="flex gap-8">
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex justify-center bg-gradient-to-r from-[#CAF1F8] from-50% to-[#5ADDF4] px-5 pt-5 rounded-t-2xl w-[90%]">
            <Image src={Img1} alt="image" className=" "/>
          </div>
          <h1 className="font-black text-3xl">Chatting</h1>
          <p>Connect and chat with friends</p>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex justify-center bg-gradient-to-r from-[#CAF1F8] from-50% to-[#5ADDF4] px-5 pt-5 rounded-t-2xl w-[90%]">
            <Image src={Img2} alt="image"/>
          </div>
          <h1 className="font-black text-3xl">Blogging</h1>
          <p>Share stories and new ideas</p>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex justify-center bg-gradient-to-r from-[#CAF1F8] from-50% to-[#5ADDF4] px-5 pt-5 rounded-t-2xl w-[90%]">
            <Image src={Img3} alt="image"/>
          </div>
          <h1 className="font-black text-3xl">Anoucement</h1>
          <p>Get latest news and updates</p>
        </div>
      </article>
      {/* <div className="content-none bottom-2 flex absolute z-1 break-after-column">
        <div className="w-[45px] h-[40px] bg-[#004e8d]"></div>
        <div></div>
      </div> */}
    </main>
  );
}

export default feature;
