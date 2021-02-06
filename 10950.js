const readline = require('readline');
const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line.split(' '));
}).on('close', function() {
    const T = parseInt(input[0]); //줄의 개수를 정수로 받는다.
    let number = []; // 배열 안에 새로운 2번째 배열 생성
    for(i = 1; i <= T; i++) { // 0번에 줄의 개수를 받아서 1번방부터 시작
        number.push(input[i]); // 2번째 배열안에 한줄씩 넣는다.
    } 
    for(i = 0; i < T; i++) {
        const A = parseInt(number[i][0]); // i번째 배열안에서의 0번방
        const B = parseInt(number[i][1]); // i번째 배열안에서의 1번방

        console.log(A+B);
    } 
    process.exit(); // readline끝내기 (ctrl+C)
});