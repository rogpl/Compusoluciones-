const http = require('http');

const PUERTO = 3000;

const servidor = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  
  console.log("¡El servidor recibió una petición de la página web!");
  
  res.end("Respuesta desde el Backend de Node.js: ¡Usuario procesado con éxito!");
});

servidor.listen(PUERTO, () => {
  console.log(`Servidor de la empresa corriendo en http://localhost:${PUERTO}`);
});
