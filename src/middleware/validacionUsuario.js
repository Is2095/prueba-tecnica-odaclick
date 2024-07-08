export const ValidacionUsuario = (req, res, next) => {
    const datos = req.body;
    /* validaciones requeridas para todos los datos para la creación de un crearUsuario

    si no pasa la validación res.status(404).json({error: true, message: 'error en los campos necesarios para crear el usuario'})

    si pasa next()
    */
    next()
}
export const ValidacionLoginUsuario = (req, res, next) => {
    const datos = req.body;
    /* validaciones requeridas para todos los datos para logear al usuario  

    si no pasa la validación res.status(404).json({error: true, message: 'error en los datos del usuario'})

    si pasa next()
    */
    next()
}