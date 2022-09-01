import React from 'react';

import "@ya.praktikum/react-developer-burger-ui-components";
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import headerStyles from './burger-ingredients.module.css';

const TabsNav = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className={headerStyles.tabs}>
            <Tab className={headerStyles.tab} value="one" active={current === 'one'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab className={headerStyles.tab} value="two" active={current === 'two'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab className={headerStyles.tab} value="three" active={current === 'three'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

const Tabs = () => {
    return (
        <div className={headerStyles.content }>
            <div className={headerStyles.content_block+ " mt-10"}>
                <h2 className="text text_type_main-medium">Булки</h2>
                <ul className={headerStyles.items + " pl-4 pr-4"}>
                    <li className={headerStyles.item + " mt-6"}>
                        <div className={headerStyles.item_image + " ml-4 mr-4"}>
                            <img src="https://code.s3.yandex.net/react/code/cheese.png" alt="" />
                        </div>
                        <div className={headerStyles.item_price + " mt-1 mb-1"}>
                            <span className="text text_type_digits-default mr-2">20</span>
                            <CurrencyIcon type="primary" />
                        </div>
                        <h3 className={headerStyles.item_title + " p-1 text text_type_main-default"}>Краторная булка N-200i</h3>
                        <Counter count={1} size="default" />
                    </li>
                    <li className={headerStyles.item + " mt-6"}>
                        <div className={headerStyles.item_image + " ml-4 mr-4"}>
                            <img src="https://code.s3.yandex.net/react/code/cheese.png" alt="" />
                        </div>
                        <div className={headerStyles.item_price + " mt-1 mb-1"}>
                            <span className="text text_type_digits-default mr-2">20</span>
                            <CurrencyIcon type="primary" />
                        </div>
                        <h3 className={headerStyles.item_title + " p-1 text text_type_main-default"}>Краторная булка N-200i</h3>
                    </li>
                </ul>
            </div>
            <div className={headerStyles.content_block+ " mt-10"}>
                <h2 className="text text_type_main-medium">Булки</h2>
                <ul className={headerStyles.items + " pl-4 pr-4"}>
                    <li className={headerStyles.item + " mt-6"}>
                        <div className={headerStyles.item_image + " ml-4 mr-4"}>
                            <img src="https://code.s3.yandex.net/react/code/cheese.png" alt="" />
                        </div>
                        <div className={headerStyles.item_price + " mt-1 mb-1"}>
                            <span className="text text_type_digits-default mr-2">20</span>
                            <CurrencyIcon type="primary" />
                        </div>
                        <h3 className={headerStyles.item_title + " p-1 text text_type_main-default"}>Краторная булка N-200i</h3>
                        <Counter count={1} size="default" />
                    </li>
                    <li className={headerStyles.item + " mt-6"}>
                        <div className={headerStyles.item_image + " ml-4 mr-4"}>
                            <img src="https://code.s3.yandex.net/react/code/cheese.png" alt="" />
                        </div>
                        <div className={headerStyles.item_price + " mt-1 mb-1"}>
                            <span className="text text_type_digits-default mr-2">20</span>
                            <CurrencyIcon type="primary" />
                        </div>
                        <h3 className={headerStyles.item_title + " p-1 text text_type_main-default"}>Краторная булка N-200i</h3>
                    </li>
                </ul>
            </div>
            <div className={headerStyles.content_block+ " mt-10"}>
                <h2 className="text text_type_main-medium">Булки</h2>
                <ul className={headerStyles.items + " pl-4 pr-4"}>
                    <li className={headerStyles.item + " mt-6"}>
                        <div className={headerStyles.item_image + " ml-4 mr-4"}>
                            <img src="https://code.s3.yandex.net/react/code/cheese.png" alt="" />
                        </div>
                        <div className={headerStyles.item_price + " mt-1 mb-1"}>
                            <span className="text text_type_digits-default mr-2">20</span>
                            <CurrencyIcon type="primary" />
                        </div>
                        <h3 className={headerStyles.item_title + " p-1 text text_type_main-default"}>Краторная булка N-200i</h3>
                        <Counter count={1} size="default" />
                    </li>
                    <li className={headerStyles.item + " mt-6"}>
                        <div className={headerStyles.item_image + " ml-4 mr-4"}>
                            <img src="https://code.s3.yandex.net/react/code/cheese.png" alt="" />
                        </div>
                        <div className={headerStyles.item_price + " mt-1 mb-1"}>
                            <span className="text text_type_digits-default mr-2">20</span>
                            <CurrencyIcon type="primary" />
                        </div>
                        <h3 className={headerStyles.item_title + " p-1 text text_type_main-default"}>Краторная булка N-200i</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function BurgerIngredients() {
  return (
      <section className={headerStyles.section + " mt-10"}>
          <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
          {<TabsNav />}
          {<Tabs />}
      </section>
  );
}

export default BurgerIngredients;
