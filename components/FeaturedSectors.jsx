import React from 'react'
import {MdAdd} from 'react-icons/md';
const FeaturedSectors = () => {
  return (
    <div className='mt-8 flex self-center gap-8 max-[600px]:flex-col max-[600px]:items-start max-[600px]:mt-12 max-[600px]:gap-4'>
        <h2 className='text-2xl'>Sectores Destacados</h2>
        <div className='flex gap-4 self-center flex-wrap max-w-full'>
            <div className='py-[0.6rem] px-[1.6rem] bg-white rounded-md flex items-center gap-4 hover:shadow-lg shadow-gray-500/50 ease-in duration-300'>
                <MdAdd size={23} className='flex self-center justify-center h-fit'/>
            </div>
            <div className='py-[0.6rem] px-[1.6rem] bg-white rounded-md flex items-center gap-4 hover:shadow-lg shadow-gray-500/50 ease-in duration-300'>
                <span className='bg-green-700 w-2 h-2 rounded-[50%]'></span>
                <div className='flex gap-8 self-center'>
                    <h5>Energia</h5>
                    <h4 className='text-green-500'>+5.3%</h4>
                </div>
            </div>
            <div className='py-[0.6rem] px-[1.6rem] bg-white rounded-md flex items-center gap-4 hover:shadow-lg shadow-gray-500/50 ease-in duration-300'>
                <span className='bg-blue-700 w-2 h-2 rounded-[50%]'></span>
                <div className='flex gap-8 self-center'>
                    <h5>Tecnología</h5>
                    <h4 className='text-green-500'>+3.5%</h4>
                </div>
            </div>
            <div className='py-[0.6rem] px-[1.6rem] bg-white rounded-md flex items-center gap-4 hover:shadow-lg shadow-gray-500/50 ease-in duration-300'>
                <span className='bg-orange-700 w-2 h-2 rounded-[50%]'></span>
                <div className='flex gap-8 self-center'>
                    <h5>Salud</h5>
                    <h4 className='text-green-500'>+1.2%</h4>
                </div>
            </div>
            <div className='py-[0.6rem] px-[1.6rem] bg-white rounded-md flex items-center gap-4 hover:shadow-lg shadow-gray-500/50 ease-in duration-300'>
                <span className='bg-gray-700 w-2 h-2 rounded-[50%]'></span>
                <div className='flex gap-8 self-center'>
                    <h5>Consumo</h5>
                    <h4 className='text-red-500'>-2.6%</h4>
                </div>
            </div>
            <div className='py-[0.6rem] px-[1.6rem] bg-white rounded-md flex items-center gap-4 hover:shadow-lg shadow-gray-500/50 ease-in duration-300'>
                <span className='bg-yellow-700 w-2 h-2 rounded-[50%]'></span>
                <div className='flex gap-8 self-center'>
                    <h5>Financiero</h5>
                    <h4 className='text-green-500'>+1.8%</h4>
                </div>
            </div>
            <div className='py-[0.6rem] px-[1.6rem] bg-white rounded-md flex items-center gap-4 hover:shadow-lg shadow-gray-500/50 ease-in duration-300'>
                <span className='bg-sky-700 w-2 h-2 rounded-[50%]'></span>
                <div className='flex gap-8 self-center'>
                    <h5>Telecomunicación</h5>
                    <h4 className='text-red-500'>-3.0%</h4>
                </div>
            </div>
            <div className='py-[0.6rem] px-[1.6rem] bg-white rounded-md flex items-center gap-4 hover:shadow-lg shadow-gray-500/50 ease-in duration-300'>
                <span className='bg-purple-700 w-2 h-2 rounded-[50%]'></span>
                <div className='flex gap-8 self-center'>
                    <h5>Industrial</h5>
                    <h4 className='text-green-500'>+2.4%</h4>
                </div>
            </div>
            <div className='py-[0.6rem] px-[1.6rem] bg-white rounded-md flex items-center gap-4 hover:shadow-lg shadow-gray-500/50 ease-in duration-300'>
                <span className='bg-pink-700 w-2 h-2 rounded-[50%]'></span>
                <div className='flex gap-8 self-center'>
                    <h5>Inmobiliario</h5>
                    <h4 className='text-green-500'>+0.7%</h4>
                </div>
            </div>
            <div className='py-[0.6rem] px-[1.6rem] bg-white rounded-md flex items-center gap-4 hover:shadow-lg shadow-gray-500/50 ease-in duration-300'>
                <span className='bg-amber-700 w-2 h-2 rounded-[50%]'></span>
                <div className='flex gap-8 self-center'>
                    <h5>Materiales</h5>
                    <h4 className='text-red-500'>-1.8%</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedSectors