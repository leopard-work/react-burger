import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {BurgerConstructorContext} from '../../services/BurgerConstructorContext';
import {BurgerIngredientsContext} from '../../services/BurgerIngredientsContext';
import {loadIngredients} from '../../utils/api';

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../../services/actions/cart";

function App() {

    const dispatch = useDispatch();
    const cart  = useSelector(state => state.cart);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        dispatch(getItems());

        loadIngredients().then((response) => {
            setData(response.data);
            /* ВРЕМЕННОЕ ИЗМЕНЕНИЕ ЗАКАЗА */
            setOrderItems([response.data[0], response.data[2], response.data[6], response.data[9]])
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    console.log(cart);


    return (
      <>
          <AppHeader />
          <main className={styles.main + " pb-10"}>
              {!cart.itemsRequest &&
                  <div className="container pl-4 pr-4">
                      <div className={styles.blocks}>
                          <BurgerIngredientsContext.Provider value={{data}}>
                            <BurgerIngredients/>
                          </BurgerIngredientsContext.Provider>
                          <BurgerConstructorContext.Provider value={{orderItems}}>
                            <BurgerConstructor />
                          </BurgerConstructorContext.Provider>
                      </div>
                  </div>
              }
              {cart.itemsRequest &&
                  <div className={`${styles.loading} text text_type_main-medium`}>Загрузка ...</div>
              }
          </main>
      </>
    );
}

export default App;
