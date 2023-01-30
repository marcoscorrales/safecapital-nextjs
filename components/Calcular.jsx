import Link from 'next/link'
import React from 'react'
import Boton from './Boton'
import TarjetaFondo from './TarjetaFondo'

const Calcular = () => {
  return (
    <section className='sm:py-16 py-6 flex justify-center items-center flex-col relative'>
      <div className='absolute z-[0] w-[60%] h-[60%] right-[50%] rounded-full green__gradient'/>
      <div className='w-full flex justify-between items-center md-flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className='font-poppins font-semibold xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Calcula tu rentabilidad <br className='sm:block hidden'/> fácilmente</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className='font-poppins font-normal text-gray-300 text-[18px] leading-[30.8px] text-left max-w-[450px]'>Obtén una visión precisa de tu rendimiento en fondos indexados con nuestro simulador de inversiones.</p>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-around justify-center w-full relative z-[1]'>
        <TarjetaFondo nombre="Vanguard U.S. 500 Stock Index Fund" ytd="4,04 %" oneyear="-1,90 %" threeyear="8,92 %" fiveyear="11,34 %" textoBoton={"Calcular Rentabilidad"}/>
        <TarjetaFondo nombre="Vanguard Emerging Markets Stock Index Fund" ytd="8,28 %" oneyear="-7,26 %" threeyear="0,57 %" fiveyear="1,06 %" textoBoton={"Calcular Rentabilidad"}/>
        <TarjetaFondo nombre="Nasdaq-100 Index Fund" ytd="7,40 %" oneyear="-19,90 %" threeyear="5,70 %" fiveyear="8,37 %" textoBoton={"Calcular Rentabilidad"}/>
      </div>
      <Link href="/productos">
        <Boton styles="mt-10" text="Ver más"/>
      </Link>
      
    </section>
  )
}

export default Calcular