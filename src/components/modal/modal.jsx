import React, {useEffect, useState} from 'react';
import {createPortal} from "react-dom";
import ModalOverlay from '../modal-overlay/modal-overlay'

import "@ya.praktikum/react-developer-burger-ui-components";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';

const modals = document.querySelector('#modals');

const Modal = (props) => {
    const [isOpen, isOpenChange] = useState(true);
    const modalToggle = () => {
        isOpenChange(!isOpen);
    }
    useEffect(() => {
        const esc = (e) => {
            if(e.key === "Escape"){
                modalToggle();
            }
        }
        document.addEventListener("keydown", esc);
        return () => {
            document.removeEventListener("keydown", esc);
        };
    }, []);

    return isOpen && createPortal(
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.close + " mt-15 mr-10"} onClick={modalToggle}><CloseIcon type="primary" /></div>
                {props.children}
            </div>
            <ModalOverlay onClick={modalToggle} />
        </div>,
        modals
    );
}

export default Modal;