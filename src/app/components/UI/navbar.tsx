"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BtnLogin from "./btnLogin"
import BtnSignUp from "./btnSignUp";
import {motion} from "framer-motion"



function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 fixed z-20">
      <motion.nav
         initial={{
          y:-200
        }}
        animate={{
          y:0
        }}
        transition={{
          duration: 0.6
        }}
      
      className={` w-full rounded-lg pt-10 h-20 flex items-center justify-between px-10 ${scrolled ? 'backdrop-blur-sm' : 'backdrop-blur-none'}`}>
        <div className={`pl-4 pr-2  flex items-center `}>
          <Link href="/">
          
          <h1 className="font-batharia text-2xl font-medium mr-28">
            Validnesia
          </h1></Link>
        </div>
        <div className="flex gap-10 font-medium ">
          <Link href="#about">
            <h1 className={` py-3 px-4 text-black`}>About Us</h1>
          </Link>

          <Link href="/discussion">
            <h1 className={` py-3 px-4  ${pathname === "/about" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>Discussion</h1>
          </Link>

          <Link href="/event">
            <h1 className={` py-3 px-4  ${pathname === "/gallery" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>Event</h1>
          </Link>

          
        </div>
        <div className="flex gap-4 font-medium">
          <BtnLogin/>
          <BtnSignUp/>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
