import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import Logo from "../public/images/logo.png";

const FooterLayout = () => {
  return (
    <section className="flex justify-center items-center sm:py-16 py-6 px-6 flex-col">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex-1 flex flex-col justify-start mr-10">
        <Link href="/" className="flex items-center font-poppins font-semibold xs:text-[42px] text-[36px] text-white xs:leading-[76.8px] leading-[66.8px]">
            <Image
              className="my-0 ml-0 w-[70px] cursor-pointer"
              src={Logo}
              alt="/"
            ></Image>
             <span className='text-[#00FDA8] ml-4'>Safe</span>
             <span className='text-[#01A78A]'>Capital</span>
          </Link>
          <p className="font-poppins font-normal text-gray-300 text-[18px] leading-[30.8px] mt-4 max-w-[310px]">
          Dé el siguiente paso en tu carrera de inversión con SafeCapital.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                    Sobre SafeCapital
                </h4>
                <ul className="list-none mt-4">
                    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-[#00FDA8] cursor-pointer">
                        Hazte cliente
                    </li>
                    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-[#00FDA8] cursor-pointer">
                        Conócenos
                    </li>
                    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-[#00FDA8] cursor-pointer">
                        Blog
                    </li>
                </ul>
            </div>

            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                    Términos legales
                </h4>
                <ul className="list-none mt-4">
                    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-[#00FDA8] cursor-pointer">
                        Aviso legal
                    </li>
                    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-[#00FDA8] cursor-pointer">
                        Información legal
                    </li>
                    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-[#00FDA8] cursor-pointer">
                        Atención al cliente
                    </li>
                </ul>
            </div>

            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                    Ayuda y contacto
                </h4>
                <ul className="list-none mt-4">
                    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-[#00FDA8] cursor-pointer">
                        Preguntas frecuentes
                    </li>
                    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-[#00FDA8] cursor-pointer">
                        <p className="flex items-center gap-2"><BsTelephone/> 666 33 22 11</p>
                    </li>
                    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-[#00FDA8] cursor-pointer">
                        <p className="flex items-center gap-2"><FiMail/> correo@safecapital.es</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-2 border-solid border-t-slate-300">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        © 2023 SafeCapital. All rights reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
            <AiFillFacebook size={30} className="text-white cursor-pointer mr-6"/>
            <AiOutlineInstagram size={30} className="text-white cursor-pointer mr-6"/>
            <AiOutlineTwitter size={30} className="text-white cursor-pointer mr-6"/>
            <AiFillLinkedin size={30} className="text-white cursor-pointer mr-6"/>
        </div>
      </div>
    </section>
  );
};

export default FooterLayout;
