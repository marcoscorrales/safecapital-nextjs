import React from "react";
import Calcular from "./Calcular";
import TarjetaFondo from "./TarjetaFondo";

const Productos = () => {
  return (
    <div className="flex flex-wrap sm:justify-around justify-center w-full relative z-[1]">
        <h1 className='font-poppins font-semibold xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Fondos indexados</h1>
      <TarjetaFondo
        nombre="Vanguard U.S. 500 Stock Index Fund"
        ytd="4,04 %"
        oneyear="-1,90 %"
        threeyear="8,92 %"
        fiveyear="11,34 %"
        textoBoton={"Calcular Rentabilidad"}
      />
      <TarjetaFondo
        nombre="Vanguard Emerging Markets Stock Index Fund"
        ytd="8,28 %"
        oneyear="-7,26 %"
        threeyear="0,57 %"
        fiveyear="1,06 %"
        textoBoton={"Calcular Rentabilidad"}
      />
      <TarjetaFondo
        nombre="Nasdaq-100 Index Fund"
        ytd="7,40 %"
        oneyear="-19,90 %"
        threeyear="5,70 %"
        fiveyear="8,37 %"
        textoBoton={"Calcular Rentabilidad"}
      />
    </div>
  );
};

export default Productos;
