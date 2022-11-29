import React, { FC, useRef } from "react";
import { IngredientsProps, ItemProps } from "../../utils/types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

import "@ya.praktikum/react-developer-burger-ui-components";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { checkOutSend, CLEAR_ORDER } from "../../services/actions/order";
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  SORT_BASKET,
} from "../../services/actions/basket";
import { useDrag, useDrop } from "react-dnd";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector, useAppDispatch } from "../../services/reducers";

type ConstructorItemProps = {
  item: ItemProps;
  index?: number;
  deleteItem?: (item: ItemProps) => void;
  type?: string;
};

const ConstructorItem: FC<ConstructorItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const refItem = useRef(null);
  const refBun = useRef(null);

  const [Object, dropItem] = useDrop({
    accept: "card",
    hover(item, monitor) {
      dispatch({
        type: SORT_BASKET,
        item: item,
        index: props.index,
      });
    },
  });

  const [{ isDragging }, dragItem] = useDrag({
    type: "card",
    item: props.item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  dragItem(dropItem(refItem));
  const opacity = isDragging ? 0 : 1;

  return (
    <li
      className={styles.item + " mt-4"}
      ref={props.item.type !== "bun" ? refItem : refBun}
      style={{ opacity }}
    >
      {props.item.type !== "bun" ? (
        <span className={styles.drag}>
          <DragIcon type="primary" />
        </span>
      ) : (
        <span />
      )}
      <ConstructorElement
        // type={props.item.type === "bun" ? props.type : ""}
        isLocked={props.item.type === "bun"}
        text={
          props.item.name +
          (props.type === "top" ? "\n(верх)" : "") +
          (props.type === "bottom" ? "\n(низ)" : "") +
          (props.item.count > 1 ? " x" + props.item.count : "")
        }
        price={props.item.price}
        thumbnail={props.item.image}
        // @ts-ignore
        handleClose={() => props.deleteItem(props.item)}
      />
    </li>
  );
};

const BurgerConstructor = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const basket = useAppSelector((state) => state.basket);
  const order = useAppSelector((state) => state.order);
  const user = useAppSelector((state) => state.user);
  const orderItems = basket.basket;

  const items = orderItems.map((item: ItemProps & { uuid?: string }, i) =>
    item.type !== "bun" ? (
      <ConstructorItem
        key={item.uuid}
        item={item}
        index={i}
        deleteItem={() => dispatch({ type: REMOVE_FROM_BASKET, item })}
      />
    ) : (
      ""
    )
  );
  const bun = orderItems.find((item) => item.type === "bun");
  const initialValue = 0;
  const totalPrice = orderItems.reduce(function (accumulator, currentValue) {
    if (currentValue.type === "bun")
      return accumulator + currentValue.price * 2;
    else return accumulator + currentValue.price * currentValue.count;
  }, initialValue);

  const checkOut = () => {
    if (!user["accessToken"]) {
      history.push("/login");
    } else {
      const ingredients: IngredientsProps = [];
      orderItems.forEach((item) => {
        for (let i = 0; i < item.count; i++) {
          ingredients.push(item._id);
          if (item.type === "bun") ingredients.push(item._id);
        }
      });
      const body = { ingredients };
      // dispatch({
      //     type: BASKET_CLEAR
      // })

      dispatch(checkOutSend(body, user["accessToken"]));
    }
  };

  const [{ active }, drop] = useDrop({
    accept: "items",
    collect: (monitor) => ({
      active: monitor.isOver(),
    }),
    drop(item) {
      item = { ...(item as ItemProps), uuid: uuidv4() };
      dispatch({
        type: ADD_TO_BASKET,
        item,
      });
    },
  });

  return (
    <section className={styles.section + " mt-25 "}>
      <div
        className={`${styles.items} ${active ? styles.active : ""}`}
        ref={drop}
      >
        {bun ? <ConstructorItem item={bun} type="top" /> : ""}
        <ul className={styles.content + " pr-2"}>{items}</ul>
        {bun ? <ConstructorItem item={bun} type="bottom" /> : ""}
      </div>
      <div className={styles.info + " mt-10 mr-4"}>
        <p className={styles.price + " mr-10"}>
          <span className="text text_type_digits-medium mr-2">
            {totalPrice}
          </span>
          <CurrencyIcon type="primary" />
        </p>
        {!order["orderRequest"] && !order["orderFailed"] && (
          <Button
            type="primary"
            size="medium"
            onClick={checkOut}
            htmlType="submit"
            disabled={!!(!basket.basket.length && "disabled")}
          >
            Оформить заказ
          </Button>
        )}
        {order["orderRequest"] && !order["orderFailed"] && (
          <Button
            type="primary"
            size="medium"
            disabled={true}
            htmlType="submit"
          >
            Загрузка...
          </Button>
        )}
        {order["orderFailed"] && (
          <Button
            type="primary"
            size="medium"
            disabled={true}
            htmlType="submit"
          >
            Ошибка. Попробуйте позже
          </Button>
        )}
      </div>
      <Modal
        isOpen={order["orderModalOpen"]}
        close={() => dispatch({ type: CLEAR_ORDER })}
      >
        {order["orderInfo"]["order"]["number"] && (
          <OrderDetails number={order["orderInfo"]["order"]["number"]} />
        )}
      </Modal>
    </section>
  );
};

export default BurgerConstructor;
