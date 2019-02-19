var express = require('express');
var app = express();
var fs=require('fs');
var MongoClient = require('mongodb').MongoClient;
var url= 'mongodb://localhost:27017';

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.json());

app.post('/book/:id', function(req,res){
console.log(req.params);
console.log(req.body);
console.log(req.query);

  MongoClient.connect(url, function(err, client){

     var db = client.db('hari');
     console.log('connected correctly to server');

     if(!err){var id= db.collection('movies')}
        id.insert({"title":"ff9"},function(err,result){
          console.log(result);
          console.log(err);
        })//.toArray(function(err,docs){
        //  console.log(docs);
          client.close();
        //});
  });

});

app.get('/', function(req, res){

  MongoClient.connect(url, function(err, client){

     var db = client.db('hari');
     console.log('connected correctly to server');

     if(!err){var id= db.collection('movies')}
        id.find({}).toArray(function(err,docs){
          console.log(docs); client.close();
        });
});
});

app.put('/', function(req, res){

  MongoClient.connect(url, function(err, client){

     var db = client.db('hari');
     console.log('connected correctly to server');

     if(!err){var id= db.collection('movies')}
        id.Update({"_id" : ObjectId("5c6a7b73622feb6bc19f27b2")},{"title":"ffff"},{upsert:true},function(err,result){
          console.log("put successfully");
          console.log(err);
          client.close();
        });//.toArray(docs);
        //toString(function(err,docs){
        //  console.log(docs);

      //  });
});
});

app.delete('/', function(req, res){

  MongoClient.connect(url, function(err, client){

     var db = client.db('hari');
     console.log('connected correctly to server');

     if(!err){var id= db.collection('movies')}
        id.remove({"title":"ff4"},function(err,result){
          console.log("delete successfully");
          console.log(err);//.toArray(function(err,docs){
                //console.log(docs);
                client.close();
       });
});
});

app.listen(3000,function(){
  console.log('hey!! server started at port 3000!');
})

exports.app = app;
