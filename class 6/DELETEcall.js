var express = require('express');
var app = express();
var fs=require('fs');

app.delete('/', function (req, res){

  //const path = './input1.txt'

  fs.uplink('path/input1.txt', function(err){
    if(err){response=err;}
    else{
      response="Delete successfull";
     }
     res.send(response);
  })
});

app.listen(3000, function (){
  console.log('Hey!! server started at port 3000');
});
