import React from "react";
import { Link, useLocation } from 'react-router-dom';

import styles from "../components/app/app.module.css";

function Page404() {
    const { state } = useLocation();

    return (
        <div className={`${styles.loading} text text_type_main-medium`}>
            Ошибка 404<br />
            Данной страницы не существует<br /><br />
            <Link to={{ pathname: '/', state }} className={styles.link}>Вернуться на главную</Link>
        </div>
    );
}


export default Page404;

