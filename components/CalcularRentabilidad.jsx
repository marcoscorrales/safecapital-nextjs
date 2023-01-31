import React, { useState } from "react";
import Boton from "./Boton";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const CalcularRentabilidad = () => {
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
    <div className="bg-[#080C10] w-full">
      <header>
        <MainHeader />
      </header>
      <h1 className="font-poppins font-semibold text-center xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] my-10 w-full">
      Simular rentabilidad
      </h1>
      <h3 className="text-[#01A78A] text-center text-3xl m-10">
        Maximiza tus ganancias y minimiza tus riesgos con nuestros servicios de
        gestión de fondos
      </h3>

      <div className="xl:max-w-[1280px] flex flex-col items-center">
        {/* Formulario para ingresar los datos del usuario */}
        <form className="flex flex-col w-96">
          {/* Input para el monto inicial */}
          <label className="font-poppins font-normal text-white text-[18px] leading-[30.8px]" htmlFor="monto-inicial">Capital inicial:</label>
          <input
            className="font-poppins font-normal text-black text-[18px] rounded-lg h-10 p-2"
            id="monto-inicial"
            type="number"
            min="0"
            required
            value={montoInicial}
            onChange={(e) => setMontoInicial(e.target.value)}
          />
          {/* Input para la tasa de interés */}
          <label className="font-poppins font-normal text-white text-[18px] leading-[30.8px]" htmlFor="tasa-interes">Tasa de interés %:</label>
          <input
            className="font-poppins font-normal text-black text-[18px] rounded-lg h-10 p-2"
            id="tasa-interes"
            type="number"
            min="0" max="100"
            required
            value={tasaInteres}
            onChange={(e) => setTasaInteres(e.target.value)}
          />
          {/* Input para el número de años */}
          <label className="font-poppins font-normal text-white text-[18px] leading-[30.8px]" htmlFor="anios">Duración de la inversión (en años)</label>
          <input
            className="font-poppins font-normal text-black text-[18px] rounded-lg h-10 p-2"
            id="anios"
            type="number"
            min="0" max="50" step="5"
            required
            value={anios}
            onChange={(e) => setAnios(e.target.value)}
          />
          {/* Botón para calcular el interés compuesto */}
          <button
            type="button"
            className="py-4 px-6 bg-gradient-to-r from-[#00FDA8] to-[#01A78A] font-poppins font-medium text-[18px] text-white outline-none mt-10 rounded-[10px]"
            onClick={() => {
              calcularInteresCompuesto();
            }}
          >
            Calcular interés compuesto
          </button>
        </form>
        {/* Muestra el monto final */}
        <p className="font-poppins font-normal text-center text-white text-[18px] leading-[30.8px]">
          Monto final: {montoFinal}€
        </p>
      </div>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
};

export default CalcularRentabilidad;
