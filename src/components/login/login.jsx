import React from "react";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = React.useState(null)
    const [password, setPassword] = React.useState(null)

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }
    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    return (
      <div className={styles.container}>
          <div className="text text_type_main-medium mb-6">Вход</div>
          <div className="mb-6"><EmailInput onChange={onChangeEmail} value={email} name={'email'} /></div>
          <div className="mb-6"><PasswordInput onChange={onChangePassword} value={password} name={'password'} /></div>
          <div className="mb-20"><Button type="primary" size="medium">Войти</Button></div>
          <p className="text text_type_main-default text_color_inactive mb-4">Вы — новый пользователь? <Link className={styles.link} to="/">Зарегистрироваться</Link> </p>
          <p className="text text_type_main-default text_color_inactive">Забыли пароль? <Link className={styles.link} to="/">Восстановить пароль</Link> </p>
      </div>
    );
}

export default Login;
