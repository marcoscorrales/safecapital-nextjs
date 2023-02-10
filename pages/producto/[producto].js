import FichaProducto from "../../components/FichaProducto";
import { useRouter } from "next/router";
import { DataProductos } from "../../data/data";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";

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
      <main className="flex flex-col xl:max-w-[1280px]">
      <h1 className="font-poppins font-semibold text-center xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] my-10 w-full">
      {dataproducto ? dataproducto.nombre : ""}
        </h1>
        <div className="flex flex-wrap sm:justify-around justify-center w-full relative z-[1]">
         <h2></h2>
         <p className="text-red-500">{dataproducto ? dataproducto.nombre : ""}</p>
         
      </div>
      </main>
      <footer>
        <MainFooter/>
      </footer>
    </div>
  )
}
