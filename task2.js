const http = require('http')
const PORT= process.env.PORT || 3000
 


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h1>hello world </h1>`);
  res.end();
}).listen(PORT); 