var fs = require('fs');
var input = fs.readFileSync('higu.txt').toString().split('');
var a = parseInt(input[0]);

 if(90 <= a <= 100){
     console.log('A');
} 
    else if(80 <= a <= 89){
        console.log('B');
} 
    else if(70 <= a <= 79){
        console.log('C');
        
} 
    else if(60 <= a <= 69) {
        console.log('D');
       } 
    
else {
    console.log('F');
 
}