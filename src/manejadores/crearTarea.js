
import CrearTareaBD from "../controladores/conMongo/crearTarea_mongo.js";

const CrearTarea = async (req, res) => {

    const datosProducto = req.body;

try {
    if(!datosProducto.titulo) {
        res.status(404).json({error: true, message: 'se requiere el titulo de la tarea'})
    }
    const tareaCreadaBD = await CrearTareaBD(datosProducto);
    if(tareaCreadaBD.error) {
        res.status(404).json({error: true, message: tareaCreadaBD.message});
    } else {
        res.status(201).json({data: tareaCreadaBD._doc});
    };
    
} catch (error) {
    res.status(404).json(error.message)
}

};

export default CrearTarea;