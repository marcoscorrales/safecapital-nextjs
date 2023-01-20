import React, { useContext } from 'react'
import Image from "next/image";
import Profile from "../public/images/profile2.png";
import Logo from "../public/images/logo.png";
import {HiSearch} from 'react-icons/hi';
import {MdEuro, MdExpandMore, MdMenu} from 'react-icons/md';
import {BiDollar} from 'react-icons/bi';
import { SideBarContext } from '../context/SideBarContext';
import Link from 'next/link';

const Header = () => {
       //Context para ocultar o mostrar el sidebar
       const {toggleSideBar} = useContext(SideBarContext)
       const handleClick = () => {
           toggleSideBar();
       }
  return (
    <nav className='w-full bg-[#1F1F21] py-4 px-0'>
        <div className='flex justify-between items-center relative w-11/12 mx my-0 ml-auto'>
            <Link href ='/'><Image className='w-20 cursor-pointer' src={Logo} alt="logo"/></Link>
            <div className='bg-white py-2 px-6 w-[32vw] rounded-md flex items-center gap-4 text-[#1E1F21] absolute left-[15%]  max-[1024px]:hidden'>
                <HiSearch size={25} className='text-[#0D6E60]'/>
                <input type='search' className='text-black bg-transparent w-full text-xl' placeholder='Buscar'/>
            </div>
            <div className='flex items-center justify-between gap-16 max-[600px]:gap-[2.6rem]'>
                <div className='flex bg-white w-20 h-8 rounded-md cursor-pointer'>
                    <MdEuro className='w-[50%] h-full flex items-center justify-center text-[1.3rem] bg-[#1E1F21] rounded-md text-white' />
                    <BiDollar className='w-[50%] h-full flex items-center justify-center text-[1.3rem]'/>
                </div>
                <div className='flex gap-4 items-center max-[1024px]:gap-8'>
                    <div className='block w-12 h-12 rounded-[50%] overflow-hidden'>
                        <Image src={Profile} className='w-full' alt="profile"/>
                    </div>
                    <h5 className='text-xl font-medium text-white '>Marcos</h5>
                    <MdExpandMore className='h-full flex items-center justify-center text-[2.3rem] cursor-pointer max-[1024px]:hidden text-white '/>
                </div>
                <button id='menu-btn' className='hidden max-[1024px]:inline  max-[1024px]:bg-transparent'>
                    <MdMenu onClick={handleClick} size={23}className="text-white"/>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Header