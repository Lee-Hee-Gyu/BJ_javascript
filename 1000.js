var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);





// fs 파일시스템
// require fs에 있는 파일을 요구 한다.
// input = fs.readFileSync('/dev/stdin')
// '/dev/stdin' 백준에서 입력시스템
// toString().split(' ');
// a >> input 
// parseInt  입력받는 수를 Int로 받는다.
// parseInt(input[0]);
// parseInt(input[1]);
// var a + var b
