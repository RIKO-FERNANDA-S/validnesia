"use client"
import {useEffect, useRef } from "react";
import Image from "next/image";

import About from "./about"
import Discussion from "./discussion"
import Feature from "./feature";

import {motion} from "framer-motion"
import VanilaTilt from "vanilla-tilt"
import Link from "next/link";
import imgWeb1 from "../../../../public/img/imgHome/Discussion.png"
import imgWeb2 from "../../../../public/img/imgHome/Notification.png"
import imgWeb3 from "../../../../public/img/imgHome/Profile.png"

function Hero() {
  const tiltRef1 = useRef<HTMLDivElement>(null)
  const tiltRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tiltRef1.current){
      VanilaTilt.init( tiltRef1.current, {
        max:25,
        speed:200,
        glare: true,
        startY: 3,
        startX: -20,
        "max-glare": 0.5
      })
    }
    if (tiltRef2.current){
      VanilaTilt.init( tiltRef2.current, {
        max:25,
        speed:200,
        glare: true,
        startY: 3,
        startX: 20,
        "max-glare": 0.5
      })
    }
  }, [])


  return (
    <div className="">
      <section className="h-max flex">
        <div 
        className="flex flex-col items-center justify-start text-center pt-32 pb-10 h-max w-full bg-[url('/bgHome.png')] bg-cover m-3 shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded-lg"> 
        <div className="w-2/5 flex flex-col items-center gap-2">
          <p>Community & Collaboration</p>
          <h1 className="text-[2.5rem] font-semibold leading-snug tracking-[1px]">Your Space to Share, Learn, and Collaborate.</h1>
          <h3 className="text-sm tracking-[.5px] w-4/5">A platform built for students and communities to share knowledge, manage projects, and grow together.</h3>
          <Link href="/" className="flex py-2 px-7 items-center border rounded-xl shadow-md bg-btnNavbar text-white bg-[#0065B7]">Let's Try</Link>
        </div>

        {/* Box Main */}
        <div className="flex justify-center items-center w-[33rem] h-auto py-5 rounded-[1.8rem] bg-[#a0e8f51e] mt-10">
          <div  className="w-[30rem] h-auto py-5 flex justify-center items-center rounded-[1.8rem] bg-[#a0e8f53a]">
            <Image src={imgWeb1} alt="image website" className="w-[90%] rounded-xl " />
          </div>
        </div>
        {/* Box Main */}

        {/* Box Second & Thirty */}
        <div className="flex absolute z-10">
          <div className="w-[80rem] h-96 flex justify-between items-end">
            <div ref={tiltRef1} className="w-80 h-auto  mb-28 ml-6 ">
              <Image src={imgWeb2} alt=""/>
            </div>
            <div ref={tiltRef2} className="w-80 h-auto mb-20 mr-6 ">
              <Image src={imgWeb3} alt="" />
            </div>
          </div>
        </div>
        {/* Box Second & Thirty */}
        </div>
      </section>

        <About/>
        <Discussion/>
        <Feature/>

    </div>
  );
}

export default Hero;
