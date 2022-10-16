import React, { useEffect, useState } from "react";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { NavLink, useHistory } from "react-router-dom";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction, updateUser } from "../../services/actions/user";
import PropTypes from "prop-types";

const Profile = ({ type }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [editProfile, setEditProfile] = useState(false);
  const initialState = {
    name: user.user.name,
    email: user.user.email,
    password: "",
    disabled: false,
  };
  const [values, setValues] = useState(initialState);

  const onChangeValues = (e) => {
    setEditProfile(true);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const cancelEdit = () => {
    setEditProfile(false);
    setValues(initialState);
  };

  useEffect(() => {
    if (user.updateUserFailed)
      setValues({
        ...values,
        error: true,
        errorText: "Произошла ошибка",
        disabled: false,
      });
    if (user.updateUserSuccess) {
      setValues({
        ...values,
        error: true,
        errorText: "Сохранено",
        disabled: false,
      });
      setEditProfile(false);
    }
  }, [user]);

  const updateUserSend = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      disabled: true,
    });
    if (e.target.email.value && e.target.name.value) {
      let body = {
        email: e.target.email.value,
        name: e.target.name.value,
      };
      if (e.target.password.value) {
        body = {
          ...body,
          password: e.target.password.value,
        };
      }
      dispatch(updateUser(body, user.accessToken));
    } else {
      setValues({
        ...values,
        error: true,
        errorText: "Имя или почта не могут быть пустыми",
      });
    }
  };

  const logoutUser = (e) => {
    e.preventDefault();
    const body = {
      token: user.refreshToken,
    };
    dispatch(logoutUserAction(body));
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <ul>
            <li>
              <NavLink
                exact
                to="/profile"
                className="text text_type_main-medium text_color_inactive"
                activeClassName={styles.active}
              >
                Профиль
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/profile/orders"
                className="text text_type_main-medium text_color_inactive"
                activeClassName={styles.active}
              >
                История заказов
              </NavLink>
            </li>
            <li>
              <a
                href="/"
                onClick={logoutUser}
                className="text text_type_main-medium text_color_inactive"
              >
                Выход
              </a>
            </li>
          </ul>
          <p
            className={
              styles.info +
              " text text_type_main-default text_color_inactive mt-20"
            }
          >
            {type === "setup"
              ? "В этом разделе вы можете изменить свои персональные данные"
              : ""}
            {type === "orders"
              ? "В этом разделе вы можете просмотреть свою историю заказов"
              : ""}
          </p>
        </div>
        <div className={styles.content}>
          {type === "setup" ? (
            <div className={styles.setup}>
              {values.error ? (
                <p className="text text_type_main-default mb-4">
                  {values.errorText}
                </p>
              ) : (
                ""
              )}
              <form onSubmit={updateUserSend}>
                <div className="mb-6">
                  <Input
                    type={"text"}
                    placeholder={"Имя"}
                    onChange={onChangeValues}
                    value={values.name}
                    name={"name"}
                    error={false}
                    errorText={"Ошибка"}
                    size={"default"}
                    icon={"EditIcon"}
                  />
                </div>
                <div className="mb-6">
                  <EmailInput
                    onChange={onChangeValues}
                    value={values.email}
                    name={"email"}
                    icon={"EditIcon"}
                  />
                </div>
                <div className="mb-6">
                  <PasswordInput
                    onChange={onChangeValues}
                    value={values.password}
                    name={"password"}
                  />
                </div>
                {editProfile === true ? (
                  <div className={styles.setup_buttons}>
                    <Button
                      type="secondary"
                      size="medium"
                      htmlType="submit"
                      onClick={() => cancelEdit()}
                    >
                      Отмена
                    </Button>
                    <Button
                      type="primary"
                      size="medium"
                      htmlType="submit"
                      disabled={values.disabled}
                    >
                      Сохранить
                    </Button>
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
          ) : (
            ""
          )}
          {type === "orders" ? (
            <div className={styles.setup}>
              <p className="text text_type_main-medium">В разработке...</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Profile;
