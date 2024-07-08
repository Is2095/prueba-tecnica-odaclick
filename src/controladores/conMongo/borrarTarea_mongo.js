
import TareaModelo from '../../ModelosBD/modeloMongo.js';

const BorrarTareaBD = async (id) => {

    const tareaBorrada = await TareaModelo.findByIdAndDelete({_id: id});

    if(tareaBorrada === null) {
        return {error: true, message: 'la tarea a borrar no existe'};
    } else {
        return tareaBorrada;
    };
};
export default BorrarTareaBD;