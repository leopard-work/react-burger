import React, { useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed.module.css";
import { OrdersItems } from "../orders/orders";
import { useAppDispatch } from "../../services/reducers";
import { ORDERS_CONNECT } from "../../services/actions/orders";

export const Feed = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: ORDERS_CONNECT,
      payload: "wss://norma.nomoreparties.space/orders/all",
    });
  }, [dispatch]);

  return (
    <div className="container pl-4 pr-4 mt-10">
      <p className="text text_type_main-large mb-4">Лента заказов</p>
      <div className={styles.wrapper}>
        <div className={styles.orders + " pr-2"}>
          <OrdersItems />
        </div>
        <div className={styles.info + " pl-15"}>
          <div className={styles.numbers}>
            <div className={styles.numbers_block}>
              <p className="text text_type_main-medium mb-6">Готовы</p>
              <div className={styles.numbers_blue}>
                <p className="text text_type_digits-default mb-2">1234567890</p>
                <p className="text text_type_digits-default mb-2">1234567890</p>
                <p className="text text_type_digits-default mb-2">1234567890</p>
                <p className="text text_type_digits-default mb-2">1234567890</p>
                <p className="text text_type_digits-default mb-2">1234567890</p>
              </div>
            </div>
            <div className={styles.numbers_block}>
              <p className="text text_type_main-medium mb-6">В работе</p>
              <div>
                <p className="text text_type_digits-default mb-2">1234567890</p>
                <p className="text text_type_digits-default mb-2">1234567890</p>
                <p className="text text_type_digits-default mb-2">1234567890</p>
              </div>
            </div>
          </div>
          <div className={styles.result + " mt-15"}>
            <p className="text text_type_main-medium">
              Выполнено за все время:
            </p>
            <p className={styles.result_text + " text text_type_digits-large"}>
              28 555
            </p>
          </div>
          <div className={styles.result + " mt-15"}>
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <p className={styles.result_text + " text text_type_digits-large"}>
              138
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
