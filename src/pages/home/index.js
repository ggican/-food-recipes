import React, { Fragment, useState } from "react";
import moment from "moment";

//begin home page file import
import StylesHomePage from "./index.style";
import { defaultPropsType, interFace } from "./index.interface";
import homePageService from "./index.service";
//end home page file import

//begin global import
import CommonFetchData from "../../common/fetch-data";
import Container from "../../components/layouts/container";
import DatePicker from "../../components/date-picker";
import Ingredients from "../../components/ingredients";
import Label from "../../components/label";
import Recipes from "../../components/recipes";
//end global import

const Home = () => {
    const [ingredients, setIngredients] = useState([]);
    const [dateRecipes, setDateRecipes] = useState(false);
    const [isDateReady, setIsDateReady] = useState(false);
    const [isReadyFetchRecipes, setReadyFetchRecipes] = useState(false);

    const eventOnClickIngredient = ({ title }) => {
        if (!ingredients.includes(title)) {
            const result = ingredients.concat(title);
            setStateIngredients(result);
        }
    };

    const eventOnClickCloseLabel = title => {
        setStateIngredients(ingredients.filter(item => item !== title));
    };

    const eventHandleFindRecipes = e => {
        e.preventDefault();
        if (ingredients.length > 0) {
            setStateReadyFetchRecipes(true);
        }
    };

    const setStateIngredients = value => {
        if (value.length === 0) {
            setReadyFetchRecipes(false);
        }
        setIngredients(value);
    };

    const setStateReadyFetchRecipes = value => {
        setReadyFetchRecipes(value);
    };

    const onGetValueDate = valueResponse => {
        setDateRecipes(valueResponse.value);
    };
    const eventOnSubmitDateRecipes = e => {
        e.preventDefault();
        setDateRecipes(e.target.date_recipes.value);
        setIsDateReady(true);
    };

    return (
        <StylesHomePage>
            <Container>
                <div className="home--page">
                    {isDateReady && dateRecipes ? (
                        <Fragment>
                            <div className="home--page__header">
                                <CommonFetchData
                                    service={{
                                        serviceFunction:
                                            homePageService.ingredientsList,
                                        isReady: true,
                                        key: "ingredients",
                                        group: "recipes",
                                    }}
                                    renderLoading={() => (
                                        <Fragment>
                                            <Ingredients.Loading></Ingredients.Loading>
                                            <Ingredients.Loading></Ingredients.Loading>
                                            <Ingredients.Loading></Ingredients.Loading>
                                        </Fragment>
                                    )}
                                    renderSuccess={response =>
                                        response.map((item, key) => (
                                            <Ingredients
                                                dateRecipes={moment(
                                                    dateRecipes,
                                                ).format("YYYY-MM-DD")}
                                                onClickIngredient={
                                                    eventOnClickIngredient
                                                }
                                                key={key}
                                                title={item.title}
                                                date={item["use-by"]}
                                            ></Ingredients>
                                        ))
                                    }
                                    renderFailed={() => (
                                        <div>something wrong</div>
                                    )}
                                ></CommonFetchData>
                            </div>

                            {ingredients.length > 0 && (
                                <div className="home--page__ingredients--list">
                                    <div className="home--page__ingredients--scroll">
                                        {ingredients.map((item, key) => {
                                            return (
                                                <Label
                                                    key={key}
                                                    onCloseLabel={
                                                        eventOnClickCloseLabel
                                                    }
                                                    title={item}
                                                ></Label>
                                            );
                                        })}
                                    </div>
                                    <div className="home--page__ingredients--button">
                                        <button
                                            onClick={eventHandleFindRecipes}
                                            type="button"
                                        >
                                            Find Recipes
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="home--page__body">
                                <CommonFetchData
                                    service={{
                                        serviceFunction:
                                            homePageService.recipesList,
                                        params: {
                                            ingredients: ingredients,
                                        },
                                        isReady: isReadyFetchRecipes,
                                        key: "recipesList",
                                        group: "recipes",
                                    }}
                                    renderBeforeReady={() => {
                                        return (
                                            <p>
                                                Choose Your Ingredients before
                                                you get the recipes and find
                                                ingredients before{" "}
                                                <b>
                                                    {moment(dateRecipes).format(
                                                        "YYYY-MM-DD",
                                                    )}
                                                </b>
                                            </p>
                                        );
                                    }}
                                    renderLoading={() => (
                                        <Fragment>
                                            <Recipes.Loading>
                                                <Ingredients.Loading
                                                    isRecipes
                                                ></Ingredients.Loading>
                                                <Ingredients.Loading
                                                    isRecipes
                                                ></Ingredients.Loading>
                                                <Ingredients.Loading
                                                    isRecipes
                                                ></Ingredients.Loading>
                                            </Recipes.Loading>
                                            <Recipes.Loading>
                                                <Ingredients.Loading
                                                    isRecipes
                                                ></Ingredients.Loading>
                                                <Ingredients.Loading
                                                    isRecipes
                                                ></Ingredients.Loading>
                                                <Ingredients.Loading
                                                    isRecipes
                                                ></Ingredients.Loading>
                                            </Recipes.Loading>
                                        </Fragment>
                                    )}
                                    renderSuccess={response =>
                                        response.map((item, key) => {
                                            return (
                                                <Recipes
                                                    title={item.title}
                                                    key={key}
                                                >
                                                    {item.ingredients.map(
                                                        (
                                                            value,
                                                            keyIngredients,
                                                        ) => {
                                                            return (
                                                                <Ingredients
                                                                    key={
                                                                        keyIngredients
                                                                    }
                                                                    title={
                                                                        value
                                                                    }
                                                                    isRecipes
                                                                ></Ingredients>
                                                            );
                                                        },
                                                    )}
                                                </Recipes>
                                            );
                                        })
                                    }
                                    renderFailed={() => (
                                        <div>something wrong</div>
                                    )}
                                ></CommonFetchData>
                            </div>
                        </Fragment>
                    ) : (
                        <div className="home--page__date">
                            <div className="home--page__date__box">
                                <form onSubmit={eventOnSubmitDateRecipes}>
                                    <DatePicker
                                        name="date_recipes"
                                        label="Date Recipes"
                                        showMonthDropdown={true}
                                        onGetValue={onGetValueDate}
                                    ></DatePicker>
                                    <button className="save" type="submit">
                                        Save Date
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </StylesHomePage>
    );
};

Home.defaultProps = defaultPropsType;
Home.propTypes = interFace;

export default Home;
