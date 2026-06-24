require ('dotenv').config();
const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: process.env.host_db,
    database: process.env.database,
    password: process.env.password_db,
    user: process.env.user_db
});

conexion.connect((err)=>{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("Conexion exitosa");
    }
});