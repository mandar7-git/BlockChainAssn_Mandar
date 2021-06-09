const fs= require("fs");
const hash= require("crypto-js/sha256");
const readlineSync= require("readline-sync");
const path= require('path');
const time= require('nano-time');
const sign  = require("crypto");
const timeBigInt= BigInt(time());
//console.log(time());
//console.log(timeBigInt);

var BinCurrTimeLength=timeBigInt.toString(2).length ;
var BinCurrTime="";

// The current time shoud exactly be 64 bits, so adding zeroes in the beginning (We must add [64-(BinCurrTimeLength)] zeroes)

for (let i=0;i<(64-BinCurrTimeLength);i++)
  BinCurrTime+='0';

BinCurrTime+=timeBigInt.toString(2);

//console.log(BinCurrTime);


var InputCount=readlineSync.question("Enter the number of inputs: ");
var BinInputCount="";
// Adding the required zeroes to make it 32 bits

for (let j=0;j<(32 - parseInt(InputCount).toString(2).length);j++)
    BinInputCount+='0';

BinInputCount+=parseInt(InputCount).toString(2);

//console.log(BinInputCount);


var InputData="";

for (let i=1;i<=parseInt(InputCount);i++){

    console.log("Enter the transaction ID in hex format for input",i,": ")

    var TrID=readlineSync.question();

    InputData+= TrID ;

    console.log("Enter index of output for input",i,": ")

    var index=readlineSync.question();
    var BinIndex="";

    // Adding the required zeroes to make it 32 bits
  for (let i=0;i<(32 - parseInt(index).toString(2).length) ; i++)
    BinIndex+='0';

    BinIndex+=parseInt(index).toString(2);

    InputData+=BinIndex ;

    var signatureLength= readlineSync.question("Enter the length of the signature: ");
    var BinSignLength="";

    // Adding the required zeroes to make it 32 bits
    for (let i=0;i<(32-parseInt(signatureLength).toString(2).length);i++)
      BinSignLength+='0';

      BinSignLength+=parseInt(signatureLength).toString(2);

    InputData+=BinSignLength ;
    
    var signature=readlineSync.question("Enter the signature in hex format: ");

    InputData+=signature ;  

    
}

//console.log(InputData);

var OutputCount=readlineSync.question("Enter the number of outputs: ");
var BinOutputCount="";
// Adding the required zeroes to make it 32 bits

for (let j=0;j<(32 - parseInt(OutputCount).toString(2).length);j++)
    BinOutputCount+='0';

BinOutputCount+=parseInt(OutputCount).toString(2);

var OutputData="";

for (let i=1;i<=parseInt(OutputCount);i++){

    console.log ("Enter the number of coins for output",i,":");
    var coins=readlineSync.question();

    var BinCoins="";
    // Adding the required zeroes to make it 64 bits

    for (let i=0;i<(64-parseInt(coins).toString(2).length);i++)
      BinCoins+='0';

      BinCoins+=parseInt(coins).toString(2);

      OutputData+=BinCoins ;

      console.log("Enter the path of the Public Key for input",i,":");  
      var pubKeyPath=readlineSync.question();

      var PubKey=fs.readFileSync(pubKeyPath,'utf8');

      var PubKeyLen=PubKey.length ;
      var BinPubKeyLen="" ;
      // Adding the required zeroes to make it 32 bits

      for (let j=0;j<(32-PubKeyLen.toString(2).length);j++)
        BinPubKeyLen+='0';

      BinPubKeyLen+=PubKeyLen.toString(2);  
      
      OutputData+=BinPubKeyLen ;

      //console.log(PubKey); 

      OutputData+=PubKey ;



}

//Concatenating 
var transactionData= BinCurrTime + BinInputCount + InputData + BinOutputCount + OutputData;

var transactionID= hash(transactionData).toString();
transactionID+='.dat';

fs.writeFileSync(transactionID,transactionData);














