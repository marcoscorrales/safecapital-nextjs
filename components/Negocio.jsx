import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { BsShieldFillCheck, BsStarFill } from 'react-icons/bs'
import Boton from './Boton'

const Negocio = () => {
  return (
    <section className='flex md:flex-row flex-col sm:py-16 py-6'>
        <div className='flex-1 flex justify-center flex-col items-center xs:items-start'>
            <h2 className='font-poppins font-semibold xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Invierta inteligentemente con <br className='sm:block hidden'/> nuestros fondos de inversión</h2>
            <p className='font-poppins font-normal text-[18px] leading-[30.8px] text-gray-300 max-w-[470px] mt-5'>Invierta inteligentemente con nuestros fondos indexados. Obtenga exposición a los mercados globales con nuestra estrategia de inversión sólida y diversificada.</p>
            <Boton styles="mt-10" text={"Empezar"}/>
        </div>
        <div className='flex-1 flex flex-col justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
            <div className='flex flex-row p-6 rounded-[20px] mb-6 hover:bg-gradient-to-l from-[#00fda93f]'>
                <div className='w-[64px] h-[64px] rounded-full flex justify-center bg-[#121416] items-center'>
                    <BsStarFill size={30} className="text-[#00FDA8]"/>
                </div>
                <div className='flex-1 flex flex-col ml-3'>
                    <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>Productos estrella</h4>
                    <p className='font-poppins font-normal text-gray-300 text-[16px] leading-[24px] mb-1'>Con una variedad de más de 1700 fondos de inversión activa e indexada, nuestra plataforma le ofrece una amplia gama de opciones de inversión.</p>
                </div>
            </div>
            <div className='flex flex-row p-6 rounded-[20px] mb-6 hover:bg-gradient-to-l from-[#00fda93f]'>
                <div className='w-[64px] h-[64px] rounded-full flex justify-center bg-[#121416] items-center'>
                    <BsShieldFillCheck size={30} className="text-[#00FDA8]"/>
                </div>
                <div className='flex-1 flex flex-col ml-3'>
                    <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>Invierta Seguro</h4>
                    <p className='font-poppins font-normal text-gray-300 text-[16px] leading-[24px] mb-1'>Su seguridad es nuestra prioridad, invierta con tranquilidad en nuestros fondos indexados. Nuestra plataforma de inversión indexada ofrece seguridad y privacidad para sus inversiones.</p>
                </div>
            </div>
            <div className='flex flex-row p-6 rounded-[20px] mb-6 hover:bg-gradient-to-l from-[#00fda93f]'>
                <div className='w-[64px] h-[64px] rounded-full flex justify-center bg-[#121416] items-center'>
                    <BiSupport size={30} className="text-[#00FDA8]"/>
                </div>
                <div className='flex-1 flex flex-col ml-3'>
                    <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>Soporte </h4>
                    <p className='font-poppins font-normal text-gray-300 text-[16px] leading-[24px] mb-1'>Obtenga asistencia personalizada en cada paso del camino con nuestro servicio de soporte para inversores. Nuestro equipo de soporte está disponible las 24 horas para ayudarlo a alcanzar sus metas financieras.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Negocio