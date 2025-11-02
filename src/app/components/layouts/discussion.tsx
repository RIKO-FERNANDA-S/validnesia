"use client";
import React from "react";
import Image from "next/image";
import Img from "../../../../public/img/imgDisscus/disscus.png";
import Icon1 from "../../../../public/img/imgDisscus/icon1.png";
import Icon2 from "../../../../public/img/imgDisscus/icon2.png";
import Icon3 from "../../../../public/img/imgDisscus/icon3.png";

const Discussion = () => {
  return (
    <section className="bg-linear-to-b from-[#def0f3] to-[#9ce1e9] w-full flex justify-center py-32 h-max gap-20">
      <div className="w-2/5 flex justify-center items-center ">
        <Image src={Img} alt="image Disscus" className="" />
      </div>
      <div className="w-2/5 flex flex-col gap-3">
        <div className="flex gap-4 items-center">
          <span className="w-5 h-[.25rem] bg-[#adadad]"></span>
          <h4 className="text-xl text-[#adadad]">Disscusion</h4>
        </div>
        <h1 className="font-bold text-2xl">Collaborate and Exchange Ideas Effectively</h1>
        <p className="text-justify">
          Our Discussion feature is designed to facilitate seamless
          communication and knowledge sharing among members. By providing an
          interactive space for exchanging ideas, it enables teams and
          communities to collaborate more effectively, make informed decisions,
          and achieve common goals faster.
        </p> 
        <div className="flex flex-col gap-10 mt-9">
          <div className="flex gap-4">
            <Image src={Icon1} alt="icon1" />
            <div >
              <h1 className="text-xl font-semibold">Group Chatting</h1>
              <p className="w-4/5">
                Secure one-on-one or small-group messaging for private
                discussions.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image src={Icon2} alt="icon2" />
            <div>
              <h1 className="text-xl font-semibold">Discussion Room</h1>
              <p className="w-4/5">
                Highlight and celebrate member achievements to build appreciation.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image src={Icon3} alt="icon3" />
            <div>
              <h1 className="text-xl font-semibold">Event</h1>
              <p className="w-4/5">
                Create and share events with your community quickly and easily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discussion;
