import React from "react";
import Integredients from "./index";

export default { title: "Components|Integredients", component: Integredients };

export const IntegredientsDefault = () => {
    return <Integredients></Integredients>;
};

export const IntegredientsWithText = () => {
    return <Integredients title="title"></Integredients>;
};
export const IntegredientsWithDate = () => {
    return <Integredients title="title" date="2020-10-11"></Integredients>;
};
export const IntegredientsWithIsRecipes = () => {
    return (
        <Integredients
            title="title"
            isRecipes
            date="2020-10-11"
        ></Integredients>
    );
};
export const IntegredientsWithLoading = () => {
    return <Integredients.Loading></Integredients.Loading>;
};
