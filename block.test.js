const blo = require('./Block.js');


describe('Block',() => {
    var data,lastblock,block ;
    
    
    beforeEach(
        
        
        () => {
        data= "test";
        lastblock = blo.Genesis();
        block = blo.mineblock(lastblock,data); 
    });
    it("sets data to match input",()=> {
        let dete = block.data;
        expect(dete).toEqual(data);
        
        
    });
    
     it("sets last hash to match input",()=> {
        expect(block.lasthash).toEqual(lastblock.hash);
        
        
    });
    
    
});