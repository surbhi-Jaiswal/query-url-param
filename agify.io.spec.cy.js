
//query param in url
describe('Testing agify.io',()=>{
    it('Test API AGIFY.IO',()=>{
        cy.request({
            method:'GET',
            url:'https://api.genderize.io/?name[]=peter&name[]=lois&name[]=stevie',
            

        }).then((res)=>{
            console.log(res)
            expect(res.status).to.eq(200)
        })
    })
})
//query param by declear in qs
describe('Testing agify.io',()=>{
    it.only('Test API AGIFY.IO',()=>{
        cy.request({
            method:'GET',
            url:'https://api.genderize.io',
            qs:{name:'peter',
            country_id:'US'}

        }).then((res)=>{
            console.log(res)
            expect(res.status).to.eq(200)
        })
    })
})

describe('Testing agify.io',()=>{
    it('Test API AGIFY.IO',()=>{
        const token = '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'
        const authorization = `bearer ${ token }`;
        cy.request({
            method:'GET',
            url:'https://api.genderize.io?name=peter&apikey={YOUR_API_KEY}',
            headers:{
            authorization
        }
           })

        }).then((res)=>{
            console.log(res)
            expect(res.status).to.eq(201)

})
        })
    