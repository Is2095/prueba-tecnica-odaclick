
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from "body-parser";

import router_todo from '../routes/routers_todo.js';
import router_usuario from '../routes/routers_usuario.js';

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://localhost:3001');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Request-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE, PATCH'
    );
    res.header('X-Total-Count', "1000");
    next();
});

app.use('/api', router_todo);
app.use('/usuario', router_usuario);

export default app;
