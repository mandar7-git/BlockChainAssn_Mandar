const SHA256= require('crypto-js/sha256');
const read = require('readline-sync');

let string= read.question ("Enter the string\n");

const TARGET= '0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF' ;

let current=1 ;
let new_string=current+string ;

for (current=1;  ;current++){
    new_string=string+current ;
    if (SHA256(new_string).toString()<TARGET){
              break;
    }
}

console.log(current);
console.log(SHA256(new_string).toString());



