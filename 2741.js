let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let ans = ''; // ans라는 변수에 빈 값 선언

for(let i = 1; i <= input; i++) { // input으로 받는 정수 바로 선언 가능
    ans += i + "\n"; // ans안에 값들 바로 줄 뛰기 후 저장
}
console.log(ans);

// for문을 돌려 하나씩 출력하게 되면 시간초과로 인해 
//값을 바로 저장 후 한번에 출력하는 방식을 쓰면 시간충족