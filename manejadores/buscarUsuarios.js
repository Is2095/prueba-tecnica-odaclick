import BuscarUsuariosBD from "../controladores/conMongo/buscarUsuarios_mongo.js";

const BuscarUsuarios = async (req, res) => {

    const dato = req.body;

    try {
        const usuarios = await BuscarUsuariosBD(dato);
        if (usuarios.error) {
            res.status(200).json({ error: usuarios.error, message: usuarios.message })
        } else {
            res.status(200).json(usuarios)
        }
    } catch (error) {
        res.status(500).json({ error: true, message: 'error en conección' })

    }

};
export default BuscarUsuarios;