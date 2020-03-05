import React from "react";
import PropTypes from "prop-types";

// begin local import
import StyleRecipes from "./index.style";
import RecipesLoading from "./index.loading";

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
Recipes.defaultProps = {
    title: "-",
};
Recipes.propTypes = {
    /**
      Use title for `Recipes` components by default is `-`
      */
    title: PropTypes.string.isRequired,
    /**
      Use title for `Recipes` components `is Required`
      */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Recipes;
