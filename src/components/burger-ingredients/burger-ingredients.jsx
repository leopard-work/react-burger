import React, {useState} from "react";
import {ItemPropTypes} from "../../utils/data";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import "@ya.praktikum/react-developer-burger-ui-components";
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import {arrayOf} from "prop-types";

const TabsNav = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className={styles.tabs}>
            <Tab className={styles.tab} value="one" active={current === 'one'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab className={styles.tab} value="two" active={current === 'two'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab className={styles.tab} value="three" active={current === 'three'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

const Tabs = (props) => {
    return (
        <div className={styles.content }>
            <div className={styles.content_block+ " mt-10"}>
                <h2 className="text text_type_main-medium">Булки</h2>
                {<TabsCategory category="bun" data={props.data} />}
            </div>
            <div className={styles.content_block+ " mt-10"}>
                <h2 className="text text_type_main-medium">Соусы</h2>
                {<TabsCategory category="sauce" data={props.data} />}
            </div>
            <div className={styles.content_block+ " mt-10"}>
                <h2 className="text text_type_main-medium">Начинки</h2>
                {<TabsCategory category="main" data={props.data} />}
            </div>
        </div>
    )
}

Tabs.propTypes = {
    data: arrayOf(ItemPropTypes).isRequired
}

const TabsCategory = (props) => {
    const items = props.data.filter(function(category) {
        return category.type === props.category;
    });
    return (
        <ul className={styles.items + " pl-4 pr-4"}>
            {items.map((item) => <TabsItem key={item._id} item={item} />)}
        </ul>
    )
}

TabsCategory.propTypes = {
    data: arrayOf(ItemPropTypes).isRequired
}


const TabsItem = (props) => {
    const [state, setState] = useState({
        modalOpen: false,
        selectedItem: ''
    });
    const modalChange = (props) => {
        setState ({
            ...state,
            modalOpen: !state.modalOpen,
            selectedItem: props
        })
    }

    return (
        <>
            <li className={styles.item + " mt-6"} onClick={() => modalChange(props.item)}>
                <div className={styles.item_image + " ml-4 mr-4"}>
                    <img src={props.item.image} alt={props.item.name} />
                </div>
                <div className={styles.item_price + " mt-1 mb-1"}>
                    <span className="text text_type_digits-default mr-2">{props.item.price}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <h3 className={styles.item_title + " p-1 text text_type_main-default"}>{props.item.name}</h3>
                {props.item.count && <Counter count="{props.item.count}" size="default" />}
            </li>
            {state.selectedItem && <Modal isOpen={state.modalOpen} close={() => modalChange(props.item)}>
                <IngredientDetails item={state.selectedItem} />
            </Modal>}
        </>
    )
}

TabsItem.propTypes = {
    item: ItemPropTypes
}

function BurgerIngredients(props) {
    return (
        <section className={styles.section + " mt-10"}>
            <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
            {<TabsNav />}
            {<Tabs data={props.data} />}
        </section>
    );
}

BurgerIngredients.propTypes = {
    data: arrayOf(ItemPropTypes).isRequired
}


export default BurgerIngredients;
