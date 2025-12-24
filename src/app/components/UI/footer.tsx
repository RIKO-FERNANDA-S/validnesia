"use client";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";

function footer() {
  
  useEffect(() => {
    import("boxicons");
  }, []);

  const date = new Date();
  const year = date.getFullYear();
  return (
    <main className="bg-[#004e8d] w-full text-white">
      <article className="flex flex-wrap py-10 justify-center px-16 border-b-2 ">
        <div className="flex flex-col w-1/2 lg:pr-20 gap-6 max-lg:w-full">
          <h1 className="text-4xl max-lg:text-center">Validnesia</h1>

          <p className="text-base font-normal text-textFooter max-lg:text-justify">
            Validnesia adalah platform media sosial digital yang berdedikasi
            menyajikan informasi yang terverifikasi dan valid langsung dari
            penjuru Indonesia. Kami berkomitmen melawan hoax dan misinformasi
            demi terciptanya ruang digital yang cerdas dan berwawasan. Kami
            percaya, kebenaran adalah hak setiap warga negara.
          </p>

          {/* Icons Social Media Start */}
          <div className="w-full flex gap-6 items-center justify-start max-lg:justify-center max-lg:mb-20 max-lg:mt-10">
            <div className=" flex gap-6">
              <Link
                href=""
                className="p-2 rounded-full border-2 border-white flex items-center"
              >
                <i className="bx bxl-instagram bx-sm"></i>
              </Link>
              <Link
                href=""
                className="p-2 rounded-full border-2 border-white flex items-center"
              >
                <i className="bx bxl-facebook bx-sm "></i>
              </Link>
              <Link
                href=""
                className="p-2 rounded-full border-2 border-white flex items-center"
              >
                <i className="bx bxl-youtube bx-sm "></i>
              </Link>
            </div>
          </div>
          {/* Icons Social Media End */}
        </div>

        <div className="flex text-textFooter gap-28 flex-wrap max-md:text-center max-md:w-full max-md:justify-center">

          {/* LINK LINK BAWAH 1 START */}
          <div className="flex flex-col gap-7">
            <h1 className="text-lg font-bold text-white">Company</h1>
            <Link href="/404">
              <p>About Us</p>
            </Link>
            <Link href="/privacyAndPolicy">
              <p>Privacy Policy</p>
            </Link>
            <Link href="/404">
              <p>Collaboration</p>
            </Link>
          </div>
          {/* LINK LINK BAWAH 1 END */}

          {/* LINK LINK BAWAH 2 START */}
          <div className="flex flex-col gap-7">
            <h1 className="text-lg font-bold text-white">Help</h1>
            <Link href="/404">
              <p>Customer Service</p>
            </Link>
            <Link href="/404">
              <p>FAQ</p>
            </Link>
            <Link href="/404">
              <p>Email Us</p>
            </Link>
          </div>
          {/* LINK LINK BAWAH 2 END */}

          {/* LINK LINK BAWAH 3 START */}
          <div className="flex flex-col gap-7">
            <h1 className="text-lg font-bold text-white">Blog</h1>
            <Link href="/404">
              <p>Article</p>
            </Link>
            <Link href="/404">
              <p>BathariaEdu</p>
            </Link>
            <Link href="/404">
              <p>Join Us</p>
            </Link>
          </div>
          {/* LINK LINK BAWAH 3 END */}
        </div>
      </article>

      <article className="flex justify-between px-16 py-4 items-center">
        <div className="w-full max-lg:p-3 p-4 flex flex-wrap  justify-around items-center max-lg:text-center gap-4">
          <p className="max-lg:text-sm">
            2025 - {year} © Validnesia &nbsp;
            <small>
              Some images by &nbsp;
              <a href="https://freepik.com" target="_blank">
                Freepik&nbsp;
              </a>
              | Designed icons using &nbsp;
              <a href="https://canva.com" target="_blank">
                Canva
              </a>
            </small>
          </p>
          <Link href="" className="max-lg:text-sm">Terms & Prifacy Policy</Link>
        </div>
      </article>
    </main>
  );
}

export default footer;
