const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = String(); //숫자를 문자열로 받는다.

for(let i = 1; i <= input; i++){
    
    a += '*'; // a의 값이 증가하면서 *추가
    console.log(a); 

 }