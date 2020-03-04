import React, { Fragment, useState } from "react";

//begin home page file import
import StylesHomePage from "./index.style";
import { defaultPropsType, interFace } from "./index.interface";
import homePageService from "./index.service";
//end home page file import

//begin global import
import Ingredients from "../../components/ingredients";
import Recipes from "../../components/recipes";
import Label from "../../components/label";
import Container from "../../components/layouts/container";
import CommonFetchData from "../../common/fetch-data";
//end global import

const Home = () => {
    const [ingredients, setIngredients] = useState([]);
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

    return (
        <StylesHomePage>
            <Container>
                <div className="home--page">
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
                                        onClickIngredient={
                                            eventOnClickIngredient
                                        }
                                        key={key}
                                        title={item.title}
                                        date={item["use-by"]}
                                    ></Ingredients>
                                ))
                            }
                            renderFailed={() => <div>something wrong</div>}
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
                                serviceFunction: homePageService.recipesList,
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
                                        Choose Your Ingredients before you get
                                        the recipes
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
                                        <Recipes title={item.title} key={key}>
                                            {item.ingredients.map(
                                                (value, keyIngredients) => {
                                                    return (
                                                        <Ingredients
                                                            key={keyIngredients}
                                                            title={value}
                                                            isRecipes
                                                        ></Ingredients>
                                                    );
                                                },
                                            )}
                                        </Recipes>
                                    );
                                })
                            }
                            renderFailed={() => <div>something wrong</div>}
                        ></CommonFetchData>
                    </div>
                </div>
            </Container>
        </StylesHomePage>
    );
};

Home.defaultProps = defaultPropsType;
Home.propTypes = interFace;

export default Home;
