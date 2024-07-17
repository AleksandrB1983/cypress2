import seats from "../fixtures/seats.json"

describe('"Идём в кино" тест', () => {
    beforeEach( () => {
      cy.visit('https://qamid.tmweb.ru/')
    })

    it('Количество дней', () => {
      cy.get(".page-nav__day").should("have.length", 7)
    })        

    seats.forEach((test) => {
      it(test.name, () => {
        cy.get(".page-nav__day").then( (elements) => {
          elements[2].click()
          cy.contains("13:00").click()
  
          //const seats = require('../fixtures/seats.json')
  
          //cy.fixture('seats').then(seats => {            
          test.seats.forEach((item) => {
              cy.get(`.buying-scheme__wrapper > :nth-child(${item.row}) > :nth-child(${item.seat})`).click()  
          }) 
          cy.get('.acceptin-button').click()
          cy.contains('Вы выбрали билеты:').should('be.visible')         
        })
      })
    })
    
    it('Тестирование заблокированной кнопки с просроченным временем сеанса', () => {
      cy.get('.movie-seances__time-block')
      cy.contains('11:00').should('to.be.visible')

    })
})