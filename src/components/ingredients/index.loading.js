import React from "react";
import StyleIngredients from "./index.style";
import Skeleton from "../skeleton";

const IngredientsLoading = () => {
    return (
        <StyleIngredients className="ingredients">
            <div className="ingredients--box">
                <div className="ingredients__text">
                    <div className="ingredients__caption">
                        <Skeleton
                            width="80px"
                            marginBottom="7px"
                            height="10px"
                        ></Skeleton>
                    </div>
                    <div className="ingredients__title">
                        <Skeleton
                            width="70%"
                            marginBottom="7px"
                            height="12px"
                        ></Skeleton>
                    </div>
                </div>
                <div className="ingredients__text">
                    <div className="ingredients__caption">
                        <Skeleton
                            width="80px"
                            marginBottom="7px"
                            height="10px"
                        ></Skeleton>
                    </div>
                    <div className="ingredients__title">
                        <Skeleton
                            width="70%"
                            marginBottom="0px"
                            height="12px"
                        ></Skeleton>
                    </div>
                </div>
            </div>
        </StyleIngredients>
    );
};

export default IngredientsLoading;
