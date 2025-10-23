"use client"
import Link from 'next/link'
import React from 'react'

function btnSignUp() {
  return (
    <main className="flex py-2 px-5 bg-[#0065B7] justify-center items-center rounded-xl shadow-button ">
      <Link href="/404">
    <h1 className="mr-2 text-white ">Sign Up</h1>
      </Link>
  </main>
  )
}

export default btnSignUp