const readline = require('readline');

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout  
});

let input = [];

rl.on('line', function(line) { // 한줄 씩 입력줄
    input.push(line);
}).on('close', function() { // 출력줄
    let x = Number(input[0]); //Number는 문자를 상수로 받아주는 것
    let y = Number(input[1]); //parseInt()와 비슷하다.


if (x > 0 && y > 0) {
    console.log('1');
}else if(x < 0 && y > 0) {
    console.log('2');
}else if(x < 0 && y < 0) {
    console.log('3');
}else if(x > 0 && y < 0) {
    console.log('4');
}

process.exit();
});



// *const는 상수취급하도록 변수를 선언
// *let은 var과는 다르게 변수를 스코프당 한번만 선언
// 또한 해당 스코프에서만 접근이 가능
// readline을 써줌으로 써, 입력줄과 출력줄을 구분한다.