"use client";
import React from "react";

function canDo() {
  return (
    <main className="mb-20 mt-32 h-screen w-full bg-white flex gap-4">
      <section className="w-1/2 flex bg-blue-300 gap-5 h-4/5 justify-center items-center">
      <div className="w-max flex flex-col gap-5 h-max bg-green-200">
        <div className="flex gap-5 items-center">
          <span className="w-5 h-[.3rem] bg-[#adadad]"></span>
          <h4 className="text-xl text-[#adadad]">About Us</h4>
        </div>
        <div className="w-4/5">
          <h1 className="text-5xl font-semibold">
            Where Ideas Turn Into Conversations
          </h1>
        </div>
        <div className="w-3/4 text-justify">
          <p className="text-xl font-medium">
            We believe collaboration starts with sharing. Through community-led
            posts and meaningful discussions, every idea can spark new
            opportunities and inspire actions that go beyond the screen.
          </p>
        </div>
      </div>
      </section>

      <section className="w-1/2 flex gap-5 h-4/5 justify-center ">
        <article className=" flex flex-col gap-5 justify-end h-full">
          <div className="bg-blue-300 h-60 w-60">a</div>
          <div className="bg-blue-300 h-60 w-60">a</div>
        </article>
        <article className=" flex flex-col gap-5 justify-start h-full">
          <div className="bg-blue-300 h-60 w-60">a</div>
          <div className="bg-blue-300 h-60 w-60">a</div>
        </article>
      </section>
    </main>
  );
}

export default canDo;
