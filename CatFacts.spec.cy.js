const { italic, cyan } = require("colorette");

describe('Testing catfacts',()=>{
    it('Test catFactsAPI',()=>{
        cy.request({
            method: 'GET',
            url:'https://catfact.ninja/fact'
        }).then((res)=>{
            console.log(res)
            expect(res.status).to.eq(200)
        })
    })

})

describe('Testing catfacts',()=>{
    it('Test catFactsAPI',()=>{
        cy.request({
            method: 'GET',
            url:'https://catfact.ninja/facts'
        }).then((res)=>{
            console.log(res)
            expect(res.status).to.eq(200)
        })
    })

})
describe('Testing catfacts',()=>{
    it.only('Test catFactsAPI',()=>{
        cy.request({
            method: 'GET',
            url:'https://catfact.ninja/breeds'
        }).then((res)=>{
            console.log(res)
            expect(res.status).to.eq(200)
        })
    })

})