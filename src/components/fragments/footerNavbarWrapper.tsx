"use client"

import React, { Children } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from './navbar'
import Footer from './footer'

const disabledRoutes = ['/register', '/login']

function FooterNavbarWrapper({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const isAuthPage = disabledRoutes.includes(pathname);

  return (
    <>
    {!isAuthPage && <Navbar />}
    {children}
    {!isAuthPage && <Footer />}
    </>
  )
}

export default FooterNavbarWrapper