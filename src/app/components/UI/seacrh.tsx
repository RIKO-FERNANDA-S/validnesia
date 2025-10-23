"use client"
import React from 'react'
import Image from "next/image";
import Profile from "../../../../public/img/WIN_20231025_14_16_20_Pro.jpg";
import {motion} from "framer-motion"

function seacrh() {
  return (
    <div className='w-full flex justify-center items-center'> <div className="w-11/12 flex justify-between items-center pt-3 pb-1">
    <motion.div
      initial={{
        y:-100
      }}
      animate={{
        y:0
      }}
      transition={{
        duration: 0.7
      }}
    className="w-max  rounded-full flex items-center gap-5 ">
      <Image
        src={Profile}
        alt="profile"
        className="w-[4rem] rounded-full shadow-profil"
      />
      <div className="text-start">
        <h1 className="font-[jacquesFrancois] text-base font-semibold">
          Welcome
        </h1>
        <h1 className="font-semibold text-lg">Riko Fernanda Saputra</h1>
      </div>
    </motion.div>

    <motion.div
   initial={{
    y:-100
  }}
  animate={{
    y:0
  }}
  transition={{
    duration: 0.8
  }}
    className="rounded-full flex items-center w-max border-2 border-black bg-white">
      <i className="bx bx-search text-black pr-4 pl-2 text-2xl py-1"></i>
      <input
        type="text"
        placeholder="Search....."
        className="w-[28rem] focus:outline-none bg-transparent"
      ></input>
      <a href="" className=' bg-btnNavbar rounded-r-full'>
        <i className="bx bx-right-arrow-alt text-2xl py-1 px-3 "></i>
      </a>
    </motion.div>

    <motion.div
       initial={{
        y:-100
      }}
      animate={{
        y:0
      }}
      transition={{
        duration: 1
      }}
    className="flex gap-5 items-center">
      <div className="gap-7 items-center flex pt-2 font-normal">
        <div className="flex flex-col items-center">
          <a href="/404">
            <i className="bx bx-message-square-dots text-[1.7rem]"></i>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/404">
            <i className="bx bx-cart-alt text-[1.7rem]"></i>
          </a>
        </div>
        <div className="flex flex-col items-center mr-7">
          <a href="/404">
            <i className="bx bx-bell text-[1.7rem]"></i>
          </a>
        </div>
      </div>
    </motion.div>
  </div></div>
  )
}

export default seacrh