import EstadoTareaBD from "../controladores/conMongo/estadoTarea_mongo.js";


const EstadoTarea = async (req, res) => {

    const { id } = req.body;

    try {
         if (!id) {
        res.status(404).json({ error: true, message: 'error al obtener la identificación' })
    } else {
        const cambioEstadoTarea = await EstadoTareaBD(id)
        res.status(200).json(cambioEstadoTarea)
    }
    } catch (error) {
       res.status(500).json({message: 'error de conección'})
    }
    

}
export default EstadoTarea;