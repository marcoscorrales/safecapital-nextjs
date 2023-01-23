import React from "react";

const Estadisticas = () => {
  return (
    <section className="flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
      <div className="flex-1 flex justify-center items-center flex-row m-3">
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          4500+
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3 text-transparent bg-clip-text bg-gradient-to-r from-[#01A78A] to-[#00FDA8]">
          Usuarios
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center flex-row m-3">
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          1700+
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3 text-transparent bg-clip-text bg-gradient-to-r from-[#01A78A] to-[#00FDA8]">
          Fondos De Inversión
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center flex-row m-3">
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          €500M+
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3 text-transparent bg-clip-text bg-gradient-to-r from-[#01A78A] to-[#00FDA8]">
          Transacciones
        </p>
      </div>
    </section>
  );
};

export default Estadisticas;
