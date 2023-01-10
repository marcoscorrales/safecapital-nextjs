import React from 'react'
import {MdClose, MdDashboard, MdAnalytics, MdMessage, MdHelpCenter, MdSettings} from 'react-icons/md';
import {RiExchangeDollarLine} from 'react-icons/ri';
import {FaWallet} from 'react-icons/fa';
import {AiFillCreditCard} from 'react-icons/ai';
const Sidebar = () => {
  return (
    <aside className='flex flex-col justify-between w-[16rem] h-[88vh]'>
        {/* Para mobiles y tablets */}
        <button id='close-btn' className='hidden'>
            <MdClose size={25}/>
        </button>

        <div className='flex flex-col gap-7 mt-10'> 
            {/* Boton activo */}
            <a className='flex items-center gap-[1.2rem] h-[4.2rem] relative bg-white text-[#00FDA8] border-solid border-l-8 border-[#00FDA8]' href='#'>
                <MdDashboard className='text-[1.7rem] ml-12' size={25}/>
                <h4>Dashboard</h4>
            </a>
            <a className='flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]' href='#'>
                <RiExchangeDollarLine className='text-[1.7rem] ml-12' size={25}/>
                <h4>Divisas</h4>
            </a>
            <a className='flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]' href='#'>
                <FaWallet className='text-[1.7rem] ml-12' size={25}/>
                <h4>Cartera</h4>
            </a>
            <a className='flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]' href='#'>
                <AiFillCreditCard className='text-[1.7rem] ml-12' size={25}/>
                <h4>Transacciones</h4>
            </a>
            <a className='flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]' href='#'>
                <MdAnalytics className='text-[1.7rem] ml-12' size={25}/>
                <h4>Analíticas</h4>
            </a>
            <a className='flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]' href='#'>
                <MdMessage className='text-[1.7rem] ml-12' size={25}/>
                <h4>Mensajes</h4>
            </a>
            <a className='flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]' href='#'>
                <MdHelpCenter className='text-[1.7rem] ml-12' size={25}/>
                <h4>Ayuda</h4>
            </a>
            <a className='flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]' href='#'>
                <MdSettings className='text-[1.7rem] ml-12' size={25}/>
                <h4>Opciones</h4>
            </a>
        </div>
    </aside>
  )
}

export default Sidebar