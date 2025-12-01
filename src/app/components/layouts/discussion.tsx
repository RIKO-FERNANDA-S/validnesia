"use client";
import React from "react";
import Image from "next/image";
import Img from "../../../../public/img/imgDisscus/disscus.png";
import Icon1 from "../../../../public/img/imgDisscus/icon1.png";
import Icon2 from "../../../../public/img/imgDisscus/icon2.png";
import Icon3 from "../../../../public/img/imgDisscus/icon3.png";

const Discussion = () => {
  return (
    <section className="bg-linear-to-b from-[#def0f3] to-[#9ce1e9] w-full flex justify-center py-32 h-max gap-20 max-lg:px-16">
      <div className="w-2/5 max-lg:hidden flex justify-center items-center ">
        <Image src={Img} alt="image Disscus"  />
      </div>
      <div className="lg:w-2/5 w-full flex flex-col gap-3 ">
        <div className="flex gap-4 items-center max-md:w-full max-lg:justify-center">
          <span className="w-5 h-[.25rem] bg-[#adadad] max-lg:hidden"></span>
          <h4 className="text-xl text-[#adadad] max-lg:tetx-center">Disscusion</h4>
        </div>
        <h1 className="font-bold text-2xl max-lg:text-center">Collaborate and Exchange Ideas Effectively</h1>
        <p className="text-justify max-lg:text-justify">
          Our Discussion feature is designed to facilitate seamless
          communication and knowledge sharing among members. By providing an
          interactive space for exchanging ideas, it enables teams and
          communities to collaborate more effectively, make informed decisions,
          and achieve common goals faster.
        </p> 
        <div className="flex flex-col gap-10 mt-9">
          <div className="flex gap-4 flex-wrap justify-center max-md:text-center">
            <Image src={Icon1} alt="icon1" className="max-md:w-16 max-md:h-16" />
            <div >
              <h1 className="text-xl font-semibold">Group Chatting</h1>
              <p className="w-4/5 max-md:w-full max-md:px-12">
                Secure one-on-one or small-group messaging for private
                discussions.
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap justify-center max-md:text-center">
            <Image src={Icon2} alt="icon2" className="max-md:w-16 max-md:h-16" />
            <div>
              <h1 className="text-xl font-semibold">Discussion Room</h1>
              <p className="w-4/5 max-md:w-full max-md:px-12">
                Highlight and celebrate member achievements to build appreciation.
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap justify-center max-md:text-center">
            <Image src={Icon3} alt="icon3" className="max-md:w-16 max-md:h-16" />
            <div>
              <h1 className="text-xl font-semibold">Event</h1>
              <p className="w-4/5 max-md:w-full max-md:px-12">
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
