
import CrearTareaBD from "../controladores/conMongo/crearTarea_mongo.js";

const CrearTarea = async (req, res) => {

    const datosProducto = req.body;

try {
    if(!datosProducto.titulo) {
        throw new Error('se requiere el titulo de la tarea')
    }
    const tareaCreadaBD = await CrearTareaBD(datosProducto);
    if(tareaCreadaBD.error) {
        res.status(404).json({message: tareaCreadaBD.message});
    } else {
        res.status(201).json(tareaCreadaBD._doc);
    };
    
} catch (error) {
    res.status(404).json(error.message)
}

};

export default CrearTarea;