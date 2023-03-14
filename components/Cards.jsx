import Image from 'next/image';
import React from 'react'
import Btc from "../public/images/dashboard_images/BTC.png";
import Visa from "../public/images/dashboard_images/visa.png";
import Chip from "../public/images/dashboard_images/card chip.png";
import ETH from "../public/images/dashboard_images/ETH.png";
import EUR from "../public/images/dashboard_images/EURO.png";
import Master from "../public/images/dashboard_images/master card.png";

const Cards = () => (
    <section>
        <div className='flex items-center gap-4'>
            <h1 className='text-white'>Vista General</h1>
            <input className='py-2 px-8 rounded-md bg-white text-black' type='date'/>
        </div>

        <div className='mt-4 grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1'>
            <div className='flex flex-col justify-between text-white h-[16rem] p-[1.6rem] rounded-[1.6rem] bg-gradient-to-r from-purple-500 to-pink-500 shadow-none hover:shadow-md hover:shadow-pink-500 ease-in duration-300'>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Image src={Btc} className='w-[2.3rem] h-[2.3rem] border-solid border-[1px] border-white rounded-md p-[0.4rem]' alt='/'/>
                        <h2 className='font-[200] text-[1.4rem]'>BTC</h2>
                    </div>
                    <Image src={Visa} className='w-14' alt='/'/>
                </div>
                <div className="flex justify-between">
                    <h1 className='text-[2.2rem]'>456,12€</h1>
                    <div className="w-14">
                        <Image src={Chip} alt='/'/>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="left">
                        <span>Propietario</span>
                        <h5>Marcos</h5>
                    </div>
                    <div className="flex gap-8">
                        <div className="expiry">
                            <span>Caducidad</span>
                            <h5>08/23</h5>
                        </div>
                        <div className="CVV">
                            <span>CVV</span>
                            <h5>847</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tarjeta1 */}
            <div className='flex flex-col justify-between text-white h-[16rem] p-[1.6rem] rounded-[1.6rem] bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-none hover:shadow-md hover:shadow-fuchsia-500 ease-in duration-300'>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Image src={ETH} className='w-[2.3rem] h-[2.3rem] border-solid border-[1px] border-white rounded-md p-[0.4rem]' alt='/'/>
                        <h2 className='font-[200] text-[1.4rem]'>ETH</h2>
                    </div>
                    <Image src={Master} className='w-14' alt='/'/>
                </div>
                <div className="flex justify-between">
                    <h1 className='text-[2.2rem]'>901,42€</h1>
                    <div className="w-14">
                        <Image src={Chip} alt='/'/>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="left">
                        <span>Propietario</span>
                        <h5>Marcos</h5>
                    </div>
                    <div className="flex gap-8">
                        <div className="expiry">
                            <span>Caducidad</span>
                            <h5>07/29</h5>
                        </div>
                        <div className="CVV">
                            <span>CVV</span>
                            <h5>104</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tarjeta2 */}
            <div className='flex flex-col justify-between text-white h-[16rem] p-[1.6rem] rounded-[1.6rem] bg-gradient-to-r from-cyan-500 to-blue-500 shadow-none hover:shadow-md hover:shadow-blue-500 ease-in duration-300'>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Image src={EUR} className='w-[2.3rem] h-[2.3rem] border-solid border-[1px] border-white rounded-md p-[0.4rem]' alt='/'/>
                        <h2 className='font-[200] text-[1.4rem]'>EUR</h2>
                    </div>
                    <Image src={Visa} className='w-14' alt='/'/>
                </div>
                <div className="flex justify-between">
                    <h1 className='text-[2.2rem]'>998,99€</h1>
                    <div className="w-14">
                        <Image src={Chip} alt='/'/>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="left">
                        <span>Propietario</span>
                        <h5>Marcos</h5>
                    </div>
                    <div className="flex gap-8">
                        <div className="expiry">
                            <span>Caducidad</span>
                            <h5>09/25</h5>
                        </div>
                        <div className="CVV">
                            <span>CVV</span>
                            <h5>112</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tarjeta3 */}
        </div>
    </section>
)

export default Cards