import React, { useEffect, useState } from "react";
import moment from "moment";

// begin local import
import StyleIngredients from "./index.style";
import IngredientsLoading from "./index.loading";
import { defaultPropsType, interFace } from "./index.interface";
// end local import

const Ingredients = ({
    title = "-",
    isRecipes = false,
    date = "-",
    onClickIngredient = () => {},
}) => {
    const [isDisabled, setDisabled] = useState(false);
    useEffect(() => {
        if (!isRecipes && date !== "-" && moment().diff(date, "days") > 0) {
            setDisabled(true);
        }
    }, [date, isRecipes]);
    const eventOnClickIngredient = (e, value) => {
        e.preventDefault();
        if (!isDisabled && !isRecipes) {
            onClickIngredient(value);
        }
    };
    return (
        <StyleIngredients
            isRecipes={isRecipes}
            isDisabled={isDisabled}
            onClick={e =>
                eventOnClickIngredient(e, { title: title, date: date })
            }
            className="ingredients"
        >
            <div className="ingredients--box">
                <div
                    test_id="text-ingredients-top"
                    className="ingredients__text"
                >
                    <div className="ingredients__caption">Title</div>
                    <div className="ingredients__title">{title}</div>
                </div>
                {!isRecipes && (
                    <div
                        test_id="text-ingredients-bottom"
                        className="ingredients__text"
                    >
                        <div className="ingredients__caption">Use By</div>
                        <div
                            className={`ingredients__date ${
                                isDisabled ? "ingredients__date__exp" : ""
                            }`}
                        >
                            {date} {isDisabled && "- ( Expired )"}
                        </div>
                    </div>
                )}
            </div>
        </StyleIngredients>
    );
};

Ingredients.Loading = IngredientsLoading;
Ingredients.defaultProps = defaultPropsType;
Ingredients.propTypes = interFace;

export default Ingredients;
