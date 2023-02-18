import Productos from "../components/Productos";
import Producto from "../models/Producto";
import db from "../data/db";
export default function Home({dataproductos}) {
  return (
    <Productos dataproductos={dataproductos}>Layout</Productos>
  )
}

//Ejecuta la función antes de renderizar el componente 
export async function getServerSideProps(){
  await db.connect();
  const dataproductos = await Producto.find().lean();
  return {
    props:{
      dataproductos : dataproductos.map(db.convertDocToObj)
    }
  }
}