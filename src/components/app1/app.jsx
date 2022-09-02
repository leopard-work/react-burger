import React from 'react';

import "@ya.praktikum/react-developer-burger-ui-components";

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import styles from './app.module.css';

import {data} from '../../utils/data';

function App() {
    return (
      <>
          <AppHeader />
          <main className={styles.main + " pb-10"}>
            <div className="container pl-4 pr-4">
                <div className={styles.blocks}>
                    <BurgerIngredients data={data} />
                    <BurgerConstructor data={data} />
                </div>
            </div>
          </main>
      </>
    );
}

export default App;
