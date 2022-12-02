const emailInp = 'input[name="email"]';
const passwordInp = 'input[name="password"]';

const login = "zobnin.vladislav@yandex.ru";

const item1 = "Краторная булка N-200i";
const item2 = "Флюоресцентная булка R2-D3";
const item3 = "Соус Spicy-X";
const item4 = "Филе Люминесцентного тетраодонтимформа";

describe("перетискивание товаров в корзину, офрмление заказа, закрытие модального окна", function () {
  it("- загрузка сайта", function () {
    cy.visit("");
  });

  it("- открыта главная страница", function () {
    cy.contains("Соберите бургер");
  });

  it("- перетискивание нескольких товаров в корзину", function () {
    cy.get("li").contains(item1).trigger("dragstart").trigger("dragleave");
    cy.get("#basket")
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");

    cy.get("li").contains(item2).trigger("dragstart").trigger("dragleave");
    cy.get("#basket")
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");

    cy.get("li").contains(item3).trigger("dragstart").trigger("dragleave");
    cy.get("#basket")
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");

    cy.get("li").contains(item3).trigger("dragstart").trigger("dragleave");
    cy.get("#basket")
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");

    cy.get("li").contains(item3).trigger("dragstart").trigger("dragleave");
    cy.get("#basket")
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");

    cy.get("li").contains(item4).trigger("dragstart").trigger("dragleave");
    cy.get("#basket")
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");
  });

  it("- удаление одного товара из корзины", function () {
    cy.get(".constructor-element")
      .eq(1)
      .find(".constructor-element__action")
      .click();
  });

  it("- нажимаем на офрмить заказ и попадаем на страницу авторизации", function () {
    cy.get("button").contains("Оформить заказ").click();
    cy.contains("Вход");
  });

  it("- проходим неверную авторизацию и получаем ошибку", function () {
    cy.get(emailInp).type(login, {
      timeout: 3000,
    });
    cy.get(passwordInp).type("aaaaaaaa", {
      timeout: 3000,
    });
    cy.get("button").contains("Войти").click();
    cy.contains("Неверная почта или пароль");
  });

  it("- проходим авторизацию и попадаем на главную страницу", function () {
    cy.get(emailInp).clear();
    cy.get(passwordInp).clear();
    cy.get(emailInp).type(login, {
      timeout: 3000,
    });
    cy.get(passwordInp).type("abc123abc", {
      timeout: 3000,
    });
    cy.get("button").contains("Войти").click();
    cy.contains("Соберите бургер");
  });

  it("- нажимаем на кнопку оформить заказ и ждем", function () {
    cy.get("button").contains("Оформить заказ").click();
  });

  it("- получем окно информации о заказе и закрываем его", function () {
    cy.contains("идентификатор заказа");
    cy.wait(2000);
    cy.get("#modal_close").click();
  });
});
