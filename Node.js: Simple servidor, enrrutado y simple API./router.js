const http = require('http');

const handleRequest = (request, response) => {
  switch (request.url) {
    // en cada case definimos las rutas
    case '/':
      response.end('Bienvenido a la página principal!');
      break;
    case '/sobre-nosotros':
      response.end('Sobre nosotros');
      break;
    default: // En el default mandamos un 404 para las rutas que no esten definidas
      response.end('404 Page not found');
  }
};

const server = http.createServer(handleRequest);

const port = 8080;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
