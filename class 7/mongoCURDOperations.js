var express = require('express');
var app = express();
var fs=require('fs');
var MongoClient = require('mongodb').MongoClient;
var url= 'mongodb://localhost:27017';

app.get('/', function(req, res){

  MongoClient.connect(url, function(err, client){

     var client = client.db('order');
     console.log('connected correctly to server');

     if(!err){var student= db.collection('amount')}
        hari.find({}).toArray(function(err,docs){
          console.log(docs); db.close();
        }});
});

app.listen(3000,function(){
  console.log('hey!! server started at port 3000!');
})

exports.app = app;
