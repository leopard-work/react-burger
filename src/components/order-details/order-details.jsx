import React, {useContext, useEffect, useState} from "react";
import {BurgerConstructorContext} from '../../services/BurgerConstructorContext';

import "@ya.praktikum/react-developer-burger-ui-components";
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-details.module.css";


const OrderDetails = () => {

    const {orderItems, setOrderItems} = useContext(BurgerConstructorContext);
    const {orderNumber, setOrderNumber} = useState(null);

    const body = {
        ingredients: orderItems.items.map((item, i) => item._id),
    }

    useEffect(() => {
        const url = 'https://norma.nomoreparties.space/api/orders';
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then(res => {
                if (res.ok) return res.json();
                else return Promise.reject(`Ошибка ${res.status}`);
            })
            .then(res => {
                if (!res.success) alert('Ошибка оформления заказа');
                setOrderItems({
                    ...orderItems,
                    orderNumber: res.order.number
                })
            })
            .catch(error => alert(error))
    }, [])

    return (
        <div className={styles.checkout + " pt-30 pb-30"}>
            <p className="text text_type_digits-large mb-8">034536</p>
            <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
            <div className={styles.done + " mb-15"}>
                <CheckMarkIcon type="primary" />
            </div>
            <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;