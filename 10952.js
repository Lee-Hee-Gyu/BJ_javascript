const fs = require('fs');
const input = fs.readFileSync('higu.txt').toString().split('\n');

let inputs = [];
let ans = '';
let nozero = true;
let i = 0;

while(nozero) {
    inputs.push(input[i].split(' '));
    let sum = Number(inputs[i][0]) + Number(inputs[i][1]);
    if(sum === 0){
        nozero = false;
    }
    else{
        ans += sum + '\n';
        i++;
    }
}
console.log(ans);