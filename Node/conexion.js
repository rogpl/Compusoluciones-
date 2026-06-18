// server.js - Esto corre 100% en el Servidor (Backend)

// 1. Cargamos una herramienta nativa de Node.js para crear servidores (http)
const http = require('http');

// 2. Configuramos el puerto de la computadora por donde escuchará el servidor
const PUERTO = 3000;

// 3. Creamos la lógica del servidor
const servidor = http.createServer((req, res) => {
  // Configuramos la respuesta para que acepte caracteres en español (UTF-8)
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  
  console.log("¡El servidor recibió una petición de la página web!");
  
  // Enviamos una respuesta simulada al frontend
  res.end("Respuesta desde el Backend de Node.js: ¡Usuario procesado con éxito!");
});

// 4. Encendemos el servidor para que empiece a escuchar
servidor.listen(PUERTO, () => {
  console.log(`Servidor de la empresa corriendo en http://localhost:${PUERTO}`);
});
