const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];
let sum = 0;
let C = 0;
rl.on('line', function(line){
    input.push(line.split(' '));
}).on('close', function(){
    let sum = Number(input[0]);
    let num = [];
    for(let i =1; i <=sum; i++ ){
        num.push(input[i]);
    }
    
    for(let i =0; i < sum; i++){
        const A = parseInt(num[i][0]);
        const B = parseInt(num[i][1]);
        C += 1; // i값을 1로 잡으면 오류, 그래서  따로 변수 C를 선언하고 C를 증가시켜서 사용
        console.log("Case #"+C+": " + A + ' + ' + B + ' =',A+B);
        // A+B는 한 값이므로 앞에 ,를 붙여줘야 값이 들어감
    }
    process.exit(); 
});