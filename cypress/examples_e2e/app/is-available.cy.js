describe("service is available", function () {
  it("should be available on localhost:3000", function () {
    cy.visit("http://localhost:3000");
  });
  it("should open cart page by default", function () {
    cy.contains("Соберите бургер");
  });
  it("should open delivery page after continue button click", function () {
    cy.contains("Лента заказов").click();
    cy.contains("Лента заказов");
  });
});
