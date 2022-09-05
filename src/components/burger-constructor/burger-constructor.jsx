import React from 'react';

import "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {ItemPropTypes} from '../../utils/data';
import {arrayOf} from "prop-types";

import styles from './burger-constructor.module.css';

function ConsructorItem(props) {
    return (
        <li className={styles.item + " mt-4"}>
            {props.item.type !== 'bun' ? <DragIcon type="primary" /> : (<span />)}
            <ConstructorElement
                type={props.item.type === 'bun' ? props.type : ''}
                isLocked={props.item.type === 'bun'}
                text={props.item.name}
                price={props.item.price}
                thumbnail={props.item.image}
            />
        </li>
    )
}

ConsructorItem.propTypes = {
    item: ItemPropTypes
}

class BurgerConstructor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.data.map((item, i) => item.type !== 'bun' ? <ConsructorItem key={item._id} item={item}/> : ''),
            bun: this.props.data.filter(item => item.type === 'bun')
        }
    }
    render() {
        return (
            <section className={styles.section + " mt-25"}>
                {this.state.bun[0] ? <ConsructorItem item={this.state.bun[0]} type='top'/> : ''}
                <ul className={styles.content + " pr-2"}>
                    {this.state.items}
                </ul>
                {this.state.bun[0] ? <ConsructorItem item={this.state.bun[0]} type='bottom'/> : ''}
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
}

BurgerConstructor.propTypes = {
    data: arrayOf(ItemPropTypes)
}

export default BurgerConstructor;
