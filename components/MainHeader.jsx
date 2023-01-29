import Link from 'next/link'
import React, { useState } from 'react'
import Logo from "../public/images/logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import Image from 'next/image';

const MainHeader = () => {
    const [toggle, setToggle] = useState(false);

  return (
        <nav className="w-full flex py-6 justify-between items-center overflow-hidden">
          <Link href="/" className="flex items-center font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]">
            <Image
              className="my-0 ml-10 w-20 cursor-pointer"
              src={Logo}
              alt="/"
            ></Image>
             <span className='text-[#00FDA8] ml-4'>Safe</span>
             <span className='text-[#01A78A]'>Capital</span>
          </Link>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-[16px]">
            <li className="text-white mr-10">
              <Link href="/">Inicio</Link>
            </li>
            <li className="text-white mr-10">
              <Link href="/">Anuncios</Link>
            </li>
            <li className="text-white mr-10">
              <Link href="/productos">Productos</Link>
            </li>
            <li className="text-white mr-10">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <button onClick={() => setToggle((prev) => !prev)}>
              {toggle ? (
                <MdClose size={23} className="text-white w-[28px] h-[28px]" />
              ) : (
                <MdMenu size={23} className="text-white w-[28px] h-[28px]" />
              )}
            </button>
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-[#080C10] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-gradient-to-tr from-[#00FDA8] to-[#080C10] z-10`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1 text-[16px]">
                <li className="text-white mb-4">
                  <Link href="/">Inicio</Link>
                </li>
                <li className="text-white mb-4">
                  <Link href="/">Anuncios</Link>
                </li>
                <li className="text-white mb-4">
                  <Link href="/productos">Productos</Link>
                </li>
                <li className="text-white mb-4">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}

export default MainHeader