const http = require('http');

// Creamos una función que nos maneje las request y responses
const handleRequest = (req, res) => {
  res.end('Hello World!'); // usando el response podemos enviar un mensaje al browser
};

// Creamos el servidos gracias al metodo .createServer() del metodo 'http' y le pasamos como parametro una callback function
const server = http.createServer(handleRequest);

const port = 8000;

// Hacemos que el servidor se aloje en el puerto 8000 de nuestra computadora
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
