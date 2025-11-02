'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

function footer() {
  return (
    <main className='bg-black text-white'>
      <article className='flex py-10 justify-center px-24 border-b-2 '>
        <div className='flex flex-col w-1/2 pr-20'>
          <h1 className='text-4xl font-batharia'>Validnesia</h1>
          <p className='my-11 text-base font-normal text-textFooter'>Jl. Wijaya Kusuma No.9 - 11, Bebek, Berbek, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256</p>
          <p className='text-base font-normal text-textFooter'>Email: bathariagung@bussiness.com</p>
        </div>
        <div className='flex text-textFooter gap-28'>
          <div className='flex flex-col gap-7'>
            <h1 className='text-lg font-bold text-white'>Company</h1>
            <Link href='/404'><p>About Us</p></Link> 
            <Link href="/privacyAndPolicy"><p >Privacy Policy</p> </Link>
            <Link href='/404'><p>Collaboration</p></Link>
          </div>
          <div className='flex flex-col gap-7'>
            <h1 className='text-lg font-bold text-white'>Help</h1>
            <Link href='/404'><p>Customer Service</p></Link>
            <Link href="/404"><p>FAQ</p></Link>
            <Link href="/404"><p>Email Us</p></Link>
          </div>
          <div className='flex flex-col gap-7'>
            <h1 className='text-lg font-bold text-white'>Blog</h1>
            <Link href="/404"><p>Article</p></Link>
            <Link href="/404"><p>BathariaEdu</p></Link>
            <Link href="/404"><p>Join Us</p></Link> 
          </div>
        </div>
      </article>

      <article className='flex justify-between px-20 py-4 items-center'>
        <div className='w-1/2 border-borderAAA border-r-2 p-4'>
          <h1>PT.  Prakarsa Bathari Agung - THIS WEB FOR EDUCATION  </h1>
        </div>
       
      </article>
    </main>
  )
}

export default footer