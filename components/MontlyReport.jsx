import React from 'react'

const MontlyReport = () => {
  return (
    <div>
    <div>
        <div>
            <h3>Ingresos</h3>
            <div>
                <details>
                    <h1>75,98€</h1>
                    <h6>+3.5%</h6>
                    <p>Comparando 26,98€ del anterior mes</p>
                </details>
            </div>
        </div>
    </div>
    {/* Reporte1 */}
    <div>
        <div>
            <h3>Gastos</h3>
            <div>
                <details>
                    <h1>90,98€</h1>
                    <h6>-3.5%</h6>
                    <p>Comparando 101,72€ del anterior mes</p>
                </details>
            </div>
        </div>
    </div>
    {/* Reporte2 */}
    <div>
        <div>
            <h3>Cashback</h3>
            <div>
                <details>
                    <h1>45,98€</h1>
                    <h6>+7.5%</h6>
                    <p>Comparando 25,08€ del anterior mes</p>
                </details>
            </div>
        </div>
    </div>
    {/* Reporte3 */}
    <div>
        <div>
            <h3>Facturación</h3>
            <div>
                <details>
                    <h1>75,98€</h1>
                    <h6>-15.3%</h6>
                    <p>Comparando 99,43€ del anterior mes</p>
                </details>
            </div>
        </div>
    </div>
    {/* Reporte4 */}
    </div>
  )
}

export default MontlyReport