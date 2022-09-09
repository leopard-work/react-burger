import React from 'react';
import {createPortal} from "react-dom";
import ModalOverlay from '../modal-overlay/modal-overlay'

import "@ya.praktikum/react-developer-burger-ui-components";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';

const modals = document.querySelector('#modals');

const Modal = (props) => {
    return createPortal(
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.close + " mt-15 mr-10"}><CloseIcon type="primary" /></div>
                {props.children}
            </div>
            <ModalOverlay />
        </div>,
        modals
    );
}

export default Modal;