
import BuscarUsuariosBD from "../controladores/conMongo/buscarUsuarios_mongo.js";

const LoginUsuario = async (req, res) => {

    const { nombre, apellido, email } = req.body;
    const usuario = await BuscarUsuariosBD({email});

    if(usuario.data === null) {
        res.status(404).json({error: true, message: 'error al buscar el usuario'});
    } else {
        // realizar todo tipo de validación de identidad password hasheado, comprobación por email, etc
        if(usuario.data.nombre === nombre && usuario.data.apellido === apellido) {
            res.status(200).json({data: usuario.data}); // sólo devolver datos que no sean sensibles
        }else {
            res.status(404).json({error: true, message: 'error en la validación de datos'});
        }
    };
};
export default LoginUsuario;