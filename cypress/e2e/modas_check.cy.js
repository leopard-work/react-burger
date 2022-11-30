describe("перетискивание товаров в корзину, офрмление заказа, закрытие модального окна", function () {
  it("- загрузка сайта", function () {
    cy.visit("http://localhost:3000");
  });

  it("- открыта главная страница", function () {
    cy.contains("Соберите бургер");
  });

  it("- открываем товар, проверяем модалку и закрываем", function () {
    cy.get("li").contains("Флюоресцентная булка R2-D3").click();
    cy.contains("Детали ингредиента");
    cy.wait(2000);
    cy.get("#modal_close").click();
  });

  it("- переходим по ссылке товара и проверям информацию", function () {
    cy.visit("http://localhost:3000/ingredients/60d3b41abdacab0026a733c7");
    cy.contains("Флюоресцентная булка R2-D3");
  });

  it("- переходим по несуществующей ссылке товара и проверям страницу 404", function () {
    cy.wait(1000);
    cy.visit("http://localhost:3000/ingredients/60d3b41abdacab0026a733c777");
    cy.contains("Ошибка 404");
  });
});
