describe('DemoBlaze', () => {

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
    });
  
  it('should provide an ability to sign up', () => {
    cy.get('#signin2')
     .click();
    cy.get('#sign-username')
     .type('kvitoslava');
    cy.get('#sign-password')
      .type('Qwerty123!');
    cy.contains('.btn.btn-primary', 'Sign up')
      .click();
    });

  it('should provide an ability to log in', () => {
    cy.get('#login2')
     .click();
    cy.get('#loginusername')
     .type('kvitoslava');
    cy.get('#loginpassword')
      .type('Qwerty123!');
    cy.contains('.btn.btn-primary', 'Log in')
      .click();
    });
    
  it('should provide an ability to add product to the cart', () => {
    cy.contains('.hrefch', 'Samsung galaxy s6')
      .click();
    cy.get('.btn.btn-success.btn-lg')
      .click();    
    });
  });

