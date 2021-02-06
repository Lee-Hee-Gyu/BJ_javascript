var fs = require('fs');
var input = fs.readFileSync('higu.txt').toString().split(' ');
var H = parseInt(input[0]);
var M = parseInt(input[1]);

M -= 45; // H는 항상 -45분을 선언

if( M < 0) { 
    H--; // H값을 -1한 후 출력
    M += 60; 
     

    if(H == -1) {
        H = 23;
    }
}

console.log(H + ' ' + M);