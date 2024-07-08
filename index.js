
import { PORT } from "./config.js";

import app from "./src/servidor/servidor.js";
import conexionMongo from './src/conexion_BD/conexion_mongo.js';

app.listen(PORT, () => {
    conexionMongo();
    console.log(`Servidor levantado en el puerto: ${PORT}`);
});