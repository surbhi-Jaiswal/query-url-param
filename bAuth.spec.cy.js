
//in this not accessing the token by this visit method
describe('THis is github token',()=>{
    it('get basic auth tokenTest',()=>{
        const token  ='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'
        const authorization = `bearer ${ token }`;
      
    //     cy.visit(" https://api.github.com/repos/surbhi-Jaiswal/testgithubrepoapi/collaborators",{
    //     headers: {
    //         authorization
    //          }
    //    })
    cy.visit("https://api.github.com/repos/surbhi-Jaiswal/testgithubrepoapi/collaborators", {
        headers: {
            authorization: 'Basic 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='
        },
        failOnStatusCode: false
    })
    cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
        })
})
// describe('THis is github token',()=>{
//     it.only('get basic auth tokenTest',()=>{

//         cy.request({
//             method :'Get',
//             url: 'https://api.github.com/repos/surbhi-Jaiswal/testgithubrepoapi/collaborators',
//         headers: {
//             authorization:'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'
//              }
//        })
//        .then((res)=>
//             {
//                 console.log(res)
//                 expect(res.status).to.eq(200)
//           cy.get(authorization)
//           })
//         })
// })

describe('get user detail',()=>{
    it.only('get operation with ID',()=>{
        const token = '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'
        const authorization = `bearer ${ token }`;
    cy.request({
        method :'GET',
        url:'https://api.github.com/repos/surbhi-Jaiswal/testgithubrepoapi/collaborators',
        headers: {
            authorization
            }
    })
    .then((res)=>{
        console.log(res)
    })
    })
})

