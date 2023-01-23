import React from 'react'
import {BsGraphUp} from "react-icons/bs";
import Empezar from './Empezar';
import img from '../public/images/investing_img.png'
import Image from 'next/image';
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

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]leading-[75px]'>
            Tu Futuro <br className='sm:block hidden'/> {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#01A78A] to-[#00FDA8]'>
            Financiero
            </span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <Empezar/>
          </div>
        </div>
          <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px]leading-[75px] w-full'>
          Comienza Aquí.
          </h1>
          <p className='font-poppins font-normal text-gray-300 text-[18px] leading-[30.8px] max-w-[470px] mt-5'>Fondos indexados de Vanguard, iShares, Fidelity, Amundi y NN, las más prestigiosas firmas de gestión pasiva, sin mínimo de inversión. Arrasan replicando el mercado con comisiones mínimas.</p>
        </div>

        <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
          <Image src={img} alt='invest' className='w-[100%] h-[100%] relative z-[5]'/>

          <div className='absolute z-[0] w-[40%] h-[35%] top-0 white__gradient'>
          </div>
          <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 green__gradient'>
          </div>
        </div>

        <div className='ss:hidden flex justify-center items-center'>
          <Empezar/>
        </div>
    </section>
  )
}

export default Hero