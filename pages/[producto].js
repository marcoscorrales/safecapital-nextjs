import FichaProducto from "../components/FichaProducto";
import { useRouter } from "next/router";

export default function Producto() {
  const router = useRouter();
  const productId = router.query.producto
  return (
    <FichaProducto productId={productId}>Ficha Producto</FichaProducto>
  )
}
