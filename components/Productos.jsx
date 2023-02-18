import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import TarjetaFondo from "./TarjetaFondo";

const Productos = ({dataproductos}) => {
  console.log(dataproductos)
  return (
    <div className="bg-[#080C10] w-full">
      <header>
        <MainHeader />
      </header>
      <main className="flex flex-col xl:max-w-[1280px]">
      <h1 className="font-poppins font-semibold text-center xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] my-10 w-full">
          Fondos indexados
        </h1>
        <div className="flex flex-wrap sm:justify-around justify-center w-full relative z-[1]">
         {dataproductos.map((producto) => (
          <TarjetaFondo
          key={producto.ISIN}
          nombre={producto.nombre}
          ytd={producto.ytd}
          oneyear={producto.oneyear}
          threeyear={producto.threeyear}
          fiveyear={producto.fiveyear}
          textoBoton={"Ver ficha"}
          linkBoton={`producto/${producto.ISIN}`}
        />
         ))}
      </div>
      </main>
      <footer>
        <MainFooter/>
      </footer>
    </div>
  );
};

export default Productos;
