const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(input[0]);

let sum = 0; // sum값을 0으로 초기화

for(let i = 1; i <= a; i++) {
     sum += i;
} 
console.log(sum);

//초기화를 하지 않아 오류가 났었다. 
//변수의 초기화는 중요하다.