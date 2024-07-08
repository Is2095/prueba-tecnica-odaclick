
export const ValidacionTarea = (req, res, next) => {
    const datos = req.body;
    /* validaciones requeridas para todos los datos para la creación de una tarea 

    si no pasa la validación res.status(404).json({error: true, message: 'error en los campos de tarea'})

    si pasa next()
    */
    next()
}
export const ValidacionTareaActualización = (req, res, next) => {
    /* validaciones requeridas para todos los datos para la actualización de una tarea 

    si no pasa la validación res.status(404).json({error: true, message: 'error en los campos de actualización de la tarea'})

    si pasa next()
    */
    next()
}
export const ValidacionBorradoTarea = (req, res, next) => {
 /* validaciones requeridas poder borrar la tarea determinada 

    si no pasa la validación res.status(404).json({error: true, message: 'errores para borrar tarea'})

    si pasa next()
    */
    next()
}