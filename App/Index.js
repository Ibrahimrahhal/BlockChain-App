const express = require('express');
const app =express();
const bodyparse = require('body-parser');
const BlockChain = require('../BlockChain/Index.js');
const HTTP_Port = process.env.HTTP_PORT || 3001 ;
const bc = new BlockChain();
app.use(bodyparse.json());

app.get('/blocks',(req,res)=>{
   
    res.json(bc.chain);
    
    
    
});

app.post('/mine',(req,res)=>{
    try {
    bc.addBlock(req.body.data);
}
    catch { 
    console.log("couldn't add block");
}

console.log(`latest block ${bc.chain[bc.chain.length-1].toString()}` );
    res.json(bc.chain);
    
});

app.listen(HTTP_Port,()=> console.log(`listening on port ${HTTP_Port} `) );
