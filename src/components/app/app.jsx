import React, {useEffect} from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../../services/actions/cart";

function App() {

    const dispatch = useDispatch();
    const cart  = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    return (
      <>
          <AppHeader />
          <main className={styles.main + " pb-10"}>
              {cart.items.success && !cart.itemsFailed &&
                  <div className="container pl-4 pr-4">
                      <div className={styles.blocks}>
                          <BurgerIngredients/>
                          <BurgerConstructor />
                      </div>
                  </div>
              }
              {!cart.items.success && !cart.itemsFailed &&
                  <div className={`${styles.loading} text text_type_main-medium`}>Загрузка ...</div>
              }
              {cart.itemsFailed &&
                  <div className={`${styles.loading} text text_type_main-medium`}>Ошибка. Повторите попытку ...</div>
              }
          </main>
      </>
    );
}

export default App;

