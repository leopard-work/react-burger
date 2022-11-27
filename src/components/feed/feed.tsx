import React, { useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed.module.css";
import { OrderModalItem, OrdersItems } from "../orders/orders";
import { useAppDispatch, useAppSelector } from "../../services/reducers";
import {
  ORDERS_CONNECT,
  ORDERS_DISCONNECT,
} from "../../services/actions/orders";
import { loadingContent } from "../loading/loading";
import { OrderItemProps } from "../../utils/types";
import { useParams } from "react-router-dom";
import Page404 from "../../pages/Page404";

export const Feed = (props: { openOrder: boolean }) => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    dispatch({
      type: ORDERS_CONNECT,
      payload: "wss://norma.nomoreparties.space/orders/all",
    });
    return () => {
      dispatch({
        type: ORDERS_DISCONNECT,
      });
    };
  }, [dispatch]);

  if (orders.orders.success) {
    const { total, totalToday } = orders.orders;
    const items = orders.orders.orders;
    const doneNumbers = items.filter(
      (item: OrderItemProps) => item.status === "done"
    );
    const pendingNumbers = items.filter(
      (item: OrderItemProps) => item.status === "pending"
    );
    const numbersTpl = (number: number, key: string) => (
      <p className="text text_type_digits-default mb-2" key={key}>
        {number}
      </p>
    );

    if (!props.openOrder) {
      return (
        <div className="container pl-4 pr-4 mt-10">
          <p className="text text_type_main-large mb-4">Лента заказов</p>
          <div className={styles.wrapper}>
            <div className={styles.orders + " pr-2"}>{<OrdersItems />}</div>
            <div className={styles.info + " pl-15"}>
              <div className={styles.numbers}>
                <div className={styles.numbers_block}>
                  <p className="text text_type_main-medium mb-6">Готовы</p>
                  <div className={styles.numbers_blue}>
                    {doneNumbers.map((item: OrderItemProps, i: number) => {
                      if (i < 11) return numbersTpl(item.number, item._id);
                      return false;
                    })}
                  </div>
                </div>
                <div className={styles.numbers_block}>
                  <p className="text text_type_main-medium mb-6">В работе</p>
                  <div>
                    {pendingNumbers.map((item: OrderItemProps, i: number) => {
                      if (i < 11) return numbersTpl(item.number, item._id);
                      return false;
                    })}
                  </div>
                </div>
              </div>
              <div className={styles.result + " mt-15"}>
                <p className="text text_type_main-medium">
                  Выполнено за все время:
                </p>
                <p
                  className={
                    styles.result_text + " text text_type_digits-large"
                  }
                >
                  {total}
                </p>
              </div>
              <div className={styles.result + " mt-15"}>
                <p className="text text_type_main-medium">
                  Выполнено за сегодня:
                </p>
                <p
                  className={
                    styles.result_text + " text text_type_digits-large"
                  }
                >
                  {totalToday}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      const order = items.find((item: OrderItemProps) => item._id === id);
      if (order) {
        return (
          <div className="container pl-4 pr-4">
            <div className={styles.orderPage}>
              {<OrderModalItem item={order} />}
            </div>
          </div>
        );
      } else {
        return <Page404 />;
      }
    }
  } else return loadingContent();
};
