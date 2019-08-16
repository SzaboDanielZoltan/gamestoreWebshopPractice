const http = require('http');
const path = require('path');
const GetHandler = require('./module/getHandler');
const PostHandler = require('./module/postHandler');
const PutHandler = require('./module/putHandler');
const DeleteHandler = require('./module/deleteHandler');

const port = 3210;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  switch (req.method.toLowerCase()) {
    case 'get':
      new GetHandler(req, res);
      break;
    case 'post':
      new PostHandler(req, res);
      break;
    case 'put':
      new PutHandler(req, res);
      break;
    case 'delete':
      new DeleteHandler(req, res);
      break;
    default:
      res.end('Invalid method');
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}.`);
});
