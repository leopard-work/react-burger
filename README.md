# Stellar Burgers

Интернет магазин на React + Redux с личным кабинетом, каталог и корзина реализована с помощью Drag-and-drop, лента заказов обновляется по протоколу WebSocket.

## Демонстрация

[https://react-burger.union-games.ru/](https://react-burger.union-games.ru/)

## Библиотеки

- React
- Redux
- @reduxjs/toolkit
- React-dnd
- Redux-thunk
- Typescript
- uuid
- js-cookie
- Jest
- Cypress

## Установка

```shell
# клон репозитория
$ git clone https://github.com/leopard-work/react-burger

# переход в папку проекта
$ cd react-burger

# установка зависимостей
$ npm install
```

### Запустить сервер разработки

```shell
$ npm run start
```

Сервер запуститься по адресу [http://localhost:3000/](http://localhost:3000/)

### Сборка проекта

```shell
$ npm run build
```

### Тестирование

```shell
$ npm run test
$ npm run cypress:open
```