describe('sample-ng-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('dotnet-root').should('exist');
  });
});
