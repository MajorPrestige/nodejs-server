const http = require('http');

let refreshCounter = 0;

const server = http.createServer((req, res) => {
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
