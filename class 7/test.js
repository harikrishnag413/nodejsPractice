var request = require('supertest');
var app = require('./GETcall.js').app
var expect = require('chai').expect;

describe('getRequestTest', function(){
  it('should fetch file details', function (done) {
    request(app)
                 .get('/')
                .expect(200)
                .expect('content-type', 'text/html; charset=utf-8')
                .end(function(err,res){
                  if(err){
                    return done(err);
                  }
                  done();
                })
  })
});
