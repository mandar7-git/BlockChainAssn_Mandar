
var crypto = require('crypto');

var fs = require('fs');       // to work with files
const path = require('path'); // to work with files
  
function generateKeyFiles() {
  
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki', // for long term storage (recommended in official documentation)
            format: 'pem'  // Keys stored in pem format
        },
        privateKeyEncoding: {
        type: 'pkcs8', // for long term storage (recommended in official documentation)
        format: 'pem',  // Keys stored in pem format
        cipher: 'aes-256-cbc',
        passphrase: ''
        }
    });
       
    // Creating public and private key file 
    fs.writeFileSync("Public_Key_file", keyPair.publicKey);
    fs.writeFileSync("Private_Key_file", keyPair.privateKey);
}
  

generateKeyFiles();   // Run the function
// This function generated the two keys that have been uploaded as pem files ( Private_Key_file and Public_Key_file)



