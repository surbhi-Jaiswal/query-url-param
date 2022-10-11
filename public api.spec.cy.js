const { italic, cyan } = require("colorette")

describe('Testing publicAPI',()=>{
it('Test public api',()=>{
 cy.request({
   method: 'get',
   url:'https://api.publicapis.org/entries'

 }).then((res)=>{
    console.log(res)
    expect(res.status).to.eq(200)
 })


})
})
describe('Testing publicAPI',()=>{
    it('Test public api',()=>{
     cy.request({
       method: 'get',
       url:'https://api.publicapis.org/entries'
    
     }).then((res)=>{
        console.log(res)
        expect(res.status).to.eq(200)
     })
    
    
    })
    })
    
describe('Testing publicAPI',()=>{
    it('Test public api',()=>{
     cy.request({
       method: 'get',
       url:'https://api.publicapis.org/random'
    
     }).then((res)=>{
        console.log(res)
        expect(res.status).to.eq(200)
     })
    
    
    })
    })
    describe('Testing publicAPI',()=>{
        it('Test public api',()=>{
         cy.request({
           method: 'get',
           url:'https://api.publicapis.org/health'
        
         }).then((res)=>{
            console.log(res)
            expect(res.status).to.eq(200)
         })
        
        
        })
        })
        describe('Testing publicAPI',()=>{
            it.only('Test public api',()=>{
             cy.request({
               method: 'get',
               url:'https://api.publicapis.org/categories'
            
             }).then((res)=>{
                console.log(res)
                expect(res.status).to.eq(200)
             })
            
            
            })
            })
            
        
    

