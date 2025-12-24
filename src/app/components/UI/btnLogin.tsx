'use client'
import Link from "next/link"

export default function BtnLogin() {
  return (
    <Link href="/login">
    <button className=" py-2 px-5 flex items-center text-btnNavbar">
    Login
  </button>
    </Link>
  )
}