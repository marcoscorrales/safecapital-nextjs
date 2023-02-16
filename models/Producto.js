import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
    {
        ISIN: {type: String, required: true, unique: true},
        nombre: {type: String, required: true},
        ytd: {type: Number, required: true},
        oneyear: {type: Number, required: true},
        threeyear: {type: Number, required: true},
        fiveyear: {type: Number, required: true},
        descripcion: {type: String, required: true},
        riesgo: {type: Number, required: true},
        regiones: {type: Object, required: true},
        sectores: {type: Object, required: true},
        posiciones: {type: Object, required: true},
    },
    {
        timestamps: true,
    }
);

const Producto = mongoose.models.Producto || mongoose.model('Producto', productoSchema);
export default Producto;