import React from "react";

// begin local import
import StyleRecipes from "./index.style";
import RecipesLoading from "./index.loading";
import { defaultPropsType, interFace } from "./index.interface";
// end local import

const Recipes = ({ children, title = "-" }) => {
    return (
        <StyleRecipes>
            <div className="recipes">
                <div className="recipes__title">{title}</div>
                <div className="recipes__list-ingredients">{children}</div>
            </div>
        </StyleRecipes>
    );
};

Recipes.Loading = RecipesLoading;
Recipes.defaultProps = defaultPropsType;
Recipes.propTypes = interFace;

export default Recipes;
