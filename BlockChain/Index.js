const Block =require('./Block.js');

class BlockChain {
    constructor(){
        this.chain =[Block.Genesis()]; 
    }
    addBlock(data){
        
        const lastBlock =this.chain[this.chain.length-1];
        let block = Block.mineblock(lastBlock,data);
        this.chain.push(block);
        return block;
        
    }
    
    
    
   static isValidChain(chain){
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.Genesis())) 
            return false;
        for(let i=1 ; i < chain.length;i++){
            var block =chain[i];
            var lastBlock = chain[i-1];
            
            
            if(block.lastHash !== lastBlock.hash 
               
               ||
               
               block.hash !== Block.blockHash(block)
              
              )
                
                return false ;
            
    
            
        }
        return true ;
        
    }
    
    replaceChain(newChain){
        if(newChain.length <= this.chain.length){
            console.log('received chain isnt longer than the current one');
            return ;
            
        }else if(BlockChain.isValidChain(newChain)){
            console.log('received chain is invalid') ;
            return ;
            
            
        }
        this.chain =newChain ;
        console.log('replacing the current chain with longer one');
        
        
    }
 
    
    
    
}
module.exports = BlockChain ;




