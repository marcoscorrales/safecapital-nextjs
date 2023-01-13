import Image from 'next/image';
import React from 'react'
import {MdChevronRight} from 'react-icons/md'; 
import Uniliver from "../public/images/dashboard_images/uniliver.png";
import Tesla from "../public/images/dashboard_images/tesla.png";
import Mcdonalds from "../public/images/dashboard_images/mcdonalds.png";
import Monster from "../public/images/dashboard_images/monster.png";

const Investments = () => {
  return (
    <div className='bg-white rounded-[1.6rem] h-fit'>
        <div className='flex justify-between items-center p-[1.6rem] pb-0'>
            <h2 className='text-2xl'>Investments</h2>
            <a className='flex items-center text-[#00FDA8]' href='#'>More <MdChevronRight size={25}/></a>
        </div>

        <div className='flex items-center justify-between p-[1.6rem] border-solid border-b-[1px] border-gray-500 hover:bg-gray-200 hover:cursor-pointer'>
            <Image className='w-[2.4rem]' src={Uniliver} alt="uniliver"/>
            <h4>Uniliver</h4>
            <div>
                <p>7 Nov, 2022</p>
                <p className='text-gray-500'>9:14pm</p>
            </div>
            <div>
                <p>1402</p>
                <p className='text-gray-500'>Bonos</p>
            </div>
            <div>
                <p>$20,033</p>
                <p className='text-red-500'>-4.27%</p>
            </div>
        </div>
        {/* Inversion1 */}
        <div className='flex items-center justify-between p-[1.6rem] border-solid border-b-[1px] border-gray-500 hover:bg-gray-200 hover:cursor-pointer'>
            <Image className='w-[2.4rem]' src={Tesla} alt="tesla"/>
            <h4>Tesla</h4>
            <div>
                <p>3 Dic, 2022</p>
                <p className='text-gray-500'>12:01pm</p>
            </div>
            <div>
                <p>2003</p>
                <p className='text-gray-500'>Bonos</p>
            </div>
            <div>
                <p>70,98€</p>
                <p className='text-greem-500'>+2.90%</p>
            </div>
        </div>
        {/* Inversion2 */}
        <div className='flex items-center justify-between p-[1.6rem] border-solid border-b-[1px] border-gray-500 hover:bg-gray-200 hover:cursor-pointer'>
            <Image className='w-[2.4rem]' src={Monster} alt="monster"/>
            <h4>Monster</h4>
            <div>
                <p>9 Dic, 2022</p>
                <p className='text-gray-500'>8:52pm</p>
            </div>
            <div>
                <p>112</p>
                <p className='text-gray-500'>Bonos</p>
            </div>
            <div>
                <p>78,19€</p>
                <p className='text-green-500'>+3.41%</p>
            </div>
        </div>
        {/* Inversion3 */}
        <div className='flex items-center justify-between p-[1.6rem] rounded-b-[1.6rem] hover:bg-gray-200 hover:cursor-pointer'>
            <Image className='w-[2.4rem]' src={Mcdonalds} alt="mcdonalds"/>
            <h4>Mcdonalds</h4>
            <div>
                <p>27 Dic, 2022</p>
                <p className='text-gray-500'>11:11pm</p>
            </div>
            <div>
                <p>943</p>
                <p className='text-gray-500'>Bonos</p>
            </div>
            <div>
                <p>150,55€</p>
                <p className='text-red-500'>-1.23%</p>
            </div>
        </div>
        {/* Inversion4 */}
    </div>
  )
}

export default Investments