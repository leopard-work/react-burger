import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app.module.css";

function App() {
    const url = "https://norma.nomoreparties.space/api/ingredients";

    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        setState({...state, loading: true});
        fetch(url)
            .then(res => {
                if (res.ok) return res.json();
                else alert(`Ошибка ${res.status}`)
            })
            .then(res => {
                setState({
                    ...state,
                    loading: false,
                    data: res.data
                });
            })
            .catch(error => alert(error))
    }, [])

    return (
      <>
          <AppHeader />
          <main className={styles.main + " pb-10"}>
              {!state.loading &&
                  <div className="container pl-4 pr-4">
                      <div className={styles.blocks}>
                          <BurgerIngredients data={state.data}/>
                          <BurgerConstructor data={state.data}/>
                      </div>
                  </div>
              }
          </main>
      </>
    );
}

export default App;
