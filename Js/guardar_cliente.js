import db from './conexion.js';

export async function guardarCliente(nombre, correo, telefono, contraseña)
{
    const query = 'INSERT INTO cliente (nombre, correo, telefono, contraseña) VALUES (?,?,?,?)';
    try 
    {
        const [resultado]=await db.query(query, [nombre, correo, telefono, contraseña]);
        console.log("Cliente guardado con éxito. ID asignado: ",resultado.insertId);
        return resultado.insertId;
    }
    catch (err)
    {
        console.error("Error al guardar el cliente en la base de datos: ",err);
        throw err;
    }
}