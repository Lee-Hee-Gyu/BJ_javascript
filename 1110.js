const fs = require('fs');
const input = fs.readFileSync('higu.txt').toString().split(' ');

let number = input;
let count = 0;
let sum;
//  몇사이클 input == number

while(true) {

    count++; // 사이클 + 
    sum = Math.floor(number / 10) + number % 10; // 2 + 6  *여기에서 주어지는 값이 10보다 작으면이 성립됨   
    number = (number % 10) * 10 + sum % 10;
    if(input == number){ break;}
}
console.log(count);
