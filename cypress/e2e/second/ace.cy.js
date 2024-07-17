describe('template spec', () => {  
  it('Добавление пользователя', () => {    
    cy.request("POST", "/user", {
        "id": 999999,
        "username": "alex",
        "firstName": "alex",
        "lastName": "ivanov",
        "email": "test185@mail.ru",
        "password": "qwertya1123",
        "phone": "89999999999",
        "userStatus": 0                        
    }).then((response) => {
      cy.log(JSON.stringify(response.body))
      expect(response.status).be.eql(200)

    }) 
  })
  
  it('Получение пользователя по его имени', () => {
    cy.request("GET", "/user/alex", {
        "id": 999999,
        "username": "alex",
        "firstName": "alex",
        "lastName": "ivanov",
        "email": "test185@mail.ru",
        "password": "qwertya1123",
        "phone": "89999999999",
        "userStatus": 0
    }).then((response) => {
      expect(response.status).be.eql(200)
      expect(response.body).be.eql( {
        "id": 999999,
        "username": "alex",
        "firstName": "alex",
        "lastName": "ivanov",
        "email": "test185@mail.ru",
        "password": "qwertya1123",
        "phone": "89999999999",
        "userStatus": 0
      })
    })
  })

  it('Обновление пользователя', () => {
    cy.request("PUT", "/user/:username", {
        "id": 999999,
        "username": "alex",
        "firstName": "alex",
        "lastName": "petrov",
        "email": "test3185@mail.ru",
        "password": "qwertya31123",
        "phone": "89999999999",
        "userStatus": 0
    }).then((response) => {
      expect(response.status).be.eql(200)
    })
  })

  it('Получение пользователя по его имени', () => {
    cy.request("GET", "/user/alex", {
        "id": 999999,
        "username": "alex",
        "firstName": "alex",
        "lastName": "petrov",
        "email": "test3185@mail.ru",
        "password": "qwertya31123",
        "phone": "89999999999",
        "userStatus": 0
    }).then((response) => {
      expect(response.status).be.eql(200)
      expect(response.body).be.eql( {
        "id": 999999,
        "username": "alex",
        "firstName": "alex",
        "lastName": "petrov",
        "email": "test3185@mail.ru",
        "password": "qwertya31123",
        "phone": "89999999999",
        "userStatus": 0
      })
    })
  })
  it('Залогиневание пользователя', () => {
    cy.request("GET", "/user/login", {
      "id": 999999,
      "username": "alex",
      "password": "qwertya31123"
    }).then((response) => {
      expect(response.status).be.eql(200)
      
    })
  })
  it('Удаление пользователя', () => {
    cy.request("GET", "/user/logout", {
    })
  })
    

  it('Удаление пользователя', () => {
    cy.request("DELETE", "/user/alex", {
        "id": 999999,
        "username": "alex",
        "firstName": "alex",
        "lastName": "petrov",
        "email": "test3185@mail.ru",
        "password": "qwertya31123",
        "phone": "89999999999",
        "userStatus": 0
    }).then((response) => {
      expect(response.status).be.eql(200)
      cy.request({
        "metod": "GET",
        "url": "/user/alex",
        "failOnStatusCode": false
      }).then((response) => {
        expect(response.status).be.eql(404)
      })
    })
  })  
})