import React from "react";

import "@ya.praktikum/react-developer-burger-ui-components";
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-details.module.css";


const OrderDetails = () => {
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