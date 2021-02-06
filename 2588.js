var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = b.toString().split(''); // b안의 값을 toString으로 문자로 받아서
                                // split을 사용해 한 숫자씩 받는다.

console.log(a*c[2]);
console.log(a*c[1]);
console.log(a*c[0]);
console.log(a*b);


// 배열을 다른 변수에 하나씩 저장하는 방법을 알았다.
// 의외로 간단했던 문제














