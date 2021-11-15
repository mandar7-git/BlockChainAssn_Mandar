# Blocks_and_Chains-ACA
This project was offered by Association for Computing Activities (ACA), IIT Kanpur to first-year UG students. 

## [Assignment 1](./Assignment%201)

It was based on **finding the nonce** for a given string. We had to write a program that takes some data as string input. Then it tries to find a positive number x such that when x is appended to the end of the string, the SHA256 hash of this new string is less than the target, which is      
`0x0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF`.

The [code](./Assignment%201/Assignment_1.js) logs the required nonce and the final hash of the string for you!

The related [theory](./Assignment%201/theory.md).

## [Assignment 2](./Assignment%202)

It was based on **verifying signatures**. We had to verify if the public key can decrypt the encrypted text, and that the decrypted text was equal to the unencrypted text provided by the user. 
- [Assignment 2(Key pair generation).js](https://github.com/mandar7-git/Blocks_and_Chains-ACA/blob/main/Assignment%202/Assignment%202%20(Key%20pair%20generation).js) generates the Public and Private keys.
- [Assignment 2(Signing).js](https://github.com/mandar7-git/Blocks_and_Chains-ACA/blob/main/Assignment%202/Assignment_2_(Signing).js) signs a given message with the Private key.
- [Assignment 2(Verification).js](https://github.com/mandar7-git/Blocks_and_Chains-ACA/blob/main/Assignment%202/Assignment_2_(Verification).js) checks if a given encrypted message decrypted using the Public Key matches with the original message (before signing).

## [Assignment 3](./Assignment%203)

[Assignment 3.js](https://github.com/mandar7-git/Blocks_and_Chains-ACA/blob/main/Assignment%203/Assignment%203.js) file takes inputs to create a `.dat` file containing the **hash of the Transaction data**.

## [Assignment 5](./Assignment%205)

Given the index of the block, the hash of the parent block, the target value and a binary file which contains the block body, [Assignment5.js](https://github.com/mandar7-git/Blocks_and_Chains-ACA/blob/main/Assignment%205/Assignment5.js) calculates the **block header** for this block and finds a suitable **nonce** value. 

## [Assignment 6](./Assignment%206)

Aim was to create a simple **web server** listening on port 8787 with an endpoint which calculates the **SHA-256 hash** of the given string, converts it to hexadecimal representation, and returns it as JSON encoded data. [Assignment6.js](https://github.com/mandar7-git/Blocks_and_Chains-ACA/blob/main/Assignment%206/Assignment%206.js) contains the relevant code.













