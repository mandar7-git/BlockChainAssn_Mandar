const fs= require("fs");
const hash= require("crypto-js/sha256");
const readlineSync= require("readline-sync");
const path= require('path');
const time= require('nano-time');
const crypto = require("crypto");
const timeBigInt= BigInt(time());
const SHA256= require('crypto-js/sha256');

var indexOfBlock=readlineSync.question("Enter the index of the block: ");
var parentHash=readlineSync.question("Enter the hash of the parent block:");
var targetValue=readlineSync.question("Enter the target value: ");



var FileName = readlineSync.question("Enter the name of the file storing transaction data: "); 
var Directory = readlineSync.question("Enter it's directory: ");

var blockData = fs.readFileSync(path.join(Directory,FileName),'utf8'); 
var blockBodyHash=SHA256(blockData);

var combinedData= indexOfBlock.toString()+parentHash.toString()+blockBodyHash.toString()+targetValue.toString() ;

var i=0;
var nonce=0 ;

var timeInitial=timeBigInt ;
var timeTaken=0;

for ( i=0; ;i++){

    var timestamp=timeBigInt.toString() ;
    var compare=combinedData+timestamp+i ;
    var compareHash= crypto.createHash('sha256').update(compare).digest('hex') ;

    if (compareHash<targetValue.toString())
{
    nonce=i ;
    
    console.log("Time taken: ",(timeBigInt-timeInitial));
    break;


}
}

console.log("Index: ",indexOfBlock);
console.log("Parent Hash: ",parentHash);
console.log("Block Body Hash: ",blockBodyHash);
console.log("Target value: ",targetValue);
console.log("Timestamp: ", timeBigInt);
console.log("Nonce: ",nonce);







//console.log(blockData);
