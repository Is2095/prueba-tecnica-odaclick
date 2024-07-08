
import TareaModelo from '../../ModelosBD/modeloMongo.js';

const CrearTareaBD = async (datosTarea) => {

        const tareaExistente = await TareaModelo.findOne({ titulo: datosTarea.titulo });
        if (tareaExistente !== null) {
            return {
                error: true,
                message: 'producto ya creado'
            }
        } else {
            const tareaCreadaBD = new TareaModelo(datosTarea);
            const tareaGuardaBD = await tareaCreadaBD.save();
            return  tareaGuardaBD 
        };
};

export default CrearTareaBD;