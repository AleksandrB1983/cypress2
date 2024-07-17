describe('template spec', () => {  
  it('Добавление пользователя', () => {    
    cy.request("POST", "/user", {
        "id": 99999,
        "username": "ivan",
        "firstName": "ivan",
        "lastName": "ivanov",
        "email": "test85@mail.ru",
        "password": "qwertya123",
        "phone": "89999999999",
        "userStatus": 0                        
    }).then((response) => {
      cy.log(JSON.stringify(response.body))
      expect(response.status).be.eql(200)

    }) 
  })
  
  it('Получение пользователя по его имени', () => {
    cy.request("GET", "/user/ivan", {
        "id": 99999,
        "username": "ivan",
        "firstName": "ivan",
        "lastName": "ivanov",
        "email": "test85@mail.ru",
        "password": "qwertya123",
        "phone": "89999999999",
        "userStatus": 0
    }).then((response) => {
      expect(response.status).be.eql(200)
      expect(response.body).be.eql( {
        "id": 99999,
        "username": "ivan",
        "firstName": "ivan",
        "lastName": "ivanov",
        "email": "test85@mail.ru",
        "password": "qwertya123",
        "phone": "89999999999",
        "userStatus": 0
      })
    })
  })

  it('Обновление пользователя', () => {
    cy.request("PUT", "/user/:username", {
        "id": 99999,
        "username": "ivan",
        "firstName": "ivan",
        "lastName": "petrov",
        "email": "test385@mail.ru",
        "password": "qwertya3123",
        "phone": "89999999999",
        "userStatus": 0
    }).then((response) => {
      expect(response.status).be.eql(200)
    })
  })

  it('Получение пользователя по его имени', () => {
    cy.request("GET", "/user/ivan", {
        "id": 99999,
        "username": "ivan",
        "firstName": "ivan",
        "lastName": "petrov",
        "email": "test385@mail.ru",
        "password": "qwertya3123",
        "phone": "89999999999",
        "userStatus": 0
    }).then((response) => {
      expect(response.status).be.eql(200)
      expect(response.body).be.eql( {
        "id": 99999,
        "username": "ivan",
        "firstName": "ivan",
        "lastName": "petrov",
        "email": "test385@mail.ru",
        "password": "qwertya3123",
        "phone": "89999999999",
        "userStatus": 0
      })
    })
  })
  it('Удаление пользователя', () => {
    cy.request("DELETE", "/user/ivan", {
        "id": 99999,
        "username": "ivan",
        "firstName": "ivan",
        "lastName": "petrov",
        "email": "test385@mail.ru",
        "password": "qwertya3123",
        "phone": "89999999999",
        "userStatus": 0
    }).then((response) => {
      expect(response.status).be.eql(200)
      cy.request({
        "metod": "GET",
        "url": "/user/ivan",
        "failOnStatusCode": false
      }).then((response) => {
        expect(response.status).be.eql(404)
      })
    })
  })  
})