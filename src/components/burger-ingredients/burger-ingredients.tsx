import React, { useEffect, useRef } from "react";
import { ItemProps } from "../../utils/types";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useHistory, useLocation, useParams } from "react-router-dom";

import "@ya.praktikum/react-developer-burger-ui-components";
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { CHANGE_ACTIVE_TAB } from "../../services/actions/catalog";
import { CLOSE_VIEW_ITEM, VIEW_ITEM } from "../../services/actions/item";
import { useDrag } from "react-dnd";
import { useAppSelector, useDispatch } from "../../services/reducers";

const Tabs = () => {
  const dispatch = useDispatch();
  const catalog = useAppSelector((state) => state.catalog);
  const viewed = useAppSelector((state) => state.item);
  const current = catalog.activeTab;

  const tabsNavRef: any = useRef(null);
  const tabsBunRef: any = useRef(null);
  const tabsSauceRef: any = useRef(null);
  const tabsMainRef: any = useRef(null);

  const location = useLocation();
  const history = useHistory();
  const params: { id: string } = useParams();

  useEffect(() => {
    if (location.state)
      dispatch({
        type: VIEW_ITEM,
        item: catalog.items.data.find(
          (item: ItemProps) => item._id === params.id
        ),
      });
  }, [location.state, params.id, dispatch, catalog.items.data]);

  const updateNav = (props: { selected: number | null }) => {
    const scrollTop =
      tabsNavRef.current.offsetTop + tabsNavRef.current.scrollTop;
    const coords = [
      tabsBunRef.current.offsetTop,
      tabsSauceRef.current.offsetTop,
      tabsMainRef.current.offsetTop,
    ];
    if (props.selected) {
      tabsNavRef.current.scrollTop =
        coords[props.selected] - tabsNavRef.current.offsetTop;
    } else {
      if (scrollTop < coords[2]) {
        if (scrollTop < coords[1]) {
          dispatch({
            type: CHANGE_ACTIVE_TAB,
            activeTab: "one",
          });
        } else {
          dispatch({
            type: CHANGE_ACTIVE_TAB,
            activeTab: "two",
          });
        }
      } else {
        dispatch({
          type: CHANGE_ACTIVE_TAB,
          activeTab: "three",
        });
      }
    }
  };

  const modalClose = () => {
    dispatch({ type: CLOSE_VIEW_ITEM });
    history.push("/");
  };

  return (
    <>
      <div className={styles.tabs}>
        <Tab
          value="one"
          active={current === "one"}
          onClick={() => updateNav({ selected: 0 })}
        >
          Булки
        </Tab>
        <Tab
          value="two"
          active={current === "two"}
          onClick={() => updateNav({ selected: 1 })}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={current === "three"}
          onClick={() => updateNav({ selected: 2 })}
        >
          Начинки
        </Tab>
      </div>
      <div
        className={styles.content}
        ref={tabsNavRef}
        onScroll={() => updateNav({ selected: null })}
      >
        <div className="mt-10" data-val="bun" ref={tabsBunRef}>
          <h2 className="text text_type_main-medium">Булки</h2>
          {<TabsCategory category="bun" />}
        </div>
        <div className="mt-10" data-val="sauce" ref={tabsSauceRef}>
          <h2 className="text text_type_main-medium">Соусы</h2>
          {<TabsCategory category="sauce" />}
        </div>
        <div className="mt-10" data-val="main" ref={tabsMainRef}>
          <h2 className="text text_type_main-medium">Начинки</h2>
          {<TabsCategory category="main" />}
        </div>
      </div>
      <Modal isOpen={viewed.viewItemModalOpen} close={() => modalClose()}>
        <IngredientDetails item={viewed.viewItemElement} />
      </Modal>
    </>
  );
};

const TabsCategory = (props: { category: string }) => {
  const catalog = useAppSelector((state) => state.catalog);
  const basket = useAppSelector((state) => state.basket);
  const items = catalog.items.data.filter(function (category: {
    type: string;
  }) {
    return category.type === props.category;
  });
  return (
    <ul className={styles.items + " pl-4 pr-4"}>
      {items.map((item: ItemProps) => (
        <TabsItem
          key={item._id}
          item={item}
          basketCart={basket.basket.filter(
            (i: ItemProps) => i._id === item._id
          )}
        />
      ))}
    </ul>
  );
};

TabsCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

//{ item: ItemProps }
const TabsItem = (props: { item: ItemProps; basketCart: Array<ItemProps> }) => {
  const dispatch = useDispatch();

  const [{ opacity }, ref] = useDrag({
    type: "items",
    item: props.item,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.3 : 1,
    }),
  });

  const history = useHistory();

  const openItem = (item: ItemProps) => {
    dispatch({ type: VIEW_ITEM, item: props.item });
    history.replace(`/ingredients/${props.item._id}`, { modal: true });
  };

  const count = props.basketCart.length;

  return (
    <>
      <li
        className={styles.item + " mt-6"}
        onClick={() => openItem(props.item)}
        ref={ref}
        style={{ opacity }}
      >
        <div className={styles.item_image + " ml-4 mr-4"}>
          <img src={props.item.image} alt={props.item.name} />
        </div>
        <div className={styles.item_price + " mt-1 mb-1"}>
          <span className="text text_type_digits-default mr-2">
            {props.item.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className={styles.item_title + " p-1 text text_type_main-default"}>
          {props.item.name}
        </h3>
        {count !== 0 ? <Counter count={count} size="default" /> : ""}
      </li>
    </>
  );
};

function BurgerIngredients() {
  return (
    <section className={styles.section + " mt-10"}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      {<Tabs />}
    </section>
  );
}

export default BurgerIngredients;
