
import UsuarioModelo from '../../ModelosBD/modeloUsuarioMongo.js'

const CrearUsuarioBD = async (datos) => {

    const usuarioExistente = await UsuarioModelo.findOne({email: datos.email});
console.log(usuarioExistente);
    if(usuarioExistente !== null) {
        return { error: true, message: 'problemas con los datos el usuario' }
    } else {
        const usuarioCreadoBD = new UsuarioModelo(datos);
        const usuarioGuardadoBD = await usuarioCreadoBD.save();
        return usuarioGuardadoBD;
    };
};
export default CrearUsuarioBD