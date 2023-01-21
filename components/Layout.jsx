import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/images/logo.png";
import portada from "../public/images/homePageBlack.jpg";
import { MdMenu, MdClose } from "react-icons/md";
import Hero from "./Hero";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  // Define el estado para las variables necesarias para el cálculo del interés compuesto
  const [montoInicial, setMontoInicial] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [anios, setAnios] = useState(0);
  const [montoFinal, setMontoFinal] = useState(0);

  // Función para calcular el interés compuesto
  const calcularInteresCompuesto = () => {
    // Utiliza la fórmula del interés compuesto para calcular el monto final
    const monto = montoInicial * Math.pow(1 + tasaInteres / 100, anios);
    // Actualiza el estado del monto final con el nuevo valor
    setMontoFinal(Math.round(monto));
  };

  return (
    <div className="bg-[#080C10]">
      <header>
        <nav className="w-full flex py-6 justify-between items-center">
          <Link href="/" className="flex items-center font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]">
            <Image
              className="my-0 ml-10 w-20 cursor-pointer"
              src={Logo}
              alt="/"
            ></Image>
             <span className='text-[#00FDA8] ml-4'>Safe</span>
             <span className='text-[#01A78A]'>Capital</span>
          </Link>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-[16px]">
            <li className="text-white mr-10">
              <Link href="/">Inicio</Link>
            </li>
            <li className="text-white mr-10">
              <Link href="/">Anuncios</Link>
            </li>
            <li className="text-white mr-10">
              <Link href="/">Productos</Link>
            </li>
            <li className="text-white mr-10">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <button onClick={() => setToggle((prev) => !prev)}>
              {toggle ? (
                <MdClose size={23} className="text-white w-[28px] h-[28px]" />
              ) : (
                <MdMenu size={23} className="text-white w-[28px] h-[28px]" />
              )}
            </button>
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-[#080C10] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-gradient-to-tr from-[#00FDA8] to-[#080C10]`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1 text-[16px]">
                <li className="text-white mb-4">
                  <Link href="/">Inicio</Link>
                </li>
                <li className="text-white mb-4">
                  <Link href="/">Anuncios</Link>
                </li>
                <li className="text-white mb-4">
                  <Link href="/">Productos</Link>
                </li>
                <li className="text-white mb-4">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <Image className="my-0 ml-auto" alt="/" src={portada}/> */}
      </header>

      <main className="flex flex-col">
        <Hero/>
        <h1 className="text-[#00FDA8] text-center text-4xl font-bold">
          Safe Capital
        </h1>
        <h3 className="text-[#01A78A] text-center text-3xl">
          Maximiza tus ganancias y minimiza tus riesgos con nuestros servicios
          de gestión de fondos
        </h3>

        <div className="my-0 mx-auto w-96 flex flex-col">
          {/* Formulario para ingresar los datos del usuario */}
          <form className="flex flex-col">
            {/* Input para el monto inicial */}
            <label htmlFor="monto-inicial">Monto inicial:</label>
            <input
              className="text-black"
              id="monto-inicial"
              type="number"
              value={montoInicial}
              onChange={(e) => setMontoInicial(e.target.value)}
            />
            {/* Input para la tasa de interés */}
            <label htmlFor="tasa-interes">Tasa de interés:</label>
            <input
              className="text-black"
              id="tasa-interes"
              type="number"
              value={tasaInteres}
              onChange={(e) => setTasaInteres(e.target.value)}
            />
            {/* Input para el número de años */}
            <label htmlFor="anios">Años:</label>
            <input
              className="text-black"
              id="anios"
              type="number"
              value={anios}
              onChange={(e) => setAnios(e.target.value)}
            />
            {/* Botón para calcular el interés compuesto */}
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 mt-2 w-full"
              onClick={() => {
                calcularInteresCompuesto();
              }}
            >
              Calcular interés compuesto
            </button>
          </form>
          {/* Muestra el monto final */}
          <p className="text-center font-bold text-lg text-white">
            Monto final: {montoFinal}€
          </p>
        </div>
      </main>
      <footer>
        <div className="d-flex mt-20">
          <p className="text-center text-white text-3xl">
            © 2023 SafeCapital. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
