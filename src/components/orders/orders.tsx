import React, { useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./orders.module.css";
import stylesItem from "./orders_item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../services/reducers";
import { ItemProps } from "../../utils/types";
import Modal from "../modal/modal";
import {
  CLOSE_ORDER_ITEM,
  OPEN_ORDER_ITEM,
} from "../../services/actions/orders";

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
  const history = useHistory();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders);
  const params: { id: string } = useParams();

  useEffect(() => {
    if (location.state)
      dispatch({
        type: OPEN_ORDER_ITEM,
        item: params.id,
      });
  }, [location.state, params.id, dispatch]);

  const openOrder = (order: any) => {
    dispatch({ type: OPEN_ORDER_ITEM, viewFullOrder: order });
    history.replace(`/feed/${order._id}`, { modal: true });
  };

  const modalClose = () => {
    dispatch({ type: CLOSE_ORDER_ITEM });
    history.push("/feed");
  };

  const testItem = {
    _id: "232323",
  };

  return (
    <>
      <div
        className={styles.item + " pt-6 pr-6 pb-6 pl-6 mb-4"}
        onClick={() => openOrder(testItem)}
      >
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
                styles.param +
                " text text_type_main-default text_color_inactive"
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
      <Modal isOpen={orders.viewFullOrderModalOpen} close={() => modalClose()}>
        <OrderItem />
      </Modal>
    </>
  );
};

export const OrderItem = () => {
  return (
    <div className={stylesItem.wrapper + " mt-10 mb-10"}>
      <p className="text text_type_digits-default mb-10">#034533</p>
      <p className="text text_type_main-medium mb-3">
        Death Star Starship Main бургер
      </p>
      <p className="text text_type_main-default mb-15">Создан</p>
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <div className={stylesItem.params + " pr-6 mb-10"}>
        <div className={stylesItem.param + " mb-4"}>
          <div className={stylesItem.title}>
            <div className={stylesItem.icon + " mr-4"}></div>
            <p className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <div className={styles.price}>
            <p className="text text_type_digits-default mr-2">480</p>{" "}
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={stylesItem.param + " mb-4"}>
          <div className={stylesItem.title}>
            <div className={stylesItem.icon + " mr-4"}></div>
            <p className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <div className={styles.price}>
            <p className="text text_type_digits-default mr-2">2 x 480</p>{" "}
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={stylesItem.param + " mb-4"}>
          <div className={stylesItem.title}>
            <div className={stylesItem.icon + " mr-4"}></div>
            <p className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <div className={styles.price}>
            <p className="text text_type_digits-default mr-2">480</p>{" "}
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={stylesItem.param + " mb-4"}>
          <div className={stylesItem.title}>
            <div className={stylesItem.icon + " mr-4"}></div>
            <p className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <div className={styles.price}>
            <p className="text text_type_digits-default mr-2">480</p>{" "}
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={stylesItem.param + " mb-4"}>
          <div className={stylesItem.title}>
            <div className={stylesItem.icon + " mr-4"}></div>
            <p className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <div className={styles.price}>
            <p className="text text_type_digits-default mr-2">1 x 480</p>{" "}
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
      <div className={stylesItem.bottom}>
        <p className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20 i-GMT+3
        </p>
        <div className={styles.price}>
          <p className="text text_type_digits-default mr-2">580</p>{" "}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
