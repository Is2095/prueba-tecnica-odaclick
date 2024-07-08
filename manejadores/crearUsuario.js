
import CrearUsuarioBD from "../controladores/conMongo/crearUsuario_mongo.js";

const CrearUsuario = async (req, res) => {

    const { nombre, apellido, email } = req.body;

    try {
        if (nombre === '' || apellido === '' || email === '') {
            res.status(404).json({ error: true, message: 'datos incompletos' })
        } else {
            const usuarioCreadoBD = await CrearUsuarioBD({ nombre, apellido, email });
            if (usuarioCreadoBD.error) {
                res.status(404).json({ error: true, message: usuarioCreadoBD.message })
            } else {
                res.status(201).json({ data: usuarioCreadoBD._doc })
            }
        }
    } catch (error) {
        res.status(500).json({error: true, message: 'error en la conección'})
    }


};
export default CrearUsuario;