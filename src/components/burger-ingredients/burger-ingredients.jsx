import React, {useRef} from "react";
import {ItemPropTypes} from "../../utils/data";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import "@ya.praktikum/react-developer-burger-ui-components";
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_ACTIVE_TAB, CLOSE_VIEW_ITEM, VIEW_ITEM} from "../../services/actions/cart";
import {useDrag} from "react-dnd";


const Tabs = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const current = cart.activeTab;

    const tabsNavRef = useRef(null);
    const tabsBunRef = useRef(null);
    const tabsSauceRef = useRef(null);
    const tabsMainRef = useRef(null);

    const updateNav = (props) => {
        const scrollTop = tabsNavRef.current.offsetTop + tabsNavRef.current.scrollTop;
        const coords = [tabsBunRef.current.offsetTop, tabsSauceRef.current.offsetTop, tabsMainRef.current.offsetTop];
        if (props.selected) {
            tabsNavRef.current.scrollTop = coords[props.selected] - tabsNavRef.current.offsetTop;
        } else {
            if (scrollTop < coords[2]) {
                if (scrollTop < coords[1]) {
                    dispatch({
                        type: CHANGE_ACTIVE_TAB,
                        activeTab: 'one'
                    })
                } else {
                    dispatch({
                        type: CHANGE_ACTIVE_TAB,
                        activeTab: 'two'
                    })
                }
            } else {
                dispatch({
                    type: CHANGE_ACTIVE_TAB,
                    activeTab: 'three'
                })
            }
        }
    }

    return (
        <>
            <div className={styles.tabs}>
                <Tab className={styles.tab} value="one" active={current === 'one'} onClick={() => updateNav({selected: '0'})}>
                    Булки
                </Tab>
                <Tab className={styles.tab} value="two" active={current === 'two'} onClick={() => updateNav({selected: '1'})}>
                    Соусы
                </Tab>
                <Tab className={styles.tab} value="three" active={current === 'three'} onClick={() => updateNav({selected: '2'})}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.content} ref={tabsNavRef} onScroll={updateNav}>
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
            <Modal isOpen={cart.viewItemModalOpen} close={() => dispatch({type: CLOSE_VIEW_ITEM})}>
                <IngredientDetails item={cart.viewItemElement} />
            </Modal>
        </>
    )
}

const TabsCategory = (props) => {
    const cart = useSelector(state => state.cart);
    const items = cart.items.data.filter(function(category) {
        return category.type === props.category;
    });
    return (
        <ul className={styles.items + " pl-4 pr-4"}>
            {items.map((item) => <TabsItem key={item._id} item={item} basketCart={cart.basket.find(i => i._id === item._id)} />)}
        </ul>
    )
}

TabsCategory.propTypes = {
    category: PropTypes.string.isRequired
}


const TabsItem = (props) => {
    const dispatch = useDispatch();

    const [{ opacity }, ref] = useDrag({
        type: 'items',
        item: props.item,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.3 : 1
        })
    });

    return (
        <>
            <li className={styles.item + " mt-6"} onClick={() => dispatch({type: VIEW_ITEM, item: props.item})} ref={ref} style={{ opacity }}>
                <div className={styles.item_image + " ml-4 mr-4"}>
                    <img src={props.item.image} alt={props.item.name} />
                </div>
                <div className={styles.item_price + " mt-1 mb-1"}>
                    <span className="text text_type_digits-default mr-2">{props.item.price}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <h3 className={styles.item_title + " p-1 text text_type_main-default"}>{props.item.name}</h3>
                {props.basketCart && <Counter count={props.basketCart.count} size="default" />}
            </li>
        </>
    )
}

TabsItem.propTypes = {
    item: ItemPropTypes
}



function BurgerIngredients() {
    return (
        <section className={styles.section + " mt-10"}>
            <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
            {<Tabs />}
        </section>
    );
}


export default BurgerIngredients;
