/*var module = { exports: {} };
var exports = module.exports;

add3 = function(x,y){
//add2=x+y;
return x+y;
}*/

module.exports = function(x,y){
  this.x=x;
  this.y=y;
  this.sum = function(){
    return this.x+this.y;
  }
}
