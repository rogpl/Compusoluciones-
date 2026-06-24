let mysql = require('mysql2');
let conexion = mysql.createConnection({
    host: "localhost",
    database: "compusoluciones_clientes",
    password: "",
    user: "root"
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