import React, { FC } from "react";

import styles from "./modal-overlay.module.css";

type ModalOverlayProps = {
  onClick: () => void;
};

const ModalOverlay: FC<ModalOverlayProps> = (props) => {
  return <div className={styles.overlay} onClick={props.onClick} />;
};

export default ModalOverlay;
