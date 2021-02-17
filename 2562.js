let fs = require('fs');
let input = fs.readFileSync('higu.txt').toString(); //split(' ')이 안붙은 이유는 higu.txt에 값들이 '\n'으로 들어가 있기 때문에 필요x

let nums = input.split('\n').map(x => Number(x)); // 변수에 input 배열을 '\n'으로 받음
                        // map(x => +x); //map을 사용하여 변수들을 정수로 변환
                        // input[0]값을 주지 않은 이유는 값이 3으로 한정되기 때문.

                
let max = 0;    //여기서 input[0]을 주지않는 이유는 문제에서 자연수라고 주어졌기 때문에, 가능한것이고, 정수였다면 오류
                // 또한 input[0]의 안의 값이 for문 안에서 출력되지 않는다.
let maxnum= 0;

for(let i = 0; i < nums.length; i++){ 
    
    if(max < nums[i] ){
        max = nums[i];
        maxnum = i+1;
    }
}

console.log(max);
console.log(maxnum);

