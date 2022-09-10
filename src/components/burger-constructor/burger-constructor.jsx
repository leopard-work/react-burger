import React, {useState} from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {ItemPropTypes} from '../../utils/data';
import {arrayOf} from 'prop-types';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import styles from './burger-constructor.module.css';

const ConsructorItem = (props) => {
    return (
        <li className={styles.item + " mt-4"}>
            {props.item.type !== 'bun' ? <span className={styles.drag}><DragIcon type="primary" /></span> : (<span />)}
            <ConstructorElement
                type={props.item.type === 'bun' ? props.type : ''}
                isLocked={props.item.type === 'bun'}
                text={props.item.name + (props.type === 'top' ? '\n(верх)' : '') + (props.type === 'bottom' ? '\n(инз)' : '')}
                price={props.item.price}
                thumbnail={props.item.image}
            />
        </li>
    )
}

ConsructorItem.propTypes = {
    item: ItemPropTypes
}

const BurgerConstructor = props => {

    const [state, setState] = useState({
        items: props.data.map((item, i) => item.type !== 'bun' ? <ConsructorItem key={item._id} item={item}/> : ''),
        bun: props.data.filter(item => item.type === 'bun'),
        modalOpen: false
    });

    const modalChange = () => {
        setState ({
            ...state,
            modalOpen: !state.modalOpen
        })
    }

    return (
        <section className={styles.section + " mt-25"}>
            {state.bun[0] ? <ConsructorItem item={state.bun[0]} type='top'/> : ''}
            <ul className={styles.content + " pr-2"}>
                {state.items}
            </ul>
            {state.bun[0] ? <ConsructorItem item={state.bun[0]} type='bottom'/> : ''}
            <div className={styles.info + " mt-10 mr-4"}>
                <p className={styles.price + " mr-10"}>
                    <span className="text text_type_digits-medium mr-2">610</span>
                    <CurrencyIcon type="primary" />
                </p>
                <Button type="primary" size="medium" onClick={modalChange}>
                    Оформить заказ
                </Button>
            </div>
            <Modal isOpen={state.modalOpen} close={modalChange}>
                <OrderDetails />
            </Modal>
        </section>
    );

}

BurgerConstructor.propTypes = {
    data: arrayOf(ItemPropTypes)
}

export default BurgerConstructor;
