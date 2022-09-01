import React from 'react';

import "@ya.praktikum/react-developer-burger-ui-components";

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import {data} from '../../utils/data';

function App() {
    return (
      <>
          <AppHeader />
          <main className="pb-10">
            <div className="container pl-4 pr-4">
                <div className="main_blocks">
                    <BurgerIngredients data={data} />
                </div>
            </div>
          </main>
      </>
    );
}

export default App;
