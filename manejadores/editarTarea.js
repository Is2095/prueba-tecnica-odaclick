
import EditarTareaBD from "../controladores/conMongo/editarTarea_mono.js";

const EditarTarea = async (req, res) => {

    const { id, datos } = req.body;
    let datosFiltrados = {};

    for (const key in datos) {
        if (datos.hasOwnProperty(key) && datos[key] !== null && datos[key] !== undefined && datos[key] !== '') {
            datosFiltrados[key] = datos[key];
        };
    };

    try {
        if (Object.keys(datosFiltrados).length === 0) {
            res.status(404).json({error: true, message: 'no hay datos para actualizar'});
        } else {
            const tareaActualizada = await EditarTareaBD({id: id, datosFiltrados});
            if(tareaActualizada.error) {
                res.status(404).json({error: tareaActualizada.error, message: tareaActualizada.message});
            } else {
                res.status(200).json({data: tareaActualizada});
            };
        }
    } catch (error) {
        res.status(500).json({error: true, message: 'se produjo un error de conección'});
    };
};

export default EditarTarea;