import React from 'react';
import PropTypes from 'prop-types';

import "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';

const ItemPropTypes = PropTypes.shape({
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

function ConsructorItem(props) {
    return (
        <li className={styles.item + " mt-4"}>
            <DragIcon type="primary" />
            <ConstructorElement
                type={props.item.type === 'bun' ? 'top' : ''}
                isLocked={props.item.type === 'bun' ? true : false}
                text={props.item.name}
                price={props.item.price}
                thumbnail={props.item.image}
            />
        </li>
    )
}

ConsructorItem.propTypes = {
    item: ItemPropTypes.isRequired
}

function BurgerConstructor(props) {
    return (
      <section className={styles.section + " mt-25"}>
          <ul className={styles.content + " pr-2"}>
              {props.data.map((item, i) => <ConsructorItem key={i} item={item} />)}
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
