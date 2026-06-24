const db= require('./conexion.js');

async function guardarCliente(nombre, correo, telefono, contraseña)
{
    const query = 'INSERT INTO cliente (nombre, correo, telefono, contraseña) VALUES (?,?,?,?)';
    try 
    {
        const [resultado]=await db.query(query, [nombre, correo, telefono, contraseña]);
        console.log("Cliente guardado con éxito. ID asignado: ",resultado.insertId);
        return resultado.insertId;
    }
    catch (error)
    {
        console.error("Error al guardar el cliente en la base de datos: ",error);
        throw error;
    }
}