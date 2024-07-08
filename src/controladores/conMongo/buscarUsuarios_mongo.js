
import UsuarioModelo from '../../ModelosBD/modeloUsuarioMongo.js'

const BuscarUsuariosBD = async (dato) => {

    if(dato.email) {
        const usuario = await UsuarioModelo.findOne({email: dato.email})
        if(usuario === null) {
            return {error: true, message: 'no se encontró al usuario'}
        } else {
            return {data: usuario}
        }
    }else {
        const usuarios = await UsuarioModelo.find({});
    if(usuarios.length === 0){
        return {error: true, message: 'no hay usuarios'}
    } else {
        return {data: usuarios};
    };
};
    }
    
export default BuscarUsuariosBD;