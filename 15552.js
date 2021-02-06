let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = parseInt(input[0]);
let num = [];
let ans = '';

for(let i = 1; i <=count; i++) {
    num = input[i].split(' ');
    ans += parseInt(num[0]) + parseInt(num[1]) + "\n";
}

console.log(ans);

//빠른 A+B구하기  
// num이라는 배열 생성 -> input[i]배열을 넣어줌(띄어쓰기를 한줄로)
// ans라는 변수에 한줄씩 저장 
// ans출력