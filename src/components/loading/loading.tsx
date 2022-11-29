import styles from "../app/app.module.css";
import React from "react";

export const loadingContent = () => {
  return (
    <div className={`${styles.loading} text text_type_main-medium`}>
      Загрузка ...
    </div>
  );
};
