
import TareaModelo from '../../ModelosBD/modeloMongo.js';

const EstadoTareaBD = async (id) => {

    const tarea = await TareaModelo.findById({_id: id});
    if(!tarea)  {
        return { error: true, message: 'error al conseguir cambiar estado de la tarea'};
    } else {
        const estado = !tarea.estado;
        const estadoCambiado = await TareaModelo.findByIdAndUpdate({_id: id}, {estado: estado}, {new: true});

        if(estado !== estadoCambiado.estado) {
            return {error: true, message: 'error al cambiar el estado'};
        } else {
            return {id: estadoCambiado._id, estado: estadoCambiado.estado};
        };
    };
};

export default EstadoTareaBD