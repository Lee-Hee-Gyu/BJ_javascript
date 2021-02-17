const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let inputs = [];
    let ans = '';
    let i = 0;


        while(i < input.length) {  //inputs의 안에 input의 배열을 넣어 주는 것이므로 input의 길이를 기준잡음

            inputs.push(input[i].split(' ')); // inputs에 input의 띄어쓰기 한줄 포함 배열을 넣어줌
            let sum = Number(inputs[i][0]) + Number(inputs[i][1]);
            
                ans += sum + '\n';
                i++;
            
        }
        console.log(ans);
 });