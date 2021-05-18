
// This program takes data and signs it using Private key (whose location and name of file has to be provided)

var crypto = require ('crypto');
var fs = require('fs');  // to work with files
const path = require('path');  // to work with files
var readline = require ('readline-sync'); // to take input

let data = readline.question("Enter the message: ") // Taking message to be encrypted

var FileName = readline.question("Enter the name of Private Key file: "); 
var Directory_PK = readline.question("Enter Private Key directory: ");

var PrivateKey = fs.readFileSync(path.join(Directory_PK,FileName),'utf8'); // Reading the Private Key


const signature = crypto.sign("sha256", Buffer.from(data), {
	key: PrivateKey,
	padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
	passphrase:""
})

console.log(signature.toString("base64")); 
