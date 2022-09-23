import React, {useState} from "react";
import {ItemPropTypes} from "../../utils/data";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {createOrder} from '../../utils/api';

import '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import {useSelector} from "react-redux";

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

    const orderItems = useSelector(state => state.cart.basket);

    const [state, setState] = useState({
        modalOpen: false,
        orderNumber: 0,
    });
    const [loading, setLoading] = useState(false);

    const items = orderItems.map((item, i) => item.type !== 'bun' ? <ConstructorItem key={item._id} item={item}/> : '');
    const bun = orderItems.find(item => item.type === 'bun');
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
        setLoading(true);
        const body = {
            ingredients: orderItems.map(item => item._id),
        }
        createOrder(body).then((response) => {
            setState ({
                ...state,
                orderNumber: response.order.number,
                modalOpen: !state.modalOpen
            });
            setLoading(false);
        });
    }

    return (

        <section className={styles.section + " mt-25"}>
            {bun ? <ConstructorItem item={bun} type='top'/> : ''}
            <ul className={styles.content + " pr-2"}>
                {items}
            </ul>
            {bun ? <ConstructorItem item={bun} type='bottom'/> : ''}
            <div className={styles.info + " mt-10 mr-4"}>
                <p className={styles.price + " mr-10"}>
                    <span className="text text_type_digits-medium mr-2">{totalPrice}</span>
                    <CurrencyIcon type="primary" />
                </p>
                {!loading &&
                    <Button type="primary" size="medium" onClick={checkOut}>
                        Оформить заказ
                    </Button>
                }
                {loading &&
                    <Button type="primary" size="medium" disabled="disabled">
                        Загрузка...
                    </Button>
                }
            </div>
            <Modal isOpen={state.modalOpen} close={modalChange}>
                <OrderDetails number={state.orderNumber} />
            </Modal>
        </section>
    );

}

export default BurgerConstructor;
