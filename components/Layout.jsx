import React from "react";
import Hero from "./Hero";
import Estadisticas from "./Estadisticas";
import Negocio from "./Negocio";
import Facturacion from "./Facturacion";
import Acciones from "./Acciones";
import MainFooter from "./MainFooter";
import Calcular from "./Calcular";
import MainHeader from "./MainHeader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Layout = () => {

  return (
    <div className="bg-[#080C10] w-full">
      <header>
        <MainHeader />
      </header>

      <ToastContainer position="bottom-center" limit={1}/>

      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <main className="flex flex-col xl:max-w-[1280px]">
        <Estadisticas />
        <Negocio />
        <Facturacion />
        <Acciones />
        <Calcular />
      </main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
};

export default Layout;
