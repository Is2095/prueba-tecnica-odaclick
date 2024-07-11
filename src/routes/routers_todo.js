
import { Router } from "express";
import CrearTarea from "../manejadores/crearTarea.js";
import EditarTarea from "../manejadores/editarTarea.js";
import EstadoTarea from "../manejadores/estadoTarea.js";
import BorrarTarea from "../manejadores/borrarTarea.js";
import BuscarTareas from "../manejadores/buscarTareas.js";

import { ValidacionTarea, ValidacionTareaActualización, ValidacionBorradoTarea } from '../middleware/validacionTarea.js'

const router_todo = Router()

router_todo.get('/tareas', BuscarTareas);
router_todo.post('/tarea', ValidacionTareaActualización, CrearTarea);
router_todo.put('/editar', ValidacionTarea, EditarTarea);
router_todo.post('/estadoTarea', EstadoTarea);
router_todo.delete('/borrarTarea', ValidacionBorradoTarea, BorrarTarea);

export default router_todo;