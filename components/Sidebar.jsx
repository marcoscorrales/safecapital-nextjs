import React, { useContext } from "react";
import {
  MdClose,
  MdDashboard,
  MdAnalytics,
  MdMessage,
  MdHelpCenter,
  MdSettings,
} from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { SideBarContext } from "../context/SideBarContext";

const Sidebar = () => {
  //Context para ocultar o mostrar el sidebar y seleccionar apartado del sidebar
  const { sideBarState, sideBarActive, setSideBarActive, toggleSideBar } =
    useContext(SideBarContext);
  const handleClick = () => {
    toggleSideBar();
  };
  return (
    <aside
      className={
        sideBarState
          ? `flex flex-col justify-between w-[16rem] h-[88vh] max-[1024px]:w-[24rem] max-[1024px]:h-[100vh]`
          : `hidden`
      }
    >
      {/* Para mobiles y tablets */}
      <button
        id="close-btn"
        onClick={handleClick}
        className="hidden cursor-pointer"
      >
        <MdClose className="text-white" size={25} />
      </button>

      <div className="flex flex-col gap-7 mt-10 max-[1024px]:mt-16">
        {/* Boton activo */}
        <a
          className={`${
            sideBarActive === "dashboard" ? "active" : ""
          } flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]`}
          onClick={() => setSideBarActive("dashboard")}
          href="#"
        >
          <MdDashboard className="text-[1.7rem] ml-12" size={25} />
          <h4>Dashboard</h4>
        </a>
        <a
          className={`${
            sideBarActive === "divisas" ? "active" : ""
          } flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]`}
          onClick={() => setSideBarActive("divisas")}
          href="#"
        >
          <RiExchangeDollarLine className="text-[1.7rem] ml-12" size={25} />
          <h4>Divisas</h4>
        </a>
        <a
          className={`${
            sideBarActive === "cartera" ? "active" : ""
          } flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]`}
          onClick={() => setSideBarActive("cartera")}
          href="#"
        >
          <FaWallet className="text-[1.7rem] ml-12" size={25} />
          <h4>Cartera</h4>
        </a>
        <a
          className={`${
            sideBarActive === "transacciones" ? "active" : ""
          } flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]`}
          onClick={() => setSideBarActive("transacciones")}
          href="#"
        >
          <AiFillCreditCard className="text-[1.7rem] ml-12" size={25} />
          <h4>Transacciones</h4>
        </a>
        <a
          className={`${
            sideBarActive === "analiticas" ? "active" : ""
          } flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]`}
          onClick={() => setSideBarActive("analiticas")}
          href="#"
        >
          <MdAnalytics className="text-[1.7rem] ml-12" size={25} />
          <h4>Analíticas</h4>
        </a>
        <a
          className={`${
            sideBarActive === "mensajes" ? "active" : ""
          } flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]`}
          onClick={() => setSideBarActive("mensajes")}
          href="#"
        >
          <MdMessage className="text-[1.7rem] ml-12" size={25} />
          <h4>Mensajes</h4>
        </a>
        <a
          className={`${
            sideBarActive === "ayuda" ? "active" : ""
          } flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]`}
          onClick={() => setSideBarActive("ayuda")}
          href="#"
        >
          <MdHelpCenter className="text-[1.7rem] ml-12" size={25} />
          <h4>Ayuda</h4>
        </a>
        <a
          className={`${
            sideBarActive === "opciones" ? "active" : ""
          } flex items-center gap-[1.2rem] h-[4.2rem] text-gray-500 relative hover:text-[#00FDA8]`}
          onClick={() => setSideBarActive("opciones")}
          href="#"
        >
          <MdSettings className="text-[1.7rem] ml-12" size={25} />
          <h4>Opciones</h4>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
