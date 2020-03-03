import React from "react";
import StyleIngredients from "./index.style";
import IngredientsLoading from "./index.loading";

const Ingredients = ({ title = "-", date = "-" }) => {
    return (
        <StyleIngredients className="ingredients">
            <div className="ingredients--box">
                <div className="ingredients__text">
                    <div className="ingredients__caption">Title</div>
                    <div className="ingredients__title">{title}</div>
                </div>
                <div className="ingredients__text">
                    <div className="ingredients__caption">Use By</div>
                    <div className="ingredients__date">{date}</div>
                </div>
            </div>
        </StyleIngredients>
    );
};

Ingredients.Loading = IngredientsLoading;

export default Ingredients;
