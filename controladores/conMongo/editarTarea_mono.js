
import TareaModelo from '../../ModelosBD/modeloMongo.js';

const EditarTareaBD = async (data) => {

    const {id, ...datosNuevos} = data;
        const tarea = await TareaModelo.findByIdAndUpdate({_id: id}, datosNuevos.datos, {new: true})
        console.log(tarea);
        if(!tarea) {
            return {
                error: true,
                message: 'no se encontró la tarea a actualizar'
            }
        } else {
            return tarea
        };
}

export default EditarTareaBD;