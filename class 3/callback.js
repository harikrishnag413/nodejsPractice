var add=function(a,b) {return a+b;}
var total=add(1,2);
console.log(total);
var add=function(a,b,callback){callback(a+b)}
add(1,2,function(result){console.log(result+5);});
