'use client'
import Link from "next/link"

export default function BtnLoginNav() {
  return (
    <Link href="/login" className=" py-2 px-5 flex items-center text-btnNavbar">
    Login
    </Link>
  )
}