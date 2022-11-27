import React, { FC, useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./orders.module.css";
import stylesItem from "./orders_item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../services/reducers";
import { ItemProps, OrderItemProps } from "../../utils/types";
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
  const items = orders.orders.orders;

  useEffect(() => {
    if (location.state)
      dispatch({
        type: OPEN_ORDER_ITEM,
        item: items.find((item: OrderItemProps) => item._id === params.id),
      });
  }, [location.state, params.id, dispatch]);

  const modalClose = () => {
    dispatch({ type: CLOSE_ORDER_ITEM });
    history.push("/feed");
  };

  return (
    <>
      {items.map((item: OrderItemProps) => (
        <OrderItem item={item} key={item._id} />
      ))}
      <Modal isOpen={orders.viewFullOrderModalOpen} close={() => modalClose()}>
        <OrderModalItem item={orders.viewFullOrder} />
      </Modal>
    </>
  );
};

const dateParse = (date: string) => {
  const n = new Date(date);
  return n.toLocaleString();
};

const ingredientsParse = (items: Array<string>, catalog: any) => {
  let parseItems: Array<ItemProps> = [];
  let parseItemsElements: any = [];
  let parseItemsElementsModal: any = [];
  let price = 0;
  items.map((item) => {
    parseItems.push(catalog.find((el: ItemProps) => el._id === item));
  });
  parseItems.map((item, i: number) => {
    price += item.price;
    if (i < 6) {
      if (i != 5) {
        parseItemsElements.push(
          <div className={styles.param} key={i}>
            <img src={item.image} alt="" />
          </div>
        );
      } else {
        parseItemsElements.push(
          <div
            className={
              styles.param + " text text_type_main-default text_color_inactive"
            }
            key={i}
          >
            <img src={item.image} alt="" />
            {parseItems.length - 6 !== 0 ? (
              <span className="text text_type_main-default">
                +{parseItems.length - 6}
              </span>
            ) : (
              ""
            )}
          </div>
        );
      }
    }
    parseItemsElementsModal.push(
      <div className={stylesItem.param + " mb-4"} key={i}>
        <div className={stylesItem.title}>
          <div className={stylesItem.icon + " mr-4"}>
            <img src={item.image} alt={item.name} />
          </div>
          <p className="text text_type_main-default">{item.name}</p>
        </div>
        <div className={styles.price}>
          <p className="text text_type_digits-default mr-2">
            {item.type === "bun" ? 2 : 1} x {item.price}
          </p>{" "}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    );
  });

  parseItemsElements.reverse();
  delete parseItemsElementsModal[parseItemsElementsModal.length - 1];

  // const itemsUnique = parseItems.filter(
  //   (el: any, ind) => ind === parseItems.indexOf(el)
  // );

  return {
    items: parseItemsElements,
    price: price,
    itemsModal: parseItemsElementsModal,
  };
};

const statusParse = (status: string) => {
  if (status === "created") return <span>Создан</span>;
  if (status === "pending") return <span>Готовится</span>;
  if (status === "done") return <span className={styles.done}>Выполнен</span>;
};

const OrderItem = (props: { item: OrderItemProps }) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const openOrder = (order: OrderItemProps) => {
    dispatch({ type: OPEN_ORDER_ITEM, item: order });
    history.replace(`/feed/${order._id}`, { modal: true });
  };
  const item = props.item;
  const catalog = useAppSelector((state) => state.catalog);
  const parseElements = ingredientsParse(item.ingredients, catalog.items.data);

  return (
    <div
      className={styles.item + " pt-6 pr-6 pb-6 pl-6 mb-4"}
      onClick={() => openOrder(item)}
    >
      <div className={styles.top + " mb-6"}>
        <p className="text text_type_digits-default">#{item.number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {dateParse(item.createdAt)}
        </p>
      </div>
      <p className="text text_type_main-medium mb-2">{item.name}</p>
      <p className="text text_type_main-default mb-6">
        {statusParse(item.status)}
      </p>
      <div className={styles.bottom}>
        <div className={styles.params}>{parseElements.items}</div>
        <div className={styles.price}>
          <p className="text text_type_digits-default mr-2">
            {parseElements.price}
          </p>{" "}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export const OrderModalItem: FC<{ item: OrderItemProps }> = ({ item }) => {
  const catalog = useAppSelector((state) => state.catalog);
  const parseElements = ingredientsParse(item.ingredients, catalog.items.data);

  return (
    <div className={stylesItem.wrapper + " mt-10 mb-10"}>
      <p className="text text_type_digits-default mb-10">#{item.number}</p>
      <p className="text text_type_main-medium mb-3">{item.name}</p>
      <p className="text text_type_main-default mb-15">
        {statusParse(item.status)}
      </p>
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <div className={stylesItem.params + " pr-6 mb-10"}>
        {parseElements.itemsModal}
      </div>
      <div className={stylesItem.bottom}>
        <p className="text text_type_main-default text_color_inactive">
          {dateParse(item.createdAt)}
        </p>
        <div className={styles.price}>
          <p className="text text_type_digits-default mr-2">
            {parseElements.price}
          </p>{" "}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
