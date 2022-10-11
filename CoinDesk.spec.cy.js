describe('Testing CoinDesk get ',()=>{
    it('test Get coinDessk',()=>{
    cy.request({
        method:'GET',
        url:'https://api.coindesk.com/v1/bpi/currentprice.json'
    })
     .then((res)=>{
        console.log(res)
        expect(res.status).to.eq(200)
     })

    })
})
describe('Testing coinDesk page',()=>{
    it.only('Test coinDesk page',()=>{
       cy.visit('https://www.coindesk.com') 
       cy.contains('a','TV & Videos')
       .invoke('show')
    })
})