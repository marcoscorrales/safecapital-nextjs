import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import {MdChevronRight} from 'react-icons/md'; 
import Uniliver from "../public/images/dashboard_images/uniliver.png";
import Tesla from "../public/images/dashboard_images/tesla.png";
import Mcdonalds from "../public/images/dashboard_images/mcdonalds.png";
import Monster from "../public/images/dashboard_images/monster.png";
import axios from 'axios';

const Investments = () => {

    const [investmentsData, setInvestmentsData] = useState([]);

    useEffect (()=>{

    const getInvestmentsData = async () =>{
        const API_KEY = 'IN0R92YE14FU4WTQ';
        let API_Call = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=TSLA&apikey=${API_KEY}`
    
        const response = await axios.get(`${API_Call}`);
        console.log(response.data["Global Quote"]["02. open"]);
        setInvestmentsData(response.data["Global Quote"]);
      }
  
        getInvestmentsData();
      }, [])

  return (
    <div className='bg-[#1F1F21] rounded-[1.6rem] h-fit'>
        <div className='flex justify-between items-center p-[1.6rem] pb-0'>
            <h2 className='text-2xl text-white'>Inversiones</h2>
            <a className='flex items-center text-[#00FDA8]' href='#'>More <MdChevronRight size={25}/></a>
        </div>

        <div className='flex items-center justify-between p-[1.6rem] border-solid border-b-[1px] border-gray-500 hover:bg-[#2d2d31] hover:cursor-pointer'>
            <Image className='w-[2.4rem]' src={Uniliver} alt="uniliver"/>
            <h4 className='text-white'>Uniliver</h4>
            <div>
                <p className='text-gray-300'>7 Nov, 2022</p>
                <p className='text-gray-300'>9:14pm</p>
            </div>
            <div>
                <p className='text-gray-300'>1402</p>
                <p className='text-gray-300'>Bonos</p>
            </div>
            <div>
                <p className='text-gray-300'>$20,033</p>
                <p className='text-red-500'>-4.27%</p>
            </div>
        </div>
        {/* Inversion1 */}
        <div className='flex items-center justify-between p-[1.6rem] border-solid border-b-[1px] border-gray-500 hover:bg-[#2d2d31] hover:cursor-pointer'>
            <Image className='w-[2.4rem]' src={Tesla} alt="tesla"/>
            <h4 className='text-white'>Tesla</h4>
            <div>
                <p className='text-gray-300'>{investmentsData["07. latest trading day"]}</p>
                <p className='text-gray-300'>12:01pm</p>
            </div>
            <div>
                <p className='text-gray-300'>2003</p>
                <p className='text-gray-300'>Bonos</p>
            </div>
            <div>
                <p className='text-gray-300'>{`${parseFloat(investmentsData["02. open"]).toFixed(2)}€`}</p>
                <p className='text-red-500'>{`${parseFloat(investmentsData["10. change percent"]).toFixed(2)}%`}</p>
            </div>
        </div>
        {/* Inversion2 */}
        <div className='flex items-center justify-between p-[1.6rem] border-solid border-b-[1px] border-gray-500 hover:bg-[#2d2d31] hover:cursor-pointer'>
            <Image className='w-[2.4rem]' src={Monster} alt="monster"/>
            <h4 className='text-white'>Monster</h4>
            <div>
                <p className='text-gray-300'>9 Dic, 2022</p>
                <p className='text-gray-300'>8:52pm</p>
            </div>
            <div>
                <p className='text-gray-300'>112</p>
                <p className='text-gray-300'>Bonos</p>
            </div>
            <div>
                <p className='text-gray-300'>78,19€</p>
                <p className='text-green-500'>+3.41%</p>
            </div>
        </div>
        {/* Inversion3 */}
        <div className='flex items-center justify-between p-[1.6rem] rounded-b-[1.6rem] hover:bg-[#2d2d31] hover:cursor-pointer'>
            <Image className='w-[2.4rem]' src={Mcdonalds} alt="mcdonalds"/>
            <h4 className='text-white'>Mcdonalds</h4>
            <div>
                <p className='text-gray-300'>27 Dic, 2022</p>
                <p className='text-gray-300'>11:11pm</p>
            </div>
            <div>
                <p className='text-gray-300'>943</p>
                <p className='text-gray-300'>Bonos</p>
            </div>
            <div>
                <p className='text-gray-300'>150,55€</p>
                <p className='text-red-500'>-1.23%</p>
            </div>
        </div>
        {/* Inversion4 */}
    </div>
  )
}

export default Investments