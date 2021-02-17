let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]); // 윗줄 숫자 개수를 받아줌
let nums = []; // 2번째 줄을 받아줄 배열 생성   20 10 35 30 7 

nums = input[1].split(' ').map(x => Number(x)); // 빈방에 2번째 줄 띄어쓰기를 기준으로 값을 넣어줌
                        // map(x => +x); //map을 사용하여 변수들을 정수로 변환
let max = nums[0];
let min = nums[0];

for(let i = 1; i < num; i++) { 
      
    if(max < nums[i]){
        max = nums[i];
    }
    if(min > nums[i]){
        min = nums[i];
    }
}
console.log(min + ' ' + max);


