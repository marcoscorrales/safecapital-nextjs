import React from 'react'
import Boton from './Boton'

const Calcular = () => {
  return (
    <section className='sm:py-16 py-6 flex justify-center items-center flex-col relative'>
      <div/>

      <div className='w-full flex justify-between items-center md-flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className='font-poppins font-semibold xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Calcula tu rentabilidad <br className='sm:block hidden'/> fácilmente</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className='font-poppins font-normal text-gray-300 text-[18px] leading-[30.8px] text-left max-w-[450px]'>Obtén una visión precisa de tu rendimiento en fondos indexados con nuestro simulador de inversiones.</p>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full relative z-[1]'>
        <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-transparent hover:bg-gradient-to-r from-[#01a78b37] to-[#00fda92d]'>
          <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>Vanguard U.S. 500 Stock Index Fund EUR Acc</p>
          <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-2 border-solid border-t-slate-300"/>
          <Boton styles="mt-10" text={"Calcular"}/>
        </div>
      </div>
    </section>
  )
}

export default Calcular