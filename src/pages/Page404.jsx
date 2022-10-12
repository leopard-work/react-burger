import React from "react";
import { Link, useLocation } from 'react-router-dom';

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../components/app/app.module.css";

function Page404() {
    const { state } = useLocation();

    return (
        <>
            <main className={styles.main + " pb-10"}>
                <div className={`${styles.loading} text text_type_main-medium`}>
                    Ошибка 404<br />
                    Данной страницы не существует<br /><br />
                    <Link to={{ pathname: '/', state }} className={styles.link}>Вернуться на главную</Link>
                </div>
            </main>
        </>
    );
}


export default Page404;

