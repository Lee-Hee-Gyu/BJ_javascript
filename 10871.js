let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input2 = [];  
input2 = input[0].split(' '); // 첫째줄을 배열에 넣어줌

let all = Number(input2[0]); //10  // 첫째 줄에서의 0번방을 만들어줌
let stand = Number(input2[1]); // 5  // 첫째 줄에서의 1번방을 만들어줌
let a = []; // 숫자들  

a = input[1].split(' ');  // input의 0번방에는 첫째줄이 담겨져 있으니 1번방에 \n 후의 값들을 배열에 넣어줄 것

let ans = [];

for(let i = 0; i < all; i++) {

    if(stand > a[i]){
        ans += a[i] + ' ';
    }
    
}
console.log(ans);

