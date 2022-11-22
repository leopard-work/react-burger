import React, { useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./orders.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const Orders = () => {
  return (
    <div className={styles.page + " pt-10"}>
      <div className={styles.wrapper + " pr-2"}>
        <OrdersItems />
      </div>
    </div>
  );
};

export const OrdersItems = () => {
  return (
    <div className={styles.item + " pt-6 pr-6 pb-6 pl-6 mb-4"}>
      <div className={styles.top + " mb-6"}>
        <p className="text text_type_digits-default">#034535</p>
        <p className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20 i-GMT+3
        </p>
      </div>
      <p className="text text_type_main-medium mb-2">
        Death Star Starship Main бургер
      </p>
      <p className="text text_type_main-default mb-6">Создан</p>
      <div className={styles.bottom}>
        <div className={styles.params}>
          <div
            className={
              styles.param + " text text_type_main-default text_color_inactive"
            }
          >
            +3
          </div>
          <div className={styles.param}></div>
          <div className={styles.param}></div>
          <div className={styles.param}></div>
          <div className={styles.param}></div>
          <div className={styles.param}></div>
        </div>
        <div className={styles.price}>
          <p className="text text_type_digits-default mr-2">480</p>{" "}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
