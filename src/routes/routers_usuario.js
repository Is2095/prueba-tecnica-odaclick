
import { Router } from "express";

import CrearUsuario from "../manejadores/crearUsuario.js";
import LoginUsuario from "../manejadores/loginUsuario.js";
import BuscarUsuarios from "../manejadores/buscarUsuarios.js";

import { ValidacionUsuario, ValidacionLoginUsuario } from "../middleware/validacionUsuario.js";

const router_usuario = Router();

router_usuario.post('/', BuscarUsuarios)
router_usuario.post('/crearUsuario', ValidacionUsuario, CrearUsuario)
router_usuario.post('/login', ValidacionLoginUsuario, LoginUsuario)

export default router_usuario;