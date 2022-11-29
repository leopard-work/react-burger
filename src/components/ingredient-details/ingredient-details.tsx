import React, { FC } from "react";
import { ItemProps } from "../../utils/types";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-details.module.css";

type DetailsProps = {
  item: ItemProps | undefined;
};

const IngredientDetails: FC<DetailsProps> = (props) => {
  return (
    <div className={styles.container + " pt-10 pb-15 pl-10 pr-10"}>
      <p className={styles.title + " text text_type_main-large mt-2 mb-2"}>
        Детали ингредиента
      </p>
      <div className="mb-4">
        <img src={props.item!.image_large} alt={props.item!.name} />
      </div>
      <p className="text text_type_main-medium mb-8">{props.item!.name}</p>
      <div className={styles.props}>
        <div className={styles.prop + " ml-5"}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default">
            {props.item!.calories}
          </p>
        </div>
        <div className={styles.prop + " ml-5"}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default">
            {props.item!.proteins}
          </p>
        </div>
        <div className={styles.prop + " ml-5"}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default">{props.item!.fat}</p>
        </div>
        <div className={styles.prop + " ml-5"}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default">
            {props.item!.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
