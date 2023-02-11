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
  let dataproducto = DataProductos.find(x => x.id === productId)
  console.log(dataproducto)
  return (
    <div className="bg-[#080C10] w-full">
      <header>
        <MainHeader />
      </header>
      <main className="flex flex-col xl:max-w-[1280px] h-3200px">
      <h1 className="font-poppins font-semibold text-center xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] my-10 w-full">
      {dataproducto ? dataproducto.nombre : ""}
        </h1>
        <div className="flex justify-center w-full relative z-[1]">
         <h2></h2>
         <div className='flex flex-row justify-between'>
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
      <MyResponsiveGeoMap/>
      </main>
      <footer>
        <MainFooter/>
      </footer>
    </div>
  )
}
