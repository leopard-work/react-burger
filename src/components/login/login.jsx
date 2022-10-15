import React, {useEffect, useState} from "react";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import {Button, EmailInput, PasswordInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {forgotUser, loginUser, registerUser} from "../../services/actions/user";
import {useDispatch, useSelector} from "react-redux";

const Login = ({ type }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.user);

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        code: '',
        redirect: false,
        error: false,
        errorText: '',
        disabled: false
    });
    const onChangeValues = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    // РЕГИСТРАЦИЯ

    useEffect(() => {
        if (user.registerFailed) setValues({
            ...values,
            error: true,
            errorText: 'Данный пользователь уже зарегистрирован',
            disabled: false
        })
        if (user.registerSuccess) {
            setValues({
                ...values,
                error: true,
                errorText: 'Успешно, переадресация через 3 секунды...'
            })
            setTimeout(() => {
                history.replace('/');
            }, 3000)
        }
    },[user])

    const registerSend = e => {
        e.preventDefault();
        setValues({
            ...values,
            disabled: true
        })
        if (e.target.email.value && e.target.password.value && e.target.name.value) {
            const body = {
                email: e.target.email.value,
                password: e.target.password.value,
                name: e.target.name.value,
            }
            dispatch(registerUser(body));
        } else {
            setValues({
                ...values,
                error: true,
                errorText: 'Требуется заполнить все поля',
            })
        }
    }


    // АВТОРИЗАЦИЯ

    useEffect(() => {
        if (user.loginFailed) setValues({
            ...values,
            error: true,
            errorText: 'Неверная почта или пароль',
            disabled: false
        })
        if (user.loginSuccess) {
            history.replace('/');
        }
    },[user])

    const loginSend = e => {
        e.preventDefault();
        setValues({
            ...values,
            disabled: true
        });
        if (e.target.email.value && e.target.password.value) {
            const body = {
                email: e.target.email.value,
                password: e.target.password.value
            }
            dispatch(loginUser(body));
        } else {
            setValues({
                ...values,
                error: true,
                errorText: 'Требуется заполнить все поля',
            })
        }
    }


    // ВОССТАНОВЛЕНИЕ ПАРОЛЯ

    useEffect(() => {
        if (user.forgotFailed) setValues({
            ...values,
            error: true,
            errorText: 'Неверная почта',
            disabled: false
        })
        if (user.forgotSuccess) {
            history.replace('/reset-password');
        }
    },[user])

    const forgotSend = e => {
        e.preventDefault();
        setValues({
            ...values,
            disabled: true
        });
        if (e.target.email.value) {
            const body = {
                email: e.target.email.value,
            }
            dispatch(forgotUser(body));
        } else {
            setValues({
                ...values,
                error: true,
                errorText: 'Введите вашу почту',
            })
        }
    }
    

    if (type === 'login') {
        return (
            <div className={styles.container}>
                <div className="text text_type_main-medium mb-6">Вход</div>
                {values.error ? (
                    <p className="text text_type_main-default mb-4">{values.errorText}</p>
                ) : ''}
                <form onSubmit={loginSend}>
                <div className="mb-6"><EmailInput onChange={onChangeValues} value={values.email} name={'email'}/></div>
                <div className="mb-6"><PasswordInput onChange={onChangeValues} value={values.password} name={'password'}/>
                </div>
                <div className="mb-20"><Button type="primary" size="medium" disabled={values.disabled} htmlType="submit">Войти</Button></div>
                <p className="text text_type_main-default text_color_inactive mb-4">Вы — новый пользователь? <Link
                    className={styles.link} to="/register">Зарегистрироваться</Link></p>
                <p className="text text_type_main-default text_color_inactive">Забыли пароль? <Link
                    className={styles.link} to="/forgot-password">Восстановить пароль</Link></p>
                </form>
            </div>
        );
    }

    if (type === 'register') {
        return (
            <div className={styles.container}>
                <div className="text text_type_main-medium mb-6">Регистрация</div>
                {values.error ? (
                    <p className="text text_type_main-default mb-4">{values.errorText}</p>
                ) : ''}
                <form onSubmit={registerSend}>
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
                    <div className="mb-20"><Button type="primary" size="medium" htmlType="submit" disabled={values.disabled}>Зарегистрироваться</Button></div>
                    <p className="text text_type_main-default text_color_inactive mb-4">Уже зарегистрированы? <Link
                        className={styles.link} to="/login">Войти</Link></p>
                </form>
            </div>
        );
    }

    if (type === 'forgot') {
        return (
            <div className={styles.container}>
                <div className="text text_type_main-medium mb-6">Восстановление пароля</div>
                {values.error ? (
                    <p className="text text_type_main-default mb-4">{values.errorText}</p>
                ) : ''}
                <form onSubmit={forgotSend}>
                    <div className="mb-6"><EmailInput onChange={onChangeValues} value={values.email} name={'email'}/></div>
                    <div className="mb-20"><Button type="primary" size="medium"  htmlType="submit" disabled={values.disabled}>Восстановить</Button></div>
                    <p className="text text_type_main-default text_color_inactive mb-4">Вспомнили пароль? <Link
                        className={styles.link} to="/login">Войти</Link></p>
                </form>
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
                    className={styles.link} to="/login">Войти</Link></p>
            </div>
        );
    }
}

export default Login;
