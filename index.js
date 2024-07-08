
import { PORT } from "./config.js";

import app from "./servidor/servidor.js";
import conexionMongo from './conexion_BD/conexion_mongo.js'

app.listen(PORT, () => {
    conexionMongo();
    console.log(`Servidor levantado en el puerto: ${PORT}`);
});