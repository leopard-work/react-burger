import React, {useState} from "react";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import {NavLink} from "react-router-dom";

const Profile = ({ type }) => {

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.sidebar}>
                    <ul>
                        <li><NavLink exact to="/profile" className="text text_type_main-medium text_color_inactive" activeClassName={styles.active}>Профиль</NavLink></li>
                        <li><NavLink exact to="/profile/orders" className="text text_type_main-medium text_color_inactive" activeClassName={styles.active}>История заказов</NavLink></li>
                        <li><NavLink exact to="/logout" className="text text_type_main-medium text_color_inactive" activeClassName={styles.active}>Выход</NavLink></li>
                    </ul>
                    <p className={styles.info + " text text_type_main-default text_color_inactive mt-20"}>
                        {type === 'setup' ? 'В этом разделе вы можете изменить свои персональные данные' : ''}
                        {type === 'orders' ? 'В этом разделе вы можете просмотреть свою историю заказов' : ''}
                    </p>
                </div>
                <div className={styles.content}>
                    content
                </div>
            </div>
        </div>
    );
    
}

export default Profile;
