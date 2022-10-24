import React, { useEffect } from "react";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../components/app/app.module.css";
import stylesDetails from "../components/ingredient-details/ingredient-details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../services/actions/catalog";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useLocation, useParams } from "react-router-dom";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import Page404 from "./Page404";

function HomePage(props) {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);

  const location = useLocation();
  const { id } = useParams();

  const loadingContent = () => {
    return (
      <div className={`${styles.loading} text text_type_main-medium`}>
        Загрузка ...
      </div>
    );
  };
  const errorContent = () => {
    return (
      <div className={`${styles.loading} text text_type_main-medium`}>
        Ошибка. Повторите попытку ...
      </div>
    );
  };

  if (props.openItem && !location.state) {
    if (catalog.items.success && !catalog.itemsFailed) {
      const item = catalog.items.data.find((item) => item._id === id);
      if (item) {
        return (
          <div className="container pl-4 pr-4">
            <div className={stylesDetails.page}>
              <IngredientDetails
                item={catalog.items.data.find((item) => item._id === id)}
              />
            </div>
          </div>
        );
      } else {
        return <Page404 />;
      }
    } else {
      return (
        <>
          {!catalog.items.success && !catalog.itemsFailed && loadingContent()}
          {catalog.itemsFailed && errorContent()}
        </>
      );
    }
  }

  return (
    <>
      <main className={styles.main + " pb-10"}>
        {catalog.items.success && !catalog.itemsFailed && (
          <div className="container pl-4 pr-4 cnt">
            <div className={styles.blocks}>
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
              </DndProvider>
            </div>
          </div>
        )}
        {!catalog.items.success && !catalog.itemsFailed && loadingContent()}
        {catalog.itemsFailed && errorContent()}
      </main>
    </>
  );
}

export default HomePage;
