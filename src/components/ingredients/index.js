import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";

// begin local import
import StyleIngredients from "./index.style";
import IngredientsLoading from "./index.loading";
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
            test_id="ingredients"
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

Ingredients.defaultProps = {
    title: "-",
    date: "-",
    isRecipes: false,
    onClickIngredient: () => {},
};
Ingredients.propTypes = {
    /**
      Use title for `Ingredients` components by default is '-'
      */
    title: PropTypes.string.isRequired,
    /**
      Use date for `Ingredients` components by default is '-'
      */
    date: PropTypes.string,
    /**
      Use isRecipes for `Ingredients` components by default is `false`
      */
    isRecipes: PropTypes.bool,
    /**
      Use onClickIngredient for `Ingredients` components by default is `()=>{}`
      */
    onClickIngredient: PropTypes.func,
};

export default Ingredients;
