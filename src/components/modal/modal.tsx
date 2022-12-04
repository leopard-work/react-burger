import React, { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";

import "@ya.praktikum/react-developer-burger-ui-components";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";

const modals: any = document.querySelector("#modals");

type ModalProps = {
  isOpen: boolean;
  close: () => void;
  children: JSX.Element;
};

const Modal: FC<ModalProps> = (props) => {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.close();
      }
    };
    if (props.isOpen) {
      document.addEventListener("keydown", esc);
      return () => {
        document.removeEventListener("keydown", esc);
      };
    }
  }, [props.isOpen]);

  if (props.isOpen)
    return createPortal(
      <div className={styles.container}>
        <div className={styles.modal}>
          <div
            className={styles.close + " mt-15 mr-10"}
            id="modal_close"
            onClick={props.close}
          >
            <CloseIcon type="primary" />
          </div>
          {props.children}
        </div>
        <ModalOverlay onClick={props.close} />
      </div>,
      modals
    );
  else return <></>;
};

export default Modal;
