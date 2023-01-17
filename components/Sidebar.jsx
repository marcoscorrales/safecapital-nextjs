import React, { useContext } from 'react'
import {MdClose, MdDashboard, MdAnalytics, MdMessage, MdHelpCenter, MdSettings} from 'react-icons/md';
import {RiExchangeDollarLine} from 'react-icons/ri';
import {FaWallet} from 'react-icons/fa';
import {AiFillCreditCard} from 'react-icons/ai';
import { SideBarContext } from '../context/SideBarContext';

const Sidebar = () => {
    //Context para ocultar o mostrar el sidebar
    const {sideBarState, toggleSideBar} = useContext(SideBarContext)
    const handleClick = () => {
        toggleSideBar();
    }
  return (
    <aside className={sideBarState ? `flex flex-col justify-between w-[16rem] h-[88vh] max-[1024px]:w-[24rem] max-[1024px]:h-[100vh]` : `hidden`}>
        {/* Para mobiles y tablets */}
        <button id='close-btn' onClick={handleClick} className='hidden cursor-pointe'>
            <MdClose className='text-white' size={25}/>
        </button>

        <div className='flex flex-col gap-7 mt-10 max-[1024px]:mt-16'> 
            {/* Boton activo */}
            <a className='flex items-center gap-[1.2rem] h-[4.2rem] relative bg-[#242426] text-[#00FDA8] border-solid border-l-8 border-[#00FDA8]' href='#'>
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