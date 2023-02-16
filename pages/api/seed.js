
import {data} from "../../data/data";
import db from "../../data/db";
import Producto from "../../models/Producto";

const handler = async (req, res) => {
    await db.connect();
    await Producto.deleteMany();
    await Producto.insertMany(data.productos);
    await db.disconnect();
    res.send({ message: 'seeded successfully' });
}

export default handler;