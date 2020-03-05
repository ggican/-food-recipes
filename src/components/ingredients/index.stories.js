import React from "react";
import Integredients from "./index";

export default { title: "Components|Integredients", component: Integredients };

export const IntegredientsDefault = () => {
    return <Integredients dateRecipes="2020-01-12"></Integredients>;
};

export const IntegredientsWithText = () => {
    return (
        <Integredients dateRecipes="2020-01-12" title="title"></Integredients>
    );
};
export const IntegredientsWithDate = () => {
    return (
        <Integredients
            dateRecipes="2020-01-12"
            title="title"
            date="2020-10-11"
        ></Integredients>
    );
};
export const IntegredientsWithIsRecipes = () => {
    return (
        <Integredients
            dateRecipes="2020-01-12"
            title="title"
            isRecipes
            date="2020-10-11"
        ></Integredients>
    );
};
export const IntegredientsWithLoading = () => {
    return <Integredients.Loading></Integredients.Loading>;
};
