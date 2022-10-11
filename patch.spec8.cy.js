const { italic, cyan } = require("colorette")

describe('patch user details',()=>{
it('patch user',()=>{
cy.request({
    method: 'patch',
    url:'https://jsonplaceholder.typicode.com/posts/1',
    body : {
        "userId": 9,
        "id": 6,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
})
.then((res)=>{
    console.log(res)
    expect(res.status).to.eq(200)
})
})
})