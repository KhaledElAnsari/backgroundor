// Reference: http://stackoverflow.com/questions/16333790/node-js-quick-file-server-static-files-over-http


// Node.js built-in modules
var http = require('http'), // http module
    fs = require('fs'), // file system module
    path = require('path');

var server = http.createServer(function(request, response) {
  var filePath = "./test" + request.url; // get the file path

  if (filePath == './test/') filePath = "./test/index.html";
  var extname = path.extname(filePath); // get file extention

  // if(request.url.match(/\?/g)) return;
  if(extname === ".ico") return; // to avoid the favicon undefined file

  var contentType;
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    default:
      contentType = 'text/html';
      break;
  }

  fs.readFile(filePath, function(err, html) {
    if (err) {
      throw err;
    }
    response.writeHeader(200, {"Content-Type": contentType});
    response.write(html);
    response.end();
  });
});

server.on('listening', function() {
  console.log('\nlistening on http://localhost:3001');
  process.stdout.write("Unit testing begin: \n\n");
});
server.listen(3001).on("error", function(e) {
  console.log(e);
});

module.exports = server;
