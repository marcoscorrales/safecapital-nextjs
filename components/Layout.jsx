import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/images/logo.png";
import portada from "../public/images/homePage.png"

const Layout = () => {

    // Define el estado para las variables necesarias para el cálculo del interés compuesto
    const [montoInicial, setMontoInicial] = useState(0);
    const [tasaInteres, setTasaInteres] = useState(0);
    const [anios, setAnios] = useState(0);
    const [montoFinal, setMontoFinal] = useState(0);
  
    // Función para calcular el interés compuesto
    const calcularInteresCompuesto = () => {
      // Utiliza la fórmula del interés compuesto para calcular el monto final
      const monto = montoInicial * Math.pow(1 + (tasaInteres / 100), anios);
      // Actualiza el estado del monto final con el nuevo valor
      setMontoFinal(Math.round(monto));
    };

  return (
    <div className="bg-[#121416]">
      <header> 
        <nav className="bg-transparent absolute mx-auto my-auto left-0 right-0">
          <ul className="flex flex-row justify-center items-center gap-6 text-3xl">
            <li>
            <Link href="/"><Image className="my-0 mx-auto w-12" src={Logo}></Image></Link>
            </li>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/">Anuncios</Link>
            </li>
            <li>
              <Link href="/">Productos</Link>
            </li>
            <li>
              <Link href="/">Cartera</Link>
            </li>
          </ul>
        </nav>
        <Image className="my-0 mx-auto w-full" src={portada}/>
      </header>

      <main>
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
            <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 mt-2 w-full" onClick={()=> {calcularInteresCompuesto()}}>
              Calcular interés compuesto
            </button>
          </form>
          {/* Muestra el monto final */}
          <p className="text-center font-bold text-lg">Monto final: {montoFinal}€</p>
        </div>
      </main>
      <footer>
        <div className="d-flex mt-20">
          <p className="text-center">
            © 2023 SafeCapital. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
