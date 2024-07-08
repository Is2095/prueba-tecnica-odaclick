
import TareaModelo from '../../ModelosBD/modeloMongo.js';

const EditarTareaBD = async (data) => {

    const {id, datosFiltrados} = data;

        const tarea = await TareaModelo.findByIdAndUpdate({_id: id}, datosFiltrados, {new: true});
        if(!tarea) {
            return {
                error: true,
                message: 'no se encontró la tarea a actualizar'
            };
        } else {
            return tarea;
        };
}

export default EditarTareaBD;