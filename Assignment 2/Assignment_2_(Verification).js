
var crypto = require('crypto');
var fs = require('fs');  // to work with files
const path = require('path');  // to work with files
var readline = require('readline-sync'); // to take input

var FileName = readline.question("Enter the name of Public Key file: ");
var Directory_PK = readline.question("Enter Public Key directory: ");

var PublicKey = fs.readFileSync(path.join(Directory_PK,FileName),'utf8');

let OriginalText = readline.question("Enter the unencrypted message to be verified: ");
let EncryptedText = readline.question("Enter the encrypted text you got using your Private Key: ");

const verify = crypto.verify(
	"sha256",
	Buffer.from(OriginalText),
	{
		key: PublicKey,
		padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
	},
	Buffer.from(EncryptedText)
)
// Returns: <boolean> true or false depending on the validity of the signature for the data and public key (As per official documentation)

if (verify)
  console.log("Signature Verified!");

else 
  console.log("Verification failed");









