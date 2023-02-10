import React from 'react'
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import {DataProductos} from "../data/data.js";

const FichaProducto = ({productId}) => {
    console.log(productId)
  return (
    <div className="bg-[#080C10] w-full">
      <header>
        <MainHeader />
      </header>
      <main className="flex flex-col xl:max-w-[1280px]">
      <h1 className="font-poppins font-semibold text-center xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] my-10 w-full">
      {productId}
        </h1>
        <div className="flex flex-wrap sm:justify-around justify-center w-full relative z-[1]">
         {DataProductos.map((producto) => (
          <p key={producto.id}>{producto.nombre}</p>
         ))
         }
      </div>
      </main>
      <footer>
        <MainFooter/>
      </footer>
    </div>
  )
}

export default FichaProducto