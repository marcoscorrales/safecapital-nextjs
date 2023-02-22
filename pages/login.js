import Link from "next/link";
import React from "react";
import Boton from "../components/Boton";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import { useForm } from "react-hook-form";

export default function LoginScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <div className="bg-[#080C10] w-full h-full min-h-screen">
      <header>
        <MainHeader />
      </header>

      <main className="container m-auto mt-4 px-4">
        <form
          className="mx-auto max-w-screen-md"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="font-poppins font-normal text-gray-300 text-[30px]">
            Login
          </h1>
          <div className="mb-4 mt-8">
            <label
              className="font-poppins font-normal text-gray-300 text-[18px]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Por favor inserta un email", pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Por favor inserta un email válido.',
              }})}
              className="w-full rounded-sm border-2 p-2 outline-none font-poppins font-normal text-black text-[18px]"
              id="email"
              autoFocus
            ></input>
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label
              className="font-poppins font-normal text-gray-300 text-[18px]"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              type="password"
              {...register("password", { required: "Por favor inserta una contraseña", minLength: {
                value: 6,
                message: 'La contraseña debe tener más de 5 caracteres.',
              }})}
              className="w-full rounded-sm border-2 p-2 outline-none font-poppins font-normal text-black text-[18px]"
              id="password"
              autoFocus
            ></input>
              {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-4">
            <button type="submit" className="py-4 px-6 bg-gradient-to-r from-[#00FDA8] to-[#01A78A] font-poppins font-medium text-[18px] text-white outline-none rounded-[10px]">Iniciar sesión</button>
          </div>
          <div className="mb-4 font-poppins font-normal text-gray-300 text-[18px]">
            No tienes cuenta? &nbsp;
            <Link href="register">Registro</Link>
          </div>
        </form>
      </main>

      <footer className="absolute bottom-0 w-full">
        <MainFooter />
      </footer>
    </div>
  );
}
