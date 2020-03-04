import React from "react";

import Skeleton from "../skeleton";
import StyleRecipes from "./index.style";

const RecipesLoading = ({ children }) => {
    return (
        <StyleRecipes>
            <div className="recipes">
                <div className="recipes__title">
                    <Skeleton
                        width="80px"
                        marginBottom="7px"
                        height="10px"
                    ></Skeleton>
                </div>
                <div className="recipes__list-ingredients">{children}</div>
            </div>
        </StyleRecipes>
    );
};

export default RecipesLoading;
