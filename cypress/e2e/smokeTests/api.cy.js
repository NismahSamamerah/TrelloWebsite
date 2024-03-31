describe('HTTP Requests and Responses',()=>{
    it('HTTP Requests',()=>{

        cy.request("POST","https://reqres.in/api/users",{"name": "morpheus","job": "leader"}).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.data.name).to.contain("morpheus");
        })
        cy.request("PUT","https://reqres.in/api/unknown/2",{"name": "morpheus","job": "zion resident"}).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.data.name).to.contain("morpheus");
        })
        cy.request("DELETE","https://reqres.in/api/unknown/2").then(()=>{
            expect(response.status).to.eq(204);
        })

        cy.request("GET","https://reqres.in/api/unknown/2").then((response)=>{
            cy.log(response);
            expect(response.status).to.eq(200);
            expect(response.body.data.name).to.contain("fuchsia rose");
            expect(response.body.support.url).to.eq("https://reqres.in/#support-heading")
        })

    })
    
})