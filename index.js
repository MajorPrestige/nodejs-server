const http = require('http');
const fs = require('fs');

let refreshCounter = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    fs.createReadStream('./assets/favicon/favicon.png').pipe(res);
    return;
  }

  refreshCounter++;

  switch (req.url) {
    case '/portfolio':
      res.write('PORTFOLIO ' + refreshCounter);
      break;

    case '/socials':
      res.write('SOCIALS ' + refreshCounter);
      break;

    default:
      res.write('HOME ' + refreshCounter);
      break;
  }

  res.end();
});

server.listen(7777);
