
import { Router } from "express";
import CrearUsuario from "../manejadores/crearUsuario.js";
import LoginUsuario from "../manejadores/loginUsuario.js";
import BuscarUsuarios from "../manejadores/buscarUsuarios.js";

const router_usuario = Router();

router_usuario.post('/', BuscarUsuarios)
router_usuario.post('/crearUsuario', CrearUsuario)
router_usuario.post('/login', LoginUsuario)

export default router_usuario;