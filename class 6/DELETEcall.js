var express = require('express');
var app = express();
var fs=require('fs');

app.get('/', function (req, res){

  fs.writeFile('input.txt', '', function(err){
    if(err){response=err;}
    else{
      response="write successfull";
     }
     res.send(response);
  })
});

app.listen(3000, function (){
  console.log('Hey!! server started at port 3000');
});
