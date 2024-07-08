import BuscarTareasBD from "../controladores/conMongo/buscarTareas-mongo.js";

const BuscarTareas = async (req, res) => {

    try {
        const tareas = await BuscarTareasBD()
        if(tareas.error) {
            res.status(200).json({error: tareas.error, message: tareas.message})
        }else {
            res.status(200).json(tareas)
        }
    } catch (error) {
        res.status(500).json({error: true, message: 'error en conección'})
    }

};

export default BuscarTareas;