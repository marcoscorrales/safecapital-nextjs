import db from "../../data/db";
import { useRouter } from "next/router";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";
import MyResponsiveGeoMap from "../../components/GeoMap";
import Producto from "../../models/Producto";

export default function ComponenteProducto({productos}) {
  const router = useRouter();
  const productISIN = router.query.producto;
  let dataproducto = productos.find((x) => x.ISIN === productISIN);
  console.log(dataproducto.regiones[1]);
  return (
    <div className="bg-[#080C10] w-full">
      <header>
        <MainHeader />
      </header>
      <main className="flex flex-col w-full max-w-[1280px] p-4 ss:p-0">
        <h1 className="font-poppins font-semibold text-center xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] my-10 w-full">
          {dataproducto.nombre}
        </h1>
        <div className="flex flex-col justify-center gap-8 w-full relative z-[1]">
          <div className="flex flex-col">
            <h2 className="text-white text-center text-3xl m-10">
              Descripción
            </h2>
            <div>
              <p className={`text-white text-justify text-xl border-2`}>
                {dataproducto.descripcion}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-center text-3xl m-10">
              Indicador de riesgo
            </h2>
            <div className="max-w-[450px] w-full flex justify-center">
              <span
                className={`${dataproducto.riesgo === 1 ? "text-black bg-white" : "text-white"} p-4 ss:p-8 text-center text-3xl border-2 border-solid border-white`}
              >
                1
              </span>
              <span
                className={`${dataproducto.riesgo === 2 ? "text-black bg-white" : "text-white"} p-4 ss:p-8 text-center text-3xl border-2 border-solid border-white`}
              >
                2
              </span>
              <span
                className={`${dataproducto.riesgo === 3 ? "text-black bg-white" : "text-white"} p-4 ss:p-8 text-center text-3xl border-2 border-solid border-white`}
              >
                3
              </span>
              <span
                className={`${dataproducto.riesgo === 4 ? "text-black bg-white" : "text-white"} p-4 ss:p-8 text-center text-3xl border-2 border-solid border-white`}
              >
                4
              </span>
              <span
                className={`${dataproducto.riesgo === 5 ? "text-black bg-white" : "text-white"} p-4 ss:p-8 text-center text-3xl border-2 border-solid border-white`}
              >
                5
              </span>
              <span
                className={`${dataproducto.riesgo === 6 ? "text-black bg-white" : "text-white"} p-4 ss:p-8 text-center text-3xl border-2 border-solid border-white`}
              >
                6
              </span>
              <span
                className={`${dataproducto.riesgo === 7 ? "text-black bg-white" : "text-white"} p-4 ss:p-8 text-center text-3xl border-2 border-solid border-white`}
              >
                7
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-center text-3xl m-10">
              Rentabilidades
            </h2>
            <table border="0" className="max-w-[450px] w-full">
              <tbody>
                <tr>
                  <td className="font-poppins font-normal text-white text-[17px] xs:text-[20px] leading-[30.8px]">Rentabilidades acumul.</td>
                  <td className="font-poppins font-normal text-white text-right text-[17px] xs:text-[20px] leading-[30.8px]">%</td>
                </tr>
                <tr>
                  <td width="100%" className="font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]">
                    YTD
                  </td>
                  <td className="font-poppins font-bold text-white text-right text-[15px] xs:text-[18px] leading-[30.8px]">{dataproducto.ytd}</td>
                </tr>
                <tr>
                  <td width="100%" className="font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]">
                  1 año
                  </td>
                  <td className="font-poppins font-bold text-white text-right text-[15px] xs:text-[18px] leading-[30.8px]">{dataproducto.oneyear}</td>
                </tr>
                <tr>
                  <td width="100%" className="font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]">
                  3 años
                  </td>
                  <td className="font-poppins font-bold text-white text-right text-[15px] xs:text-[18px] leading-[30.8px]">{dataproducto.threeyear}</td>
                </tr>
                <tr>
                  <td width="100%" className="font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]">
                  5 años
                  </td>
                  <td className="font-poppins font-bold text-white text-right text-[15px] xs:text-[18px] leading-[30.8px]">{dataproducto.fiveyear}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-center text-3xl m-10">
              Estilo
            </h2>
            <div className="flex flex-wrap items-center justify-evenly gap-10 w-full">
            <table border="0" className="max-w-[450px] w-full">
              <tbody>
                <tr>
                  <td className="font-poppins font-normal text-white text-[17px] xs:text-[20px] leading-[30.8px]">5 regiones principales</td>
                  <td className="font-poppins font-normal text-white text-right text-[17px] xs:text-[20px] leading-[30.8px]">%</td>
                </tr>
                {
                  Object.entries(dataproducto.regiones).map(([region,valor]) =>
                  <tr key={region}>
                  <td width="100%" className="font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]">
                    {region}
                  </td>
                  <td className="font-poppins font-bold text-white text-right text-[15px] xs:text-[18px] leading-[30.8px]">
                    {valor}
                  </td>
                </tr>
                  )}
                
              </tbody>
            </table>
            <table border="0" className="max-w-[450px] w-full">
              <tbody>
                <tr>
                  <td className="font-poppins font-normal text-white text-[17px] xs:text-[20px] leading-[30.8px]">5 mayores sectores</td>
                  <td className="font-poppins font-normal text-white text-right text-[17px] xs:text-[20px] leading-[30.8px]">%</td>
                </tr>
                {
                Object.entries(dataproducto.sectores).map(([sector,valor]) =>
                <tr key={sector}>
                  <td width="100%" className="font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]">
                    {sector}
                  </td>
                  <td className="font-poppins font-bold text-white text-right text-[15px] xs:text-[18px] leading-[30.8px]">
                    {valor}
                  </td>
                </tr>
                )}
              </tbody>
            </table>
            <table border="0" className="max-w-[450px] w-full">
              <tbody>
                <tr>
                  <td className="font-poppins font-normal text-white text-[17px] xs:text-[20px] leading-[30.8px]">5 mayores posic.</td>
                  <td className="font-poppins font-normal text-white text-right text-[17px] xs:text-[20px] leading-[30.8px]">%</td>
                </tr>
                {
                Object.entries(dataproducto.posiciones).map(([posicion,valor]) =>
                <tr key={posicion}>
                  <td width="100%" className="font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]">
                    {posicion}
                  </td>
                  <td className="font-poppins font-bold text-white text-right text-[15px] xs:text-[18px] leading-[30.8px]">
                    {valor}
                  </td>
                </tr>
                )}
              </tbody>
            </table>
            </div>
          </div>
        </div>
        <MyResponsiveGeoMap />
      </main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}

//Ejecuta la función antes de renderizar el componente 
export async function getServerSideProps(){
  await db.connect();
  const productos = await Producto.find().lean();
  return {
    props:{
      productos : productos.map(db.convertDocToObj)
    }
  }
}
