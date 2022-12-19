describe('sample-ng-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('dotnet-nx-welcome').should('exist');
  });
});
