import React from 'react'
import Boton from './Boton'

const Acciones = () => {
  return (
    <section className='flex md:flex-row flex-col sm:py-16 py-6'>
        <div className='flex-1 flex justify-center flex-col items-center xs:items-start'>
            <h2 className='font-poppins font-semibold xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
            Invierte en acciones de <br className='sm:block hidden'/>
            España, Europa y EEUU.
            </h2>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5 text-gray-300'>
            Obtenga acceso a los mercados más importantes del mundo con nuestra amplia gama en acciones de España, Europa y EEUU. Amplíe sus posibilidades de inversión
            </p>
            <Boton styles="mt-10" text={"Saber más"}/>
        </div>
        <div className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
            <img src='/images/stocks_logos.png' className='w-[100%] h-[100%]' alt="/"/>
        </div>
    </section>
  )
}

export default Acciones