import React, {useEffect} from "react";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../components/app/app.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../services/actions/catalog";
import {DndProvider} from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

function HomePage() {

    const dispatch = useDispatch();
    const catalog  = useSelector(state => state.catalog);

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    return (
        <>
            <main className={styles.main + " pb-10"}>
                {catalog.items.success && !catalog.itemsFailed &&
                <div className="container pl-4 pr-4">
                    <div className={styles.blocks}>
                        <DndProvider backend={HTML5Backend}>
                            <BurgerIngredients/>
                            <BurgerConstructor />
                        </DndProvider>
                    </div>
                </div>
                }
                {!catalog.items.success && !catalog.itemsFailed &&
                <div className={`${styles.loading} text text_type_main-medium`}>Загрузка ...</div>
                }
                {catalog.itemsFailed &&
                <div className={`${styles.loading} text text_type_main-medium`}>Ошибка. Повторите попытку ...</div>
                }
            </main>
        </>
    );
}


export default HomePage;
