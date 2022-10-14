import React from "react";
import { useLocation } from 'react-router-dom';

import styles from "../components/app/app.module.css";

function IngredientDetailsPage() {
    const { state } = useLocation();

    return (
        <div className={`${styles.loading} text text_type_main-medium`}>
            Товар<br /><br />
           
        </div>
    );
}


export default IngredientDetailsPage;

