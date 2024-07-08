
import { Schema, model } from "mongoose";

const tareaSchema = new Schema({
    titulo: {
        type: String,
        required: [true, 'El producto es requerido (DB)']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción del producto es requerido (DB)']
    },
    estado: {
        type: Boolean,
        default: false
    }
});

export default model("TareaModelo", tareaSchema, "tareaModelo");