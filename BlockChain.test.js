const BC = require('./Blockchain.js');
const block = require('./Block.js');
describe("Blockchain" , ()=>{
    
    let bc ;
    
    
    
    
    beforeEach(() => {
        bc =new BC();
    });
    
    
    
    
    it('start with genesus block',()=>{ expect(bc.chain[0]).toEqual(block.Genesis()); 
    });
    
    it('adds a new block',()=> {
        const data = 'Ibrahim rahhal' ;
        bc.addBlock(data) ;
        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
        
    })
    
    
    
});