import React from 'react';
import PropTypes from 'prop-types';

import "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import headerStyles from "../burger-ingredients/burger-ingredients.module.css";

const TabsItemPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number
});

function BurgerConstructor(props) {
    return (
      <section className={styles.section + " mt-25"}>
          <ul className={styles.content + " pr-2"}>
              <li className={styles.item + " mt-4"}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                      type="top"
                      isLocked={true}
                      text="Краторная булка N-200i (верх)"
                      price={200}
                      thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                  />
              </li>
              <li className={styles.item + " mt-4"}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={200}
                      thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                  />
              </li>
              <li className={styles.item + " mt-4"}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={200}
                      thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                  />
              </li>
              <li className={styles.item + " mt-4"}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={200}
                      thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                  />
              </li>
              <li className={styles.item + " mt-4"}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={200}
                      thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                  />
              </li>
              <li className={styles.item + " mt-4"}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={200}
                      thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                  />
              </li>
              <li className={styles.item + " mt-4"}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={200}
                      thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                  />
              </li>
              <li className={styles.item + " mt-4"}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={200}
                      thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                  />
              </li>
              <li className={styles.item + " mt-4"}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={200}
                      thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                  />
              </li>
          </ul>
          <div className={styles.info + " mt-10 mr-4"}>
              <p className={styles.price + " mr-10"}>
                  <span className="text text_type_digits-medium mr-2">610</span>
                  <CurrencyIcon type="primary" />
              </p>
              <Button type="primary" size="medium">
                  Оформить заказ
              </Button>
          </div>
      </section>
    );
}


export default BurgerConstructor;
