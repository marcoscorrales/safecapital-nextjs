import React from 'react'
import {BsGraphUp} from "react-icons/bs";
const Hero = () => {
  return (
    <section id='home' className='flex md:flex-row flex-col sm:py-16 py-6'>
        <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>

        <div className='flex flex-row items-center py-[6px] px-4 bg-[#121416] rounded-[10px] mb-2'>
            <BsGraphUp className='text-[#00FDA8]' size={20}/>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2'>
            <span className='text-white'>Pon tu dinero a trabajar con</span>{' '}
            <span className='text-[#00FDA8]'>Safe</span>
            <span className='text-[#01A78A]'>Capital</span>
            </p>
        </div>

        </div>
    </section>
  )
}

export default Hero