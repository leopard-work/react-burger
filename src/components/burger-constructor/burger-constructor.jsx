import React, {useState, useContext} from "react";
import {ItemPropTypes} from "../../utils/data";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {BurgerConstructorContext} from '../../services/BurgerConstructorContext';
import {loadOrder} from '../../utils/api';

import '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

const ConstructorItem = (props) => {
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

ConstructorItem.propTypes = {
    item: ItemPropTypes
}

const BurgerConstructor = () => {

    const {orderItems} = useContext(BurgerConstructorContext);

    const [state, setState] = useState({
        modalOpen: false,
        orderNumber: 0
    });

    const items = orderItems.map((item, i) => item.type !== 'bun' ? <ConstructorItem key={item._id} item={item}/> : '');
    const bun = orderItems.filter(item => item.type === 'bun');
    const initialValue = 0;
    const totalPrice = orderItems.reduce(function (accumulator, currentValue) {
        if (currentValue.type === 'bun') return accumulator + currentValue.price * 2;
        else return accumulator + currentValue.price;
    }, initialValue)


    const modalChange = () => {
        setState ({
            ...state,
            modalOpen: !state.modalOpen
        })
    }

    const checkOut = () => {
        const body = {
            ingredients: orderItems.map((item, i) => item._id),
        }
        loadOrder(body).then((response) => {
            setState ({
                ...state,
                orderNumber: response.order.number,
                modalOpen: !state.modalOpen
            })
        });
    }

    return (

        <section className={styles.section + " mt-25"}>
            {bun[0] ? <ConstructorItem item={bun[0]} type='top'/> : ''}
            <ul className={styles.content + " pr-2"}>
                {items}
            </ul>
            {bun[0] ? <ConstructorItem item={bun[0]} type='bottom'/> : ''}
            <div className={styles.info + " mt-10 mr-4"}>
                <p className={styles.price + " mr-10"}>
                    <span className="text text_type_digits-medium mr-2">{totalPrice}</span>
                    <CurrencyIcon type="primary" />
                </p>
                <Button type="primary" size="medium" onClick={checkOut}>
                    Оформить заказ
                </Button>
            </div>
            <Modal isOpen={state.modalOpen} close={modalChange}>
                <OrderDetails number={state.orderNumber} />
            </Modal>
        </section>
    );

}

export default BurgerConstructor;
