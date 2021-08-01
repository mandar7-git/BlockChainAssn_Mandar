This contains the messages sent by the mentors with regard to Assignment 1.



Howdy, Everyone!

Most of you have created the repository for assignments, and we are set to dive into the world of blockchains now. 

You must have attempted the selection test (:P) and would have encountered the question on mining. Ideally, you should have googled about it if you were unaware of the term and would have got some idea of what it is. Not an issue; if you didn't or got no idea about it even after searching, we will discuss what exactly it is now.
Suppose you have a string/an image/anything else. You convert it into binary. You put the bytes together. You now have a long sequence of bits. 

Now assume that this sequence of bits represents a number. A very large number. But still a finite positive integer.

Suppose you have a mathematical function f(x): Z->[1,100]. This function can take any integer as the input, but always produces the output as an integer between 1 and 100. It is given that this function produces a uniform distribution. 

So you give this function an integer as an input. What is the probability that the output will be 5?
1/100 ?

What is the probability that the output will be less than or equal to 5?
1/20 ?

Let's call 5 our target. Now suppose you want to throw random numbers into the function as input, and you want the output to be less than or equal to our target (which is 5). What is the expected number of times you'll have to try?
20 ?

Now suppose you decrease the target to 4. What is the expected number of times you'll have to try to find an integer x such that f(x)<=target?
25 ?

Thus, now you have to try harder (do more work) to find such a number.
Now suppose you increase the target to 10. What is the expected number of times you'll have to try to find an integer x such that f(x)<=target?
10 ?

Now you have to do less work to find such a number.

This is the essence of mining. You try to find such an input for a function which produces an output that is less than the target. The function used is a hash function, like the SHA-256 hash function. It produces 256 bits as the output (hence the name). If you represent the bytes as an integer, it would lie in the range [0, 2^256]. The number is usually written in the hexadecimal format. So the hash value can range from`0x0000000000000000000000000000000000000000000000000000000000000000` to 
`0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF`. But the hash function can take any sequence of bytes as input.
Also, if you change even a single bit in the input, the generated output is very different from the earlier output. For example: 
`SHA256("hackeryg1") = 6f2944d2f668f4a5f167bfd6aa451d55ec9ff14fd2a4ac5fa1c19a09bd82658f
SHA256("hackeryg2") = 41a82375fb23603aeb2129e6d05e2b4eb63b576db435f8e4ff2ad62ad4200fda
SHA256("hackeryg3") = 5647d6e175819959dfb755b60855ccc5897c10ee3413a845fb28d369aa05229a`

Here, we had some constant data ("hackeryg"), and a changing value (the number at the end). Mining is the process of finding this changing value that when combined with our data ("hackeryg" in our case) will produce an output below the target. Since the range of SHA256 hash function is huge, the target chosen is very high. If we chose the target to be
`0x0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF`, the smallest positive integer that satisfies out target is 299248.
`SHA256("hackeryg299248") = 0000380514127e83559de020c07945d266632b5bef7673c7c924d189b81db4ef`
As soon as we have found this magic number 299248, we have achieved success. 

Notice that we are still left to discuss the utility of this mining process in the blockchains which we will be discussing in the coming weeks.

