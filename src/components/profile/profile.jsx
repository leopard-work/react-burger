import React, {useState} from "react";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import {NavLink} from "react-router-dom";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const Profile = ({ type }) => {

    const [editProfile, setEditProfile] = useState(false);
    const [values, setValues] = useState({
        name: 'Вася',
        email: 'test@mail.ru',
        password: ''
    });

    const onChangeValues = e => {
        setEditProfile(true);
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const cancelEdit = () => {
        setEditProfile(false);
        setValues({
            name: 'Вася',
            email: 'test@mail.ru',
            password: ''
        });
    }

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.sidebar}>

                    <ul>
                        <li><NavLink exact to="/profile" className="text text_type_main-medium text_color_inactive" activeClassName={styles.active}>Профиль</NavLink></li>
                        <li><NavLink exact to="/profile/orders" className="text text_type_main-medium text_color_inactive" activeClassName={styles.active}>История заказов</NavLink></li>
                        <li><NavLink exact to="/" className="text text_type_main-medium text_color_inactive" activeClassName={styles.active}>Выход</NavLink></li>
                    </ul>
                    <p className={styles.info + " text text_type_main-default text_color_inactive mt-20"}>
                        {type === 'setup' ? 'В этом разделе вы можете изменить свои персональные данные' : ''}
                        {type === 'orders' ? 'В этом разделе вы можете просмотреть свою историю заказов' : ''}
                    </p>
                </div>
                <div className={styles.content}>
                    {type === 'setup' ? (
                        <div className={styles.setup}>
                            <div className="mb-6">
                                <Input
                                    type={'text'}
                                    placeholder={'Имя'}
                                    onChange={onChangeValues}
                                    value={values.name}
                                    name={'name'}
                                    error={false}
                                    errorText={'Ошибка'}
                                    size={'default'}
                                    icon={'EditIcon'}
                                />
                            </div>
                            <div className="mb-6"><EmailInput onChange={onChangeValues} value={values.email} name={'email'} icon={'EditIcon'}/></div>
                            <div className="mb-6"><PasswordInput onChange={onChangeValues} value={values.password} name={'password'}/></div>
                            {editProfile === true ? (
                                <div className={styles.setup_buttons}>
                                    <Button type="secondary" size="medium" htmlType="submit" onClick={() => cancelEdit()}>Отмена</Button>
                                    <Button type="primary" size="medium" htmlType="submit">Сохранить</Button>
                                </div>
                            ) : ''}
                        </div>
                    ) : ''}
                    {type === 'orders' ? (
                        <div className={styles.setup}>
                            <p className="text text_type_main-medium">В разработке...</p>
                        </div>
                    ) : ''}
                </div>
            </div>
        </div>
    );
    
}

export default Profile;
