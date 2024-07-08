export const ValidacionPermisoTareas = (req, res, next) => {
    const datos = req.body;
    /* validaciones requeridas respecta a los permisos necesarios para las rutas de crear una tarea 

    si no pasa la validación res.status(404).json({error: true, message: 'error en los permisos})
    si pasa next()
    */
    next()
}
export const ValidacionPermisosUsuario = (req, res, next) => {
    /* validaciones requeridas para los usuarios para las rutas pertinentes a los usuarios 

    si no pasa la validación res.status(404).json({error: true, message: 'error en los permisos requeridos'})

    si pasa next()
    */
    next()
}