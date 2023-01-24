import Image from 'next/image'
import React from 'react'

const Facturacion = () => {
  return (
    <section className='flex md:flex-row flex-col-reverse sm:py-16 py-6'>
        <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
            <img className='w-[100%] h-[100%] relative z-[5]' src="/images/bill.png" alt='bill'/>
            
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient '></div>
            <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full green__gradient '></div>
        </div>

        <div className='flex-1 flex justify-center items-start flex-col'>
            <h2 className='font-poppins font-semibold xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
            Sin complicaciones, <br className='sm:block hidden'/> nuestra facturación es fácil y sencilla
            </h2>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5 text-gray-300'>
            Invierta con facilidad gracias a nuestra sencilla facturación. Sin complicaciones, podrá hacer seguimiento a su inversión de forma clara y sencilla.
            </p>
        </div>
    </section>
  )
}

export default Facturacion