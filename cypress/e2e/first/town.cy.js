import armchairs from"../../fixtures/armchairs.json"

describe('"Идём в кино 2" тест', () => {
    beforeEach( () => {
      cy.visit('https://qamid.tmweb.ru/')
    })
   
    armchairs.forEach((test) => {
      it(test.name, () => {
        cy.get(".page-nav__day.page-nav__day_weekend").then( (elements) => {
          elements[1].click()
          cy.contains("17:00").click()  
                     
          test.armchairs.forEach((item) => {
              cy.get(`.buying-scheme__wrapper > :nth-child(${item.row}) > :nth-child(${item.seat})`).click()  
          }) 
          cy.get('.acceptin-button').click()
          cy.contains('Вы выбрали билеты:').should('be.visible')         
        })
      })
  
    })

})