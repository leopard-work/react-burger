import React from "react";

import "@ya.praktikum/react-developer-burger-ui-components";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./app-header.module.css";

const AppHeader = () => {
  return (
      <header className={headerStyles.header}>
          <div className="container">
              <div className={headerStyles.header_blocks + " pt-4 pb-4"}>
                  <div className={headerStyles.logo}>
                      <Logo />
                  </div>
                  <div className={headerStyles.left_btns}>
                      <a href="/" className={headerStyles.btn + " p-4 mr-2 " + headerStyles.btn_active}>
                          <BurgerIcon type="primary" />
                          <span className="text text_type_main-default ml-2">Конструктор</span>
                      </a>
                      <a href="/" className={headerStyles.btn + " p-4 mr-2"}>
                          <ListIcon type="secondary" />
                          <span className="text text_type_main-default ml-2">Лента заказов</span>
                      </a>
                  </div>
                  <a href="/" className={headerStyles.btn + " p-4 mr-2"}>
                      <ProfileIcon type="secondary" />
                      <span className="text text_type_main-default ml-2">Личный кабинет</span>
                  </a>
              </div>
          </div>
      </header>
  );
}

export default AppHeader;
