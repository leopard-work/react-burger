describe("service is available", function () {
  it("Загрузка сайта", function () {
    cy.visit("");
  });
  it("Открыта главная страница", function () {
    cy.contains("Соберите бургер");
  });
  it("Переход в ленту заказов", function () {
    cy.contains("Лента заказов").click();
    cy.contains("Лента заказов");
  });
});
