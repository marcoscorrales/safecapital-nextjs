import React from 'react'
import Image from "next/image";
import Profile from "../public/images/profile2.png";
import Logo from "../public/images/logo.png";
import {HiSearch} from 'react-icons/hi';
import {MdLightMode, MdDarkMode, MdExpandMore, MdMenu} from 'react-icons/md';

const Header = () => {
  return (
    <nav className='w-full bg-white py-4 px-0'>
        <div className='flex justify-between items-center relative w-11/12 mx my-0 ml-auto'>
            <Image className='w-20' src={Logo} alt="logo"/>
            <div className='bg-slate-300 py-2 px-6 w-[32vw] rounded-md flex items-center gap-4 text-[#1E1F21] absolute left-[15%]'>
                <HiSearch size={25}/>
                <input type='search' className='text-black bg-transparent w-full text-xl' placeholder='Buscar'/>
            </div>
            <div className='flex items-center justify-between gap-16'>
                <div className='flex bg-slate-300 w-20 h-8 rounded-md cursor-pointer'>
                    <MdLightMode className='w-[50%] h-full flex items-center justify-center text-[1.3rem] bg-[#1E1F21] rounded-md text-white' />
                    <MdDarkMode className='w-[50%] h-full flex items-center justify-center text-[1.3rem]'/>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='block w-12 h-12 rounded-[50%] overflow-hidden'>
                        <Image src={Profile} className='w-full' alt="profile"/>
                    </div>
                    <h5 className='text-xl font-medium'>Marcos</h5>
                    <MdExpandMore className='h-full flex items-center justify-center text-[2.3rem]'/>
                </div>
                <button id='menu-btn' className='hidden'>
                    <MdMenu className="text-black"/>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Header