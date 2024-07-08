
import mongoose from 'mongoose';
import { MONGODB_URL } from '../config.js';

if (!MONGODB_URL) {
    throw new Error("URL de conección no se encontró");
};

const conexionMongo = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URL);
        if (connection.readyState === 1) {
            console.log('Mongodb conectado');
            return Promise.resolve(true);
        }
        return Promise.reject(false);
    } catch (error) {
        console.log(error);
        return Promise.reject(false);
    };
};
export default conexionMongo;