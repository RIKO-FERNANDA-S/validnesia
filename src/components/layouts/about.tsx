"use client";
import React from "react";
import Image from "next/image";
import Icon1 from "../../../public/img/icons/1.png";
import Icon2 from "../../../public/img/icons/2.png";
import Icon3 from "../../../public/img/icons/3.png";
import Icon4 from "../../../public/img/icons/4.png";

function About() {
  return (
    <main className="my-16 h-max min-md:h-screen w-full max-lg:text-center bg-white items-center flex flex-wrap max-md:flex-col" id="about">
      <section className="w-full lg:w-[55%] flex gap-5 lg:h-4/5 justify-center items-center">
        <div className="max-lg:w-full w-max flex flex-col gap-5 h-max px-5 max-lg:items-center lg:pl-14">
          <div className="flex gap-4 items-center">
            <span className="w-5  h-[.25rem] bg-[#adadad] max-lg:hidden"></span>
            <h4 className="text-xl text-[#adadad]">About Us</h4>
          </div>
          <div className="max-md:mb-8">
            <h1 className="text-3xl min-md:text-5xl font-semibold">
              Where Ideas Turn Into Conversations
            </h1>
          </div>
          <div className="w-[90%] max-md:text-center">
            <p className="text-lg max-md:hidden font-medium">
              We believe collaboration starts with sharing. Through
              community-led posts and meaningful discussions, every idea can
              spark new opportunities and inspire actions that go beyond the
              screen.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-[45%] xl:h-[60%] flex gap-8 lg:gap-5 h-max lg:h-4/5 justify-center flex-wrap">
        <article className=" flex flex-col gap-8 lg:gap-5 justify-end h-full">
          <div className="text-white gap-4 justify-center items-center p-5 flex flex-col text-center bg-linear-to-tr from-[#0751A6] to-[#023166] from-[5%] h-60 w-60 max-md:w-80 max-md:h-80 shadow-[4px_4px_5px_#110d0d5d]">
            <Image src={Icon1} alt="icon1" />
            <div>
              <h3 className="text-base font-bold">Collaborative Workspace</h3>
              <p className="text-xs">
                A unified space for your team to share ideas, discuss, and
                manage projects efficiently.
              </p>
            </div>
          </div>
          <div className="text-[#0751A6] gap-4 justify-center items-center p-5 flex flex-col text-center bg-linear-to-br from-[#eaf1f1] to-[#b9edf5] from-[5%] h-60 w-60 max-md:w-80 max-md:h-80 shadow-[4px_4px_5px_#110d0d5d]">
            <Image src={Icon2} alt="icon2" />
            <div>
              <h3 className="text-base font-bold ">Centralized File Storage</h3>
              <p className="text-xs">
                Securely store and manage all your organization's documents in
                one easy-to-access place.
              </p>
            </div>
          </div>
        </article>
        <article className=" flex flex-col gap-8 lg:gap-5 justify-start h-full">
          <div className="text-[#0751A6] gap-4 justify-center items-center p-5 flex flex-col text-center bg-linear-to-br from-[#eaf1f1] to-[#b9edf5] from-[5%] h-60 w-60 max-md:w-80 max-md:h-80 shadow-[4px_4px_5px_#110d0d5d]">
            <Image src={Icon3} alt="icon3" />
            <div>
              <h3 className="text-[15px] font-bold"> Real-Time Communication</h3>
              <p className="text-xs">
                Instant messaging features that make information exchange faster
                and more effective.
              </p>
            </div>
          </div>
          <div className="text-white gap-4 justify-center items-center p-5 flex flex-col text-center bg-linear-to-tr from-[#0751A6] to-[#023166] from-[5%] h-60 w-60 max-md:w-80 max-md:h-80 shadow-[4px_4px_5px_#110d0d5d]">
            <Image src={Icon4} alt="icon4" />
            <div>
              <h3 className="text-[15px] font-bold">Event & Task Management</h3>
              <p className="text-xs">
                Easily organize schedules, meetings, and tasks so every member
                stays in sync.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default About;
