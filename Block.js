class Block{
constructor (timestamp, lasthash, hash, data){
      
    
        this.timestamp = timestamp ;
        this.lasthash = lasthash ;
        this.hash= hash;
        this.date = data;
    
        
        
    }
 toString() {
            var str =`\n Timestamp : ${this.timestamp} \n Lasthash : ${this.lasthash} \n Hash : ${this.hash} \n Data : ${this.data}`;
            return str ;
            
            
        }
}

    
module.exports = Block ;