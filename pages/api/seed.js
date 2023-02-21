
import {data} from "../../data/data";
import db from "../../data/db";
import Producto from "../../models/Producto";
import User from "../../models/User";

const handler = async (req, res) => {
    await db.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    await Producto.deleteMany();
    await Producto.insertMany(data.productos);
    await db.disconnect();
    res.send({ message: 'seeded successfully' });
}

export default handler;