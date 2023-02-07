import React, { useState } from "react";
import ChartLine from "./ChartLine";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

// import Swiper core and required modules
import { FreeMode, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const CalcularRentabilidad = () => {
  // Define el estado para las variables necesarias para el cálculo del interés compuesto
  const [montoInicial, setMontoInicial] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [anios, setAnios] = useState(0);
  const [montoFinal, setMontoFinal] = useState(0);
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  //Data para el SP500
  const [data2, setData2] = useState([]);

  // Función para calcular el interés compuesto
  const calcularInteresCompuesto = (e) => {
    e.preventDefault();
    // Utiliza la fórmula del interés compuesto para calcular el monto final
    const monto = montoInicial * Math.pow(1 + tasaInteres / 100, anios);
    // Actualiza el estado del monto final con el nuevo valor
    setMontoFinal(Math.round(monto));

    let auxLabels = [];
    let auxData = [];
    let auxData2 = [];
    for (let index = 1; index <= anios; index++) {
      auxLabels.push(`año ${index}`);
      auxData.push(
        Math.round(montoInicial * Math.pow(1 + tasaInteres / 100, index))
      );
      //Calculo para el SP500
      auxData2.push(Math.round(montoInicial * Math.pow(1 + 8.26 / 100, index)));
    }
    setLabels(auxLabels);
    setData(auxData);
    setData2(auxData2);
  };

  return (
    <div className="bg-[#080C10] w-full">
      <header>
        <MainHeader />
      </header>

      <main className="flex flex-col xl:max-w-[1280px]">
        <h1 className="font-poppins font-semibold text-center xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] my-10 w-full">
          Simular rentabilidad
        </h1>
        <h3 className="text-[#01A78A] text-center text-3xl m-10">
          Maximiza tus ganancias y minimiza tus riesgos con nuestros servicios
          de gestión de fondos
        </h3>

        <p className="font-poppins font-normal text-gray-300 text-justify text-[18px] leading-[30.8px]">
          El interés compuesto es un concepto que se aplica a la inversión en
          fondos indexados y otros tipos de inversiones financieras. Es un
          proceso en el que los intereses generados por la inversión se
          reinvesten en la misma inversión, lo que permite que la tasa de
          interés crezca a lo largo del tiempo. El interés compuesto es una
          forma poderosa de construir riqueza a largo plazo, ya que permite que
          el dinero invirtido crezca de manera exponencial.
        </p>

        <div className="xl:max-w-[1280px] flex justify-around flex-col items-center bg-[#121416] p-8 rounded-2xl border-solid border-4 border-gray-500">
          <Swiper className="w-full"
      // install Swiper modules
      modules={[Pagination, FreeMode]}
      spaceBetween={10}
      slidesPerView={3}
      grabCursor={true}
      breakpoints={{
        0: {
          slidesPerView:1,
          spaceBetween:10,
          centeredSlides: true
        },
        480: {
          slidesPerView:2,
          spaceBetween:10,
          centeredSlides: true
        },
        900: {
          slidesPerView:3,
          spaceBetween:10,
        },
        1280: {
          slidesPerView:4,
          spaceBetween:10,
        },

      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] bg-[#121416] hover:bg-gradient-to-r from-[#01a78b37] to-[#00fda92d] w-full h-full border-solid border-4 border-gray-500'>
            <p className='font-poppins font-normal text-[24px] text-center text-white my-10'>SP&500</p>
            <div className="w-full pt-6 border-t-2 border-solid border-t-slate-300"/>
            <div className='flex flex-row justify-around'>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>Rentabilidad media histórica</p>
                <p className='font-poppins font-bold text-white text-center text-[15px] xs:text-[18px] leading-[30.8px]'>8,26%</p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] bg-[#121416] hover:bg-gradient-to-r from-[#01a78b37] to-[#00fda92d] w-full h-full border-solid border-4 border-gray-500'>
            <p className='font-poppins font-normal text-[24px] text-center text-white my-10'>NASDAQ</p>
            <div className="w-full pt-6 border-t-2 border-solid border-t-slate-300"/>
            <div className='flex flex-row justify-around'>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>Rentabilidad media histórica</p>
                <p className='font-poppins font-bold text-white text-center text-[15px] xs:text-[18px] leading-[30.8px]'>15,21%</p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] bg-[#121416] hover:bg-gradient-to-r from-[#01a78b37] to-[#00fda92d] w-full h-full border-solid border-4 border-gray-500'>
            <p className='font-poppins font-normal text-[24px] text-center text-white my-10'>Emerging Markets</p>
            <div className="w-full pt-6 border-t-2 border-solid border-t-slate-300"/>
            <div className='flex flex-row justify-around'>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>Rentabilidad media histórica</p>
                <p className='font-poppins font-bold text-white text-center text-[15px] xs:text-[18px] leading-[30.8px]'>6.13%</p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] bg-[#121416] hover:bg-gradient-to-r from-[#01a78b37] to-[#00fda92d] w-full h-full border-solid border-4 border-gray-500'>
            <p className='font-poppins font-normal text-[24px] text-center text-white my-10'>MSCI Europe Index</p>
            <div className="w-full pt-6 border-t-2 border-solid border-t-slate-300"/>
            <div className='flex flex-row justify-around'>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>Rentabilidad media histórica</p>
                <p className='font-poppins font-bold text-white text-center text-[15px] xs:text-[18px] leading-[30.8px]'>10.03%</p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] bg-[#121416] hover:bg-gradient-to-r from-[#01a78b37] to-[#00fda92d] w-full h-full border-solid border-4 border-gray-500'>
            <p className='font-poppins font-normal text-[24px] text-center text-white my-10'>MSCI Japan Index</p>
            <div className="w-full pt-6 border-t-2 border-solid border-t-slate-300"/>
            <div className='flex flex-row justify-around'>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>Rentabilidad media histórica</p>
                <p className='font-poppins font-bold text-white text-center text-[15px] xs:text-[18px] leading-[30.8px]'>6.37%</p>
              </div>
            </div>
          </div>
      </SwiperSlide>
    
    </Swiper>

     {/* Formulario para ingresar los datos del usuario */}
     <form
            className="flex flex-col w-full sm:w-[50%] mt-8"
            onSubmit={(e) => calcularInteresCompuesto(e)}
          >
            {/* Input para el monto inicial */}
            <label
              className="font-poppins font-normal text-white text-[18px] leading-[30.8px]"
              htmlFor="monto-inicial"
            >
              Capital inicial:
            </label>
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
            <label
              className="font-poppins font-normal text-white text-[18px] leading-[30.8px]"
              htmlFor="tasa-interes"
            >
              Tasa de interés %:
            </label>
            <input
              className="font-poppins font-normal text-black text-[18px] rounded-lg h-10 p-2"
              id="tasa-interes"
              type="number"
              step="any"
              min="0"
              max="100"
              required
              value={tasaInteres}
              onChange={(e) => setTasaInteres(e.target.value)}
            />
            {/* Input para el número de años */}
            <label
              className="font-poppins font-normal text-white text-[18px] leading-[30.8px]"
              htmlFor="anios"
            >
              Duración de la inversión (en años)
            </label>
            <input
              className="font-poppins font-normal text-black text-[18px] rounded-lg h-10 p-2"
              id="anios"
              type="number"
              min="0"
              max="50"
              step="5"
              required
              value={anios}
              onChange={(e) => setAnios(e.target.value)}
            />
            {/* Botón para calcular el interés compuesto */}
            <button
              type="submit"
              className="py-4 px-6 bg-gradient-to-r from-[#00FDA8] to-[#01A78A] font-poppins font-medium text-[18px] text-white outline-none mt-10 rounded-[10px]"
            >
              Calcular interés compuesto
            </button>
            {/* Muestra el monto final */}
          <p className="font-poppins font-normal text-center text-white text-[24px] w-full mt-4">
            Monto final: {montoFinal}€
          </p>
          </form>
 
        </div>

        <ChartLine
          title={"Cálculo interés compuesto"}
          text={`Interés del ${tasaInteres}%`}
          labels={labels}
          moneyData={data}
          moneyData2={data2}
          lineColor={"red"}
          pointColor={"rgba(255, 99, 132, 0.5)"}
          bg={"bg-gray-300"}
        />
      </main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
};

export default CalcularRentabilidad;
