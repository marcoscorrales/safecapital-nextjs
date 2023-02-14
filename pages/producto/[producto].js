import FichaProducto from "../../components/FichaProducto";
import { useRouter } from "next/router";
import { datamap, DataProductos } from "../../data/data";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";
import MyResponsiveChoropleth from "../../components/GeoMap";
import MyResponsiveGeoMap from "../../components/GeoMap";

export default function Producto() {
  const router = useRouter();
  const productId = router.query.producto
  let dataproducto = DataProductos.find(x => x.ISIN === productId)
  console.log(dataproducto)
  return (
    <div className="bg-[#080C10] w-full">
      <header>
        <MainHeader />
      </header>
      <main className="flex flex-col w-full max-w-[1280px]">
      <h1 className="font-poppins font-semibold text-center xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] my-10 w-full">
      {dataproducto ? dataproducto.nombre : ""}
        </h1>
        <div className="flex flex-col justify-center gap-8 w-full relative z-[1]">
          <div className="flex flex-col">
            <h2 className="text-white text-center text-3xl m-10">Descripción</h2>
            <div>
              <p className={`text-white text-justify text-xl border-2`}>{dataproducto ? dataproducto.descripcion : ""}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-center text-3xl m-10">Indicador de riesgo</h2>
            <div>
              <span className={`text-white px-8 py-8 text-center text-3xl border-2 border-solid border-slate-300`}>1</span>
              <span className={`text-white px-8 py-8 text-center text-3xl border-2 border-solid border-slate-300`}>2</span>
              <span className={`text-white px-8 py-8 text-center text-3xl border-2 border-solid border-slate-300`}>3</span>
              <span className={`text-white px-8 py-8 text-center text-3xl border-2 border-solid border-slate-300`}>4</span>
              <span className={`text-white px-8 py-8 text-center text-3xl border-2 border-solid border-slate-300`}>5</span>
              <span className={`text-white px-8 py-8 text-center text-3xl border-2 border-solid border-slate-300`}>6</span>
              <span className={`text-white px-8 py-8 text-center text-3xl border-2 border-solid border-slate-300`}>7</span>
            </div>
          </div>
          <div>
            <h2 className="text-white text-center text-3xl m-10">Rentabilidades</h2>
            <div className='flex flex-row justify-evenly'>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>YTD</p>
                <p className='font-poppins font-bold text-white text-[15px] xs:text-[18px] leading-[30.8px]'>{dataproducto ? dataproducto.ytd : ""}</p>
              </div>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>1 año</p>
                <p className='font-poppins font-bold text-white text-[15px] xs:text-[18px] leading-[30.8px]'>{dataproducto ? dataproducto.oneyear : ""}</p>
              </div>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>3 años</p>
                <p className='font-poppins font-bold text-white text-[15px] xs:text-[18px] leading-[30.8px]'>{dataproducto ? dataproducto.threeyear : ""}</p>
              </div>
              <div className="flex flex-col">
                <p className='font-poppins font-normal text-white text-[15px] xs:text-[18px] leading-[30.8px]'>5 años</p>
                <p className='font-poppins font-bold text-white text-[15px] xs:text-[18px] leading-[30.8px]'>{dataproducto ? dataproducto.fiveyear : ""}</p>
              </div>
            </div>
          </div>
      </div>
      <MyResponsiveGeoMap/>
      </main>
      <footer>
        <MainFooter/>
      </footer>
    </div>
  )
}
