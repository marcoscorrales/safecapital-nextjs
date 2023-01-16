import React from 'react'

const MontlyReport = () => {
  return (
    <div className='grid grid-cols-4 gap-4 justify-between mt-8'>
        <div>
            <h3 className='text-[1.2rem] text-white'>Ingresos</h3>
            <div>
                <details className='text-white'>
                    <h1 className='font-bold text-[1.8rem] text-white'>75,98€</h1>
                    <h6 className='text-green-500'>+3.5%</h6>
                </details>
                <p className='text-gray-500'>Comparando 26,98€ del anterior mes</p>
            </div>
        </div>
    {/* Reporte1 */}
        <div>
            <h3 className='text-[1.2rem] text-white'>Gastos</h3>
            <div>
                <details className='text-white'>
                    <h1 className='font-bold text-[1.8rem] text-white'>90,98€</h1>
                    <h6 className='text-red-500'>-3.5%</h6>
                </details>
                <p className='text-gray-500'>Comparando 101,72€ del anterior mes</p>
            </div>
        </div>
    {/* Reporte2 */}
        <div>
            <h3 className='text-[1.2rem] text-white'>Cashback</h3>
            <div>
                <details className='text-white'>
                    <h1 className='font-bold text-[1.8rem] text-white'>45,98€</h1>
                    <h6 className='text-green-500'>+7.5%</h6>
                </details>
                <p className='text-gray-500'>Comparando 25,08€ del anterior mes</p>
            </div>
        </div>
    {/* Reporte3 */}
        <div>
            <h3 className='text-[1.2rem] text-white'>Facturación</h3>
            <div>
                <details className='text-white'>
                    <h1 className='font-bold text-[1.8rem] text-white'>75,98€</h1>
                    <h6 className='text-red-500'>-15.3%</h6>
                </details>
                <p className='text-gray-500'>Comparando 99,43€ del anterior mes</p>
            </div>
        </div>
    {/* Reporte4 */}
    </div>
  )
}

export default MontlyReport