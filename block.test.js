const blo = require('./Block.js');


describe('Block',() => {
    let data,lastblock,block ;
    beforeEach(() => {
        data= "test";
        lastblock = blo.Genesis();
        block = blo.mineblock(lastblock,data); 
    });
    it("sets data to match input",()=> {
        expect(block.data).toEqual(data);
        
        
    });
    
     it("sets last hash to match input",()=> {
        expect(block.lasthash).toEqual(lastblock.hash);
        
        
    });
    
    
});