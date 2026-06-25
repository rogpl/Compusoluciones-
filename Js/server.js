import 'dotenv/config';
import express from 'express';
import {guardarCliente} from './guardar_cliente.js';

const server = express();
server.use(express.urlencoded({ extended: true }));

server.post('/guardar_cliente', async (req, res) => {
    const {nombre, correo, telefono, contraseña}=req.body;

    try
    {
        const idCliente= await guardarCliente(nombre, correo, telefono, contraseña);
        res.send(`Formulario procesado. Cliente guardado con ID: ${idCliente}`);
    }
    catch (err)
    {
        console.error("Error capturado en la ruta: ", err);
        res.status(500).send(`Error detallado: ${err.message||err}`);
    }
})

server.listen(3000);