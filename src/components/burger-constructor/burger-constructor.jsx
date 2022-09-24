import React, {useState} from "react";
import {ItemPropTypes} from "../../utils/data";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

import '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import {useDispatch, useSelector} from "react-redux";
import {checkOutSend, CLEAR_ORDER, REMOVE_FROM_BASKET} from "../../services/actions/cart";

const ConstructorItem = (props) => {
    return (
        <li className={styles.item + " mt-4"}>
            {props.item.type !== 'bun' ? <span className={styles.drag}><DragIcon type="primary" /></span> : (<span />)}
            <ConstructorElement
                type={props.item.type === 'bun' ? props.type : ''}
                isLocked={props.item.type === 'bun'}
                text={props.item.name + (props.type === 'top' ? '\n(верх)' : '') + (props.type === 'bottom' ? '\n(низ)' : '') + (props.item.count > 1 ? ' x' + props.item.count : '')}
                price={props.item.price}
                thumbnail={props.item.image}
                handleClose={() => props.deleteItem(props.item)}
            />
        </li>
    )
}

ConstructorItem.propTypes = {
    item: ItemPropTypes
}

const BurgerConstructor = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const orderItems = cart.basket;

    const [state, setState] = useState({
        modalOpen: false,
        orderNumber: 0,
    });
    const [loading, setLoading] = useState(false);

    const removeFromBasket = item => {
        dispatch({
            type: REMOVE_FROM_BASKET,
            item
        })
    }

    const items = orderItems.map((item, i) => item.type !== 'bun' ? <ConstructorItem key={item._id} item={item} deleteItem={removeFromBasket}/> : '');
    const bun = orderItems.find(item => item.type === 'bun');
    const initialValue = 0;
    const totalPrice = orderItems.reduce(function (accumulator, currentValue) {
        if (currentValue.type === 'bun') return accumulator + currentValue.price * 2;
        else return accumulator + currentValue.price;
    }, initialValue)


    const modalClose = () => {
        // setState ({
        //     ...state,
        //     modalOpen: !state.modalOpen
        // })

    }

    const checkOut = () => {

        // setLoading(true);

        // createOrder(body).then((response) => {
        //     setState ({
        //         ...state,
        //         orderNumber: response.order.number,
        //         modalOpen: !state.modalOpen
        //     });
        //     setLoading(false);
        // });
        const ingredients = [];
        orderItems.forEach(item => {
            for (let i = 0; i < item.count; i++) {
                ingredients.push(item._id);
                if (item.type === 'bun') ingredients.push(item._id);
            }
        });
        const body = {ingredients: ingredients}
        dispatch(checkOutSend(body));
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
                {!cart.orderRequest && !cart.orderFailed &&
                    (<Button type="primary" size="medium" onClick={checkOut} disabled={!cart.basket.length && 'disabled'}>
                        Оформить заказ
                    </Button>)
                }
                {cart.orderRequest && !cart.orderFailed &&
                    <Button type="primary" size="medium" disabled="disabled">
                        Загрузка...
                    </Button>
                }
                {cart.orderFailed &&
                    <Button type="primary" size="medium">
                        Ошибка. Повторите попытку
                    </Button>
                }
            </div>
            <Modal isOpen={cart.orderModalOpen} close={() => dispatch({type: CLEAR_ORDER})}>
                <OrderDetails info={cart.orderInfo} />
            </Modal>
        </section>
    );

}

export default BurgerConstructor;
