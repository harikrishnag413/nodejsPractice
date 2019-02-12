var express = require('express');
var app = express();
var fs=require('fs');
//bodyParser is a middleware it will invoke before the actual api is invoked
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.json());

app.post('/', function(req,res){

  fs.writeFile('input1.txt', 'req.body', function(err){
    if(err){response=err;}
    else{
      response="write successfull";
     }
     res.send(response);
  })
})

app.listen(3000,function(){
  console.log('Hye!! Server started at port 3000')
  })

exports.app=app;
