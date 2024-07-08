
import EditarTareaBD from "../controladores/conMongo/editarTarea_mono.js";

const EditarTarea = async (req, res) => {

    const datosAActualizar = req.body;

    const key = Object.keys(datosAActualizar.datos).filter(key => {
        const value = datosAActualizar.datos[key];
        return value !== null && value !== undefined && value !== ''
    })

    try {
        if (key.length === 0) {
            res.status(404).json('no hay datos para actualizar')
        } else {
            const tareaActualizada = await EditarTareaBD(datosAActualizar)
            res.status(201).json(tareaActualizada)
        }
    } catch (error) {
        res.status(500).send('se produjo un error de conección')
    }




}

export default EditarTarea;