import Image from 'next/image'
import React from 'react'
import Logo from '../public/images/logo2.webp'

const Layout = () => {
  return (
    <div className='bg-gradient-to-r from-[#232D0E] to-[#464D41]'>
      <header>
        <h1 className='text-[#C1EF00] text-center text-4xl font-bold'>Safe Capital</h1>
        <h3 className='text-[#C1EF00] text-center text-3xl'>Maximiza tus ganancias y minimiza tus riesgos con nuestros servicios de gestión de fondos</h3>
      
      </header>
      <main>

      <Image className="my-0 mx-auto w-96" src={Logo}></Image>

      </main>
      <footer></footer>
        
    </div>
  )
}

export default Layout