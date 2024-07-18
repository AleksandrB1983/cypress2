describe('template spec', () => {
  it('Добавление питомца', () => {
    cy.request("POST", "/pet", {
        "id": 9999993,
        "name": "Dominik",
        "photoUrls": [],
        "tags": []
    }).then( (response) => {
      expect(response.status).be.eql(200)
      expect(response.body).be.eql( {
          "id": 9999993,
          "name": "Dominik",
          "photoUrls": [],
          "tags": []
      })
    })
  })
})