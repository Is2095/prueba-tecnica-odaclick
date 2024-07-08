
import { Router } from "express";
import CrearTarea from "../manejadores/crearTarea.js";
import EditarTarea from "../manejadores/editarTarea.js";
import EstadoTarea from "../manejadores/estadoTarea.js";

const router_todo = Router()

router_todo.post('/producto', CrearTarea);
router_todo.post('/editar', EditarTarea);
router_todo.post('/estadoTarea', EstadoTarea)

export default router_todo;