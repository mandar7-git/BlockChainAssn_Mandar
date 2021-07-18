const express=require('express');
const crypto = require ('crypto');
const app= express();
const PORT=8787 ;

app.use(express.json());


app.post('/hash', function(request,response){

    var toBeHashed= request.body.data ;
    //response.send(toBeHashed);
    var hashed=crypto.createHash('sha256').update(toBeHashed).digest('hex');
    //response.send("Hello World");

     response.json({hash: hashed});


})

app.listen(PORT);
    