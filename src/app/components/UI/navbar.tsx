"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BtnLogin from "./btnLogin";
import BtnSignUp from "./btnSignUp";
import { motion } from "framer-motion";

function Navbar() {
  useEffect(() => {
    import("boxicons");
  }, []);

  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full flex flex-col items-center justify-center md:gap-3 fixed z-20">
      <motion.nav
        initial={{
          y: -200,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className={` w-full rounded-lg py-10 h-28 flex items-center justify-between px-10 ${
          scrolled ? "backdrop-blur-sm" : "backdrop-blur-none"
        }`}
      >
        <div className={`md:pl-4 md:pr-2 flex  `}>
          <Link href="/">
            <h1 className="font-batharia text-xl md:text-2xl font-medium mr-28">
              Validnesia
            </h1>
          </Link>
        </div>

        {/* Components Link Large */}
        <div className="lg:flex hidden gap-10 font-medium items-center">
          <Link href="/about">
            <h1 className={` py-3 px-4 text-black`}>About Us</h1>
          </Link>

          <Link href="/discussion">
            <h1
              className={` py-3 px-4  ${
                pathname === "/about"
                  ? "text-white bg-black rounded-md"
                  : "text-black bg-none"
              }`}
            >
              Discussion
            </h1>
          </Link>

          <Link href="/event">
            <h1
              className={` py-3 px-4  ${
                pathname === "/gallery"
                  ? "text-white bg-black rounded-md"
                  : "text-black bg-none"
              }`}
            >
              Feature
            </h1>
          </Link>
        </div>
        {/* Components Link Large */}

        {/* Components Button Large */}
        <div className="lg:flex hidden gap-4 font-medium">
          <BtnLogin />
          <BtnSignUp />
        </div>
        {/* Components Button Large */}

        {/* Components Burger Menu */}
        <button
          onClick={() => setIsOpen(!IsOpen)}
          className={` cursor-pointer max-lg:flex min-lg:hidden border-2 border-[#0065B7] rounded-lg`}
        >
          {!IsOpen ? <i className={` bx bx-menu bx-md text-[#0065B7]`}></i> : <i className='bx bx-x bx-md text-[#0065B7]'></i>}
          
        </button>
        {/* Components Burger Menu */}

        <div
          className={` absolute min-xl:hidden flex-col w-full justify-center items-center right-0 top-[5rem] h-max bg-[#0c79d3] text-white transition ${
            IsOpen ? "opacity-100" : "hidden"
          } `}
        >
          <Link
            href="/#about"
            className="py-4 w-full hover:bg-blue-400 flex items-center justify-center"
          >
            <h1 className={` `}>About Us</h1>
          </Link>

          <Link
            href="/discussion"
            className="py-4 w-full hover:bg-blue-400 flex items-center justify-center"
          >
            <h1 className={``}>Discussion</h1>
          </Link>

          <Link
            href="/event"
            className="py-4 w-full hover:bg-blue-400 flex items-center justify-center"
          >
            <h1 className={` `}>Feature</h1>
          </Link>
        </div>
      </motion.nav>
    </nav>
  );
}

export default Navbar;
