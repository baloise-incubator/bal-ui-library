describe('css-opacity.visual', () => {
  beforeEach(() => cy.visit('/test/css-opacity.visual.html').platform('desktop').waitForDesignSystem())

  it('basic', () => {
    cy.getByTestId('basic').compareSnapshot('css-opacity-basic')
  })
})