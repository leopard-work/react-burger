import React from "react";
import {NavLink} from "react-router-dom";

import "@ya.praktikum/react-developer-burger-ui-components";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./app-header.module.css";

const AppHeader = () => {
    return (
      <header className={headerStyles.header}>
          <div className="container">
              <div className={headerStyles.header_blocks + " pt-4 pb-4"}>
                  <NavLink to="/" className={headerStyles.logo}>
                      <Logo />
                  </NavLink>
                  <div className={headerStyles.left_btns}>
                      <NavLink to="/" exact className={isActive => headerStyles.btn + " p-4 mr-2 " + (isActive ? headerStyles.btn_active : '')}>
                          <BurgerIcon type="secondary" />
                          <span className="text text_type_main-default ml-2">Конструктор</span>
                      </NavLink>
                      <NavLink to="/orders" className={headerStyles.btn + " p-4 mr-2"}>
                          <ListIcon type="secondary" />
                          <span className="text text_type_main-default ml-2">Лента заказов</span>
                      </NavLink>
                  </div>
                  <NavLink to="/profile" className={isActive => headerStyles.btn + " p-4 mr-2 " + (isActive ? headerStyles.btn_active : '')}>
                      <ProfileIcon type="secondary" />
                      <span className="text text_type_main-default ml-2">Личный кабинет</span>
                  </NavLink>
              </div>
          </div>
      </header>
    );
}

export default AppHeader;
