import React, { useEffect, FC } from "react";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import {
  forgotUser,
  loginUser,
  registerUser,
  resetUser,
} from "../../services/actions/user";
import { useForm } from "../../hooks/useForm";
import { useAppSelector, useAppDispatch } from "../../services/reducers";
import page404 from "../../pages/Page404";

type LoginProps = {
  type: string;
};

const Login: FC<LoginProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const user = useAppSelector((state) => state.user);

  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    password: "",
    code: "",
    redirect: false,
    error: false,
    errorText: "",
    disabled: false,
  });

  type ProfileProps = {
    email?: string;
    name?: string;
    password?: string;
    token?: string;
  };

  // РЕГИСТРАЦИЯ

  useEffect(() => {
    if (user["registerFailed"])
      setValues({
        ...values,
        error: true,
        errorText: "Данный пользователь уже зарегистрирован",
        disabled: false,
      });
    if (user["registerSuccess"]) {
      setValues({
        ...values,
        error: true,
        errorText: "Успешно, переадресация через 3 секунды...",
      });
      setTimeout(() => {
        history.replace("/");
      }, 3000);
    }
  }, [user]);

  const registerSend = (e: any) => {
    e.preventDefault();
    setValues({
      ...values,
      disabled: true,
    });
    if (
      e.target.email.value &&
      e.target.password.value &&
      e.target.name.value
    ) {
      const body: ProfileProps = {
        email: e.target.email.value,
        password: e.target.password.value,
        name: e.target.name.value,
      };

      dispatch(registerUser(body));
    } else {
      setValues({
        ...values,
        error: true,
        errorText: "Требуется заполнить все поля",
      });
    }
  };

  // АВТОРИЗАЦИЯ

  useEffect(() => {
    if (user["loginFailed"])
      setValues({
        ...values,
        error: true,
        errorText: "Неверная почта или пароль",
        disabled: false,
      });
    if (user["loginSuccess"]) {
      setValues({
        ...values,
        disabled: false,
      });
      history.goBack();
    }
  }, [user]);

  const loginSend = (e: any) => {
    e.preventDefault();
    setValues({
      ...values,
      disabled: true,
    });
    if (e.target.email.value && e.target.password.value) {
      const body: ProfileProps = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      dispatch(loginUser(body));
    } else {
      setValues({
        ...values,
        error: true,
        errorText: "Требуется заполнить все поля",
      });
    }
  };

  // ВОССТАНОВЛЕНИЕ ПАРОЛЯ

  useEffect(() => {
    if (user["forgotFailed"])
      setValues({
        ...values,
        error: true,
        errorText: "Неверная почта",
        disabled: false,
      });
    if (user["forgotSuccess"]) {
      history.replace("/reset-password");
    }
  }, [user]);

  const forgotSend = (e: any) => {
    e.preventDefault();
    setValues({
      ...values,
      disabled: true,
    });
    if (e.target.email.value) {
      const body: ProfileProps = {
        email: e.target.email.value,
      };
      dispatch(forgotUser(body));
    } else {
      setValues({
        ...values,
        error: true,
        errorText: "Введите вашу почту",
      });
    }
  };

  // ИЗМЕНЕНИЕ ПАРОЛЯ

  useEffect(() => {
    if (user["resetFailed"])
      setValues({
        ...values,
        error: true,
        errorText: "Неверный код",
        disabled: false,
      });
    if (user["resetSuccess"]) {
      history.replace("/login");
    }
  }, [user]);

  const resetSend = (e: any) => {
    e.preventDefault();
    setValues({
      ...values,
      disabled: true,
    });
    if (e.target.password.value && e.target.code.value) {
      const body: ProfileProps = {
        password: e.target.password.value,
        token: e.target.code.value,
      };
      dispatch(resetUser(body));
    } else {
      setValues({
        ...values,
        error: true,
        errorText: "Требуется заполнить все поля",
      });
    }
  };

  if (type === "login") {
    return (
      <div className={styles.container}>
        <div className="text text_type_main-medium mb-6">Вход</div>
        {values.error ? (
          <p className="text text_type_main-default mb-4">{values.errorText}</p>
        ) : (
          ""
        )}
        <form onSubmit={loginSend}>
          <div className="mb-6">
            <EmailInput
              onChange={handleChange}
              value={values.email}
              name={"email"}
            />
          </div>
          <div className="mb-6">
            <PasswordInput
              onChange={handleChange}
              value={values.password}
              name={"password"}
            />
          </div>
          <div className="mb-20">
            <Button
              type="primary"
              size="medium"
              disabled={values.disabled}
              htmlType="submit"
            >
              Войти
            </Button>
          </div>
          <p className="text text_type_main-default text_color_inactive mb-4">
            Вы — новый пользователь?{" "}
            <Link className={styles.link} to="/register">
              Зарегистрироваться
            </Link>
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Забыли пароль?{" "}
            <Link className={styles.link} to="/forgot-password">
              Восстановить пароль
            </Link>
          </p>
        </form>
      </div>
    );
  }

  if (type === "register") {
    return (
      <div className={styles.container}>
        <div className="text text_type_main-medium mb-6">Регистрация</div>
        {values.error ? (
          <p className="text text_type_main-default mb-4">{values.errorText}</p>
        ) : (
          ""
        )}
        <form onSubmit={registerSend}>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={handleChange}
              value={values.name}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mb-6">
            <EmailInput
              onChange={handleChange}
              value={values.email}
              name={"email"}
            />
          </div>
          <div className="mb-6">
            <PasswordInput
              onChange={handleChange}
              value={values.password}
              name={"password"}
            />
          </div>
          <div className="mb-20">
            <Button
              type="primary"
              size="medium"
              htmlType="submit"
              disabled={values.disabled}
            >
              Зарегистрироваться
            </Button>
          </div>
          <p className="text text_type_main-default text_color_inactive mb-4">
            Уже зарегистрированы?{" "}
            <Link className={styles.link} to="/login">
              Войти
            </Link>
          </p>
        </form>
      </div>
    );
  }

  if (type === "forgot") {
    return (
      <div className={styles.container}>
        <div className="text text_type_main-medium mb-6">
          Восстановление пароля
        </div>
        {values.error ? (
          <p className="text text_type_main-default mb-4">{values.errorText}</p>
        ) : (
          ""
        )}
        <form onSubmit={forgotSend}>
          <div className="mb-6">
            <EmailInput
              onChange={handleChange}
              value={values.email}
              name={"email"}
            />
          </div>
          <div className="mb-20">
            <Button
              type="primary"
              size="medium"
              htmlType="submit"
              disabled={values.disabled}
            >
              Восстановить
            </Button>
          </div>
          <p className="text text_type_main-default text_color_inactive mb-4">
            Вспомнили пароль?{" "}
            <Link className={styles.link} to="/login">
              Войти
            </Link>
          </p>
        </form>
      </div>
    );
  }

  if (type === "reset") {
    return (
      <div className={styles.container}>
        <div className="text text_type_main-medium mb-6">
          Восстановление пароля
        </div>
        {values.error ? (
          <p className="text text_type_main-default mb-4">{values.errorText}</p>
        ) : (
          ""
        )}
        <form onSubmit={resetSend}>
          <div className="mb-6">
            <PasswordInput
              onChange={handleChange}
              value={values.password}
              name={"password"}
              placeholder={"Введите новый пароль"}
            />
          </div>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"Введите код из письма"}
              onChange={handleChange}
              value={values.code}
              name={"code"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mb-20">
            <Button
              type="primary"
              size="medium"
              htmlType="submit"
              disabled={values.disabled}
            >
              Сохранить
            </Button>
          </div>
          <p className="text text_type_main-default text_color_inactive mb-4">
            Вспомнили пароль?{" "}
            <Link className={styles.link} to="/login">
              Войти
            </Link>
          </p>
        </form>
      </div>
    );
  }

  return page404();
};

export default Login;
