
import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido (DB)']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es requerido (DB)']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido (DB)'],
        unique: true
    }
});

export default model("UsuarioModelo", usuarioSchema, "usuarioModelo");