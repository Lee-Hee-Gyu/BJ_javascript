var fs = require('fs');
var index = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(index[0]);
var b = parseInt(index[1]);
var c = parseInt(index[2]);
    
console.log((a+b)%c);
console.log(((a%c)+(b%c))%c);
console.log((a*b)%c);
console.log(((a%c)*(b%c))%c) ;
 

