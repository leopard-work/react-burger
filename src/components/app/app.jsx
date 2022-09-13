import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {BurgerConstructorContext} from '../../services/BurgerConstructorContext';

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app.module.css";

function App() {
    const url = "https://norma.nomoreparties.space/api/ingredients";

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    const [orderItems, setOrderItems] = useState({
        items: [],
        totalPrice: 0,
        orderInfo: null
    });

    useEffect(() => {
        setState({...state, loading: true});
        fetch(url)
            .then(res => {
                if (res.ok) return res.json();
                else return Promise.reject(`Ошибка ${res.status}`);
            })
            .then(res => {
                setState({
                    ...state,
                    loading: false,
                    data: res.data
                });

                /* ВРЕМЕННОЕ ИЗМЕНЕНИЕ ЗАКАЗА */

                    setOrderItems({
                        ...orderItems,
                        items: [res.data[0], res.data[0], res.data[2], res.data[6], res.data[9]]
                    })

                /* END */

            })
            .catch(error => alert(error))
    }, []);


    return (
      <>
          <AppHeader />
          <main className={styles.main + " pb-10"}>
              {!state.loading &&
                  <div className="container pl-4 pr-4">
                      <div className={styles.blocks}>
                          <BurgerIngredients data={state.data}/>
                          <BurgerConstructorContext.Provider value={{orderItems, setOrderItems}}>
                            <BurgerConstructor />
                          </BurgerConstructorContext.Provider>
                      </div>
                  </div>
              }
          </main>
      </>
    );
}

export default App;
