import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import {FiLogIn} from "react-icons/fi";
const Empezar = () => {

  const router = useRouter();
  const { redirect } = router.query;

  return (
    <Link href={`/register?redirect=${redirect || '/'}`}>
    <div className='flex justify-center items-center w-[140px] h-[140px] rounded-full bg-gradient-to-b from-[#00FDA8] to-[#01A78A] p-[2px] cursor-pointer'>
        <div className='flex justify-center items-center flex-col bg-[#121416] w-[100%] h-[100%] rounded-full'>
            <div className='flex justify-center items-start flex-row gap-1'>
                <p className='font-poppins font-medium text-[20px] leading-[23px]'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#01A78A] to-[#00FDA8]'>
                        Crear
                    </span>
                </p>    
                <FiLogIn size={25} className='text-[#00FDA8]'/>
            </div>
            <p className='font-poppins font-medium text-[20px] leading-[23px]'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#01A78A] to-[#00FDA8]'>
                        Cuenta
                    </span>
                </p>
        </div>
    </div>
    </Link>
  )
}

export default Empezar