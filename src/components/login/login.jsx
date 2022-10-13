import React, {useState} from "react";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import {Button, EmailInput, PasswordInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const Login = ({ type }) => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        code: ''
    });
    const onChangeValues = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    

    if (type === 'login') {
        return (
            <div className={styles.container}>
                <div className="text text_type_main-medium mb-6">Вход</div>
                <div className="mb-6"><EmailInput onChange={onChangeValues} value={values.email} name={'email'}/></div>
                <div className="mb-6"><PasswordInput onChange={onChangeValues} value={values.password} name={'password'}/>
                </div>
                <div className="mb-20"><Button type="primary" size="medium" htmlType="submit">Войти</Button></div>
                <p className="text text_type_main-default text_color_inactive mb-4">Вы — новый пользователь? <Link
                    className={styles.link} to="/">Зарегистрироваться</Link></p>
                <p className="text text_type_main-default text_color_inactive">Забыли пароль? <Link
                    className={styles.link} to="/">Восстановить пароль</Link></p>
            </div>
        );
    }

    if (type === 'register') {
        return (
            <div className={styles.container}>
                <div className="text text_type_main-medium mb-6">Регистрация</div>
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
                    />
                </div>
                <div className="mb-6"><EmailInput onChange={onChangeValues} value={values.email} name={'email'}/></div>
                <div className="mb-6"><PasswordInput onChange={onChangeValues} value={values.password} name={'password'}/></div>
                <div className="mb-20"><Button type="primary" size="medium" htmlType="submit">Зарегистрироваться</Button></div>
                <p className="text text_type_main-default text_color_inactive mb-4">Уже зарегистрированы? <Link
                    className={styles.link} to="/">Войти</Link></p>
            </div>
        );
    }

    if (type === 'forgot') {
        return (
            <div className={styles.container}>
                <div className="text text_type_main-medium mb-6">Восстановление пароля</div>
                <div className="mb-6"><EmailInput onChange={onChangeValues} value={values.email} name={'email'}/></div>
                <div className="mb-20"><Button type="primary" size="medium"  htmlType="submit">Восстановить</Button></div>
                <p className="text text_type_main-default text_color_inactive mb-4">Вспомнили пароль? <Link
                    className={styles.link} to="/">Войти</Link></p>
            </div>
        );
    }

    if (type === 'reset') {
        return (
            <div className={styles.container}>
                <div className="text text_type_main-medium mb-6">Восстановление пароля</div>
                <div className="mb-6"><PasswordInput onChange={onChangeValues} value={values.password} name={'password'} placeholder={'Введите новый пароль'}/></div>
                <div className="mb-6">
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={onChangeValues}
                        value={values.code}
                        name={'code'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className="mb-20"><Button type="primary" size="medium" htmlType="submit">Сохранить</Button></div>
                <p className="text text_type_main-default text_color_inactive mb-4">Вспомнили пароль? <Link
                    className={styles.link} to="/">Войти</Link></p>
            </div>
        );
    }
}

export default Login;
