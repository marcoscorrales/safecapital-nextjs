import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import TarjetaFondo from "./TarjetaFondo";

const Productos = () => {
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
        <TarjetaFondo
          nombre="Vanguard U.S. 500 Stock Index Fund"
          ytd="4,04 %"
          oneyear="-1,90 %"
          threeyear="8,92 %"
          fiveyear="11,34 %"
          textoBoton={"Ver ficha"}
          linkBoton={"/"}
        />
        <TarjetaFondo
          nombre="Vanguard Emerging Markets Stock Index Fund"
          ytd="8,28 %"
          oneyear="-7,26 %"
          threeyear="0,57 %"
          fiveyear="1,06 %"
          textoBoton={"Ver ficha"}
          linkBoton={"/"}
        />
        <TarjetaFondo
          nombre="Nasdaq-100 Index Fund"
          ytd="7,40 %"
          oneyear="-19,90 %"
          threeyear="5,70 %"
          fiveyear="8,37 %"
          textoBoton={"Ver ficha"}
          linkBoton={"/"}
        />
        <TarjetaFondo
          nombre="Vanguard European Stock Index Fund"
          ytd="7,70 %"
          oneyear="2,31 %"
          threeyear="5,14 %"
          fiveyear="6,99 %"
          textoBoton={"Ver ficha"}
          linkBoton={"/"}
        />
        <TarjetaFondo
          nombre="Vanguard Japan Stock Index Fund"
          ytd="3,98 %"
          oneyear="-3,74 %"
          threeyear="1,03 %"
          fiveyear="3,97 %"
          textoBoton={"Ver ficha"}
          linkBoton={"/"}
        />
        <TarjetaFondo
          nombre="AMUNDI INDEX JP MORGAN"
          ytd="3,17 %"
          oneyear="-13,48 %"
          threeyear="-5,76 %"
          fiveyear="-1,50 %"
          textoBoton={"Ver ficha"}
          linkBoton={"/"}
        />
      </div>
      </main>
      <footer>
        <MainFooter/>
      </footer>
    </div>
  );
};

export default Productos;
