import express from "express";
import {getPort} from "./app/utils/portUtils.js";
import swaggerUi from "swagger-ui-express";
import {swaggerDoc} from './app/openapi/openapi.js';
import {RESTModule} from "./app/RESTModule.js";


const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc,{explorer: true}));



app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/test',  (req, res) => {
    res.status(200);
    res.send('Application opérationnelle !')
})

const REST = new RESTModule("REST server", app, getPort());
REST.init();
