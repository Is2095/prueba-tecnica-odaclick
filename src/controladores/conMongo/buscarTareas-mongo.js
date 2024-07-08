
import TareasModelo from '../../ModelosBD/modeloMongo.js'

const BuscarTareasBD = async () => {
    const tareas = await TareasModelo.find({})
    if(tareas.length === 0) {
        return {error: true, message: 'no hay tareas guardaas'};
    } else {
        return {data: tareas}
    }
};

export default BuscarTareasBD;