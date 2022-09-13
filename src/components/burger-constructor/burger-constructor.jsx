import React, {useState, useContext, useEffect} from "react";
import {ItemPropTypes} from "../../utils/data";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {BurgerConstructorContext} from '../../services/BurgerConstructorContext';

import '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

const ConsructorItem = (props) => {
    return (
        <li className={styles.item + " mt-4"}>
            {props.item.type !== 'bun' ? <span className={styles.drag}><DragIcon type="primary" /></span> : (<span />)}
            <ConstructorElement
                type={props.item.type === 'bun' ? props.type : ''}
                isLocked={props.item.type === 'bun'}
                text={props.item.name + (props.type === 'top' ? '\n(верх)' : '') + (props.type === 'bottom' ? '\n(низ)' : '')}
                price={props.item.price}
                thumbnail={props.item.image}
            />
        </li>
    )
}

ConsructorItem.propTypes = {
    item: ItemPropTypes
}

const BurgerConstructor = () => {

    const {orderItems, setOrderItems} = useContext(BurgerConstructorContext);

    const [state, setState] = useState({
        items: orderItems.items.map((item, i) => item.type !== 'bun' ? <ConsructorItem key={item._id} item={item}/> : ''),
        bun: orderItems.items.filter(item => item.type === 'bun'),
        modalOpen: false,
        total: 0
    });

    useEffect(() => {
        let total = 0;
        orderItems.items.forEach((item) => {
            total += +item.price;
        });
        setOrderItems({
            ...orderItems,
            totalPrice: total
        });
    }, [setOrderItems]);


    const modalChange = () => {
        setState ({
            ...state,
            modalOpen: !state.modalOpen
        })
    }


    return (

        <section className={styles.section + " mt-25"}>
            {state.bun[0] ? <ConsructorItem item={state.bun[0]} type='top'/> : ''}
            <ul className={styles.content + " pr-2"}>
                {state.items}
            </ul>
            {state.bun[0] ? <ConsructorItem item={state.bun[0]} type='bottom'/> : ''}
            <div className={styles.info + " mt-10 mr-4"}>
                <p className={styles.price + " mr-10"}>
                    <span className="text text_type_digits-medium mr-2">{orderItems.totalPrice}</span>
                    <CurrencyIcon type="primary" />
                </p>
                <Button type="primary" size="medium" onClick={modalChange}>
                    Оформить заказ
                </Button>
            </div>
            <Modal isOpen={state.modalOpen} close={modalChange}>
                <BurgerConstructorContext.Provider value={{orderItems, setOrderItems}}>
                    <OrderDetails />
                </BurgerConstructorContext.Provider>
            </Modal>
        </section>
    );

}

export default BurgerConstructor;
