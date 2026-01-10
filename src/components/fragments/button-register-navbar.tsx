"use client";
import Link from "next/link";
import React from "react";

function btnRegisterNav() {
  return (
    <main className="flex py-2 px-5 bg-[#0065B7] justify-center items-center rounded-xl hover:shadow-[0px_0px_5px_#0065B7] ">
      <Link href="/register">
        <h1 className="mr-2 text-white ">Register</h1>
      </Link>
    </main>
  );
}

export default btnRegisterNav;
