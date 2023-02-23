import Link from "next/link";
import React, { useEffect } from "react";
import { signIn, useSession } from 'next-auth/react';
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/router";

export default function LoginScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
   if(session?.user){
      router.push(redirect || '/')
   }
  }, [router, session, redirect])
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if(result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <div className="bg-[#080C10] w-full h-full min-h-screen flex flex-col justify-between">
      <header>
        <MainHeader />
      </header>

      <ToastContainer position="bottom-center" limit={1}/>

      <main className="xl:max-w-[1280px] container mt-4 px-4 flex-1">
        <form
          className="mx-auto w-full ss:w-[600px]"
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

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
