let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input2 = [];
input2 = input[0].split(' '); // 첫째줄 대입

let all = Number(input2[0]); //10  
let stand = Number(input2[1]); // 5
let a = []; // 숫자들

a = input[1].split(' ');

let ans = [];

for(let i = 0; i < all; i++) {

    if(stand > a[i]){
        ans += a[i] + ' ';
    }
    
}
console.log(ans);

