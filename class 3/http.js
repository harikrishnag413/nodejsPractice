
//web server: it takes req and serves response

const http= require('http');
const hostname= 'localhost'; //or 127.0.0.1
var port = 3000;
var server = http.createServer(function(request,response){
  response.statuscode =200;
  response.setHeader('content-type', 'text/plain');
  response.end('hellow world\n');
});
server.listen(port,hostname,function(){
  console.log('server running at http://' +':'+port+ '/');                          
});
