import React from 'react';
import PropTypes from 'prop-types';

import "@ya.praktikum/react-developer-burger-ui-components";
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import headerStyles from './burger-ingredients.module.css';

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

const Tabs = (props) => {
    return (
        <div className={headerStyles.content }>
            <div className={headerStyles.content_block+ " mt-10"}>
                <h2 className="text text_type_main-medium">Булки</h2>
                {<TabsCategory category="bun" data={props.data} />}
            </div>
            <div className={headerStyles.content_block+ " mt-10"}>
                <h2 className="text text_type_main-medium">Соусы</h2>
                {<TabsCategory category="sauce" data={props.data} />}
            </div>
            <div className={headerStyles.content_block+ " mt-10"}>
                <h2 className="text text_type_main-medium">Начинки</h2>
                {<TabsCategory category="main" data={props.data} />}
            </div>
        </div>
    )
}

const TabsCategory = (props) => {
    const items = props.data.filter(function(category) {
        return category.type === props.category;
    });
    return (
        <ul className={headerStyles.items + " pl-4 pr-4"}>
            {items.map((item, i) => <TabsItem key={i} item={item} />)}
        </ul>
    )
}

const TabsItem = (props) => {
    return (
        <li key={props.item._id} className={headerStyles.item + " mt-6"}>
            <div className={headerStyles.item_image + " ml-4 mr-4"}>
                <img src={props.item.image} alt={props.item.name} />
            </div>
            <div className={headerStyles.item_price + " mt-1 mb-1"}>
                <span className="text text_type_digits-default mr-2">{props.item.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <h3 className={headerStyles.item_title + " p-1 text text_type_main-default"}>{props.item.name}</h3>
            <Counter count={Math.round(Math.random() + 1)} size="default" />
        </li>
    )
}

TabsItem.propTypes = {
    item: TabsItemPropTypes.isRequired
}

function BurgerIngredients(props) {
    return (
      <section className={headerStyles.section + " mt-10"}>
          <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
          {<TabsNav />}
          {<Tabs data={props.data} />}
      </section>
    );
}


export default BurgerIngredients;
