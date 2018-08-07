const BC = require('./Index.js');
const block = require('./Block.js');
describe("Blockchain" , ()=>{
    
    let bc ;
    
    
    
    
    beforeEach(() => {
        bc=new BC();
        bc2 = new BC();
        
        
    });
    
    
    
    
    it('start with genesus block',()=>{ expect(bc.chain[0]).toEqual(block.Genesis()); 
    });
    
    it('adds a new block',()=> {
        const data = 'Ibrahim rahhal' ;
        bc.addBlock(data) ;
        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
        
    });
    
    it('testing is valid funciton #01',() => {
        
        bc.addBlock('sspoajdposap');
        var tst =block.mineblock('dsds',"sdsdsd",'sdfsdfs','sdfsdfsd');
        bc.chain.push(tst) ;
        expect(BC.isValidChain(bc.chain)).toBeFalsy ;
        
        
        
    });
    
     
    
        it('testing is valid funciton #02',() => {
        
        bc.addBlock('sspoajdposap');
        bc.addBlock('sdasdasdasdas');
            bc.addBlock('asdjasijdijasid');
        expect(BC.isValidChain(bc.chain)).toBeTruthy;
        
        
        
    });
    
        it('testing is valid funciton #03',() => {
        
        bc.addBlock('sspoajdposap');
        bc.chain[0].data ='saidias' ;
            bc.addBlock('asdjasijdijasid');
        expect(BC.isValidChain(bc.chain)).toBeFalsy;
        
        
        
    });
         it('testing replacing chain function#01',() => {
        
        bc.addBlock('sspoajdposap');
            bc.addBlock('asdjasijdijasid');
            bc.replaceChain(bc2.chain) ;
        expect(bc !== bc2).toBeTruthy;
             
        
        
        
    });
    
         it('testing replacing chain function#02',() => {
        
        bc.addBlock('sspoajdposap');
            bc.addBlock('asdjasijdijasid');
           bc2.replaceChain(bc.chain) ;
        expect(bc ===bc2).toBeTruthy;
             
        
        
        
    });
    
    
    
    
    
    
});



