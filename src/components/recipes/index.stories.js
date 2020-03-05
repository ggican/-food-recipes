import React from "react";
import Recipes from "./index";

export default { title: "Components|Recipes", component: Recipes };

export const RecipesDefault = () => {
    return <Recipes></Recipes>;
};
export const RecipesWithTitle = () => {
    return <Recipes title="Cooking"></Recipes>;
};
export const RecipesWithChildren = () => {
    return (
        <Recipes title="Cooking">
            <div style={{ padding: 16 }}>Children</div>
        </Recipes>
    );
};

export const RecipesLoading = () => {
    return <Recipes.Loading></Recipes.Loading>;
};
