import React from 'react';

import "@ya.praktikum/react-developer-burger-ui-components";

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {
  return (
      <>

          <AppHeader />
          <main>
            <div className="container pl-4 pr-4">
                <div className="main_blocks">
                    <BurgerIngredients />
                </div>
            </div>
          </main>

      </>
  );
}

export default App;
