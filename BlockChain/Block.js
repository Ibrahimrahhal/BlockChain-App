const SHA256 =require('crypto-js/sha256') ;

class Block{
constructor (timestamp, lasthash, hash, data){
      
    
        this.timestamp = timestamp ;
        this.lasthash = lasthash ;
        this.hash= hash;
        this.data = data;
    
        
        
    }
 toString() {
            var str =`
Timestamp : ${this.timestamp} 
Lasthash : ${this.lasthash} 
Hash : ${this.hash} 
Data : ${this.data}`;
            return str ;
            
            
        }
    static Genesis()
    {
        
        return new this("Genesis","fdfgbstg-rtg56e4g5654fd64g","kasjbdufs5df46g464gr48g4-df9g48df4g","hi");
        
        
    }
    static mineblock(lastblock,data){
       var date= Date.now();
        var lasthash=lastblock.hash;
     var   hash=Block.hash(date,lasthash,data);
        return new this(date,lasthash,hash,data);
        
        
    }
    static hash(timestamp, lasthash ,data){
        return SHA256(`${timestamp}${lasthash}${data}`).toString();
        
        
    }
    
    static blockHash(blck){
        return SHA256(`${blck.timestamp}${blck.lasthash}${blck.data}`).toString();
        
        
    }
}


    
module.exports = Block ;