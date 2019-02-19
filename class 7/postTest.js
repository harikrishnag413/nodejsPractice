var request = require('supertest');
var app = require('./POSTcall.js').app
var expect = require('chai').expect;

describe('postRequestTest', function(){
  it('should send file deta', function (done) {
    request(app)
                 .post('/')
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
