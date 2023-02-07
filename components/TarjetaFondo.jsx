import Link from 'next/link'
import React from 'react'
import Boton from './Boton'

const TarjetaFondo = ({nombre, ytd, oneyear, threeyear, fiveyear, textoBoton, linkBoton }) => {
  return (
    <div className='flex items-center justify-center p-1 bg-gradient-to-r from-[#00FDA8] to-[#01A78A]  rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-8 xs:min-w-[375px] w-full max-w-[375px]'>
          <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] bg-[#121416] hover:bg-gradient-to-r from-[#01a78b37] to-[#00fda92d] w-full h-full'>
            <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{nombre}</p>
            <div className="w-full pt-6 border-t-2 border-solid border-t-slate-300"/>
            <div className='flex flex-row justify-around'>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>YTD</p>
                <p className='font-poppins font-bold text-white text-[15px] xs:text-[18px] leading-[30.8px]'>{ytd}</p>
              </div>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>1 año</p>
                <p className='font-poppins font-bold text-white text-[15px] xs:text-[18px] leading-[30.8px]'>{oneyear}</p>
              </div>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>3 años</p>
                <p className='font-poppins font-bold text-white text-[15px] xs:text-[18px] leading-[30.8px]'>{threeyear}</p>
              </div>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>5 años</p>
                <p className='font-poppins font-bold text-white text-[15px] xs:text-[18px] leading-[30.8px]'>{fiveyear}</p>
              </div>
            </div>
            <Link href={`/${linkBoton}`} className="w-full">
              <Boton styles="mt-10 w-full" text={textoBoton}/>
            </Link>
          </div>
        </div>
  )
}

export default TarjetaFondo