const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');

const handleRequest = (req, res) => {
  switch (req.url) {
    case '/api':
      res.writeHead(200, {
        'Content-type': 'application/json',
      });
      res.end(data);
      break;
    default:
      res.end('404 Page not found');
  }
};

const server = http.createServer(handleRequest);

const port = 8080;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
