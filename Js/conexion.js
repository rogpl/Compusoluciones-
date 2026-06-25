import 'dotenv/config';
import mysql from 'mysql2/promise';

const conexion = mysql.createPool({
    host: process.env.host_db,
    database: process.env.database,
    password: process.env.password_db,
    user: process.env.user_db,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

try
{
const clienteconexion=await conexion.getConnection();
console.log("Conexión a la base de datos establecida correctamente.");
clienteconexion.release();
}
catch (err) 
{
    console.error("Error al conectar a la base de datos: ", err);
    throw err;
}

export default conexion;