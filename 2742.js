const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

const num = Number(input);
let sun = '';

for(let i=num; i>=1; i--){
    sun += i + "\n";
 }
console.log(sun);

// 출력형식 오류와 시간초과로 인해 굉장히 많은 시간을
// 뺏긴 문제
// 시작하는 값을 넣어줄 num 함수를 선언, sun이라는 빈 변수
// 선언하여, for문을 통해 값을 출력이아닌 넣어줌
// 마지막에 sun을 콘솔로 출력