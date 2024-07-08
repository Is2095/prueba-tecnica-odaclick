
import BorrarTareaBD from "../controladores/conMongo/borrarTarea_mongo.js";

const BorrarTarea = async (req, res) => {

    const { id } = req.body;
    try {
        if (!id) {
            res.status(404).json({ error: true, message: 'error de identificación de tarea' });
        } else {
            const tareaBorrada = await BorrarTareaBD(id);
            if (tareaBorrada.error) {
                res.status(404).json({ error: true, message: tareaBorrada.message });
            } else {
                res.status(200).json({ data: tareaBorrada });
            };
        };
    } catch (error) {
        res.status(404).json({ error: true, message: 'error de conección' })
    };
};
export default BorrarTarea;