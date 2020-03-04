import React from "react";
import Ingredients from "./index";
import IngredientsLoading from "./index.loading";
import StyleIngredients from "./index.style";

describe("Igredients Component", () => {
    let result;

    let successElement;
    let successRecipesElement;
    let failedElement;
    let styleIngredients;
    const onClickIngredient = value => {
        result = value;
    };

    beforeEach(() => {
        styleIngredients = <StyleIngredients></StyleIngredients>;
        successElement = (
            <Ingredients
                onClickIngredient={onClickIngredient}
                title="Cooking"
                date="2020-12-25"
            ></Ingredients>
        );
        successRecipesElement = (
            <Ingredients
                onClickIngredient={onClickIngredient}
                isRecipes
                title="Cooking"
            ></Ingredients>
        );

        failedElement = <Ingredients isRecipes={false}></Ingredients>;
        loadingElement = (
            <IngredientsLoading isRecipes={false}></IngredientsLoading>
        );
    });

    it("SUCCESS renders and create snapshot  <Ingredients />", () => {
        expect(toJson(mount(successElement))).toMatchSnapshot();
    });

    it("SUCCESS renders style and create snapshot  <StyleIngredients />", () => {
        expect(toJson(mount(styleIngredients))).toMatchSnapshot();
    });

    it("SUCCESS renders loading and create snapshot  <IngredientsLoading />", () => {
        expect(
            toJson(
                mount(
                    <IngredientsLoading isRecipes={true}></IngredientsLoading>,
                ),
            ),
        ).toMatchSnapshot();
    });

    it("SUCCESS renders and create snapshot  <Ingredients />", () => {
        expect(toJson(mount(successElement))).toMatchSnapshot();
    });

    it("SUCCESS renders get value title <Ingredients />", () => {
        expect(
            shallow(successElement)
                .find({ test_id: "text-ingredients-top" })
                .find(".ingredients__title")
                .text(),
        ).toEqual("Cooking");
    });

    it("SUCCESS renders get value date <Ingredients />", () => {
        expect(
            shallow(successElement)
                .find({ test_id: "text-ingredients-bottom" })
                .find(".ingredients__date")
                .text(),
        ).toEqual("2020-12-25 ");
    });
    it("SUCCESS renders get value date <Ingredients />", () => {
        expect(
            shallow(successElement)
                .find({ test_id: "text-ingredients-bottom" })
                .find(".ingredients__date")
                .text(),
        ).toEqual("2020-12-25 ");
    });

    it("SUCCESS renders onClick Function <Ingredients />", () => {
        shallow(successElement)
            .find({ test_id: "ingredients" })
            .simulate("click", {
                preventDefault: () => {},
            });
        expect(result).toEqual({ title: "Cooking", date: "2020-12-25" });
    });

    it("SUCCESS renders isDiesabled false <Ingredients />", () => {
        expect(
            shallow(successElement)
                .find({ test_id: "ingredients" })
                .prop("isDisabled"),
        ).toEqual(false);
    });

    it("SUCCESS renders isDisabled false <Ingredients />", () => {
        expect(
            shallow(successElement)
                .find({ test_id: "ingredients" })
                .prop("isDisabled"),
        ).toEqual(false);
    });

    it("SUCCESS renders isRecipes status true <Ingredients />", () => {
        expect(
            shallow(successRecipesElement)
                .find({ test_id: "ingredients" })
                .prop("isRecipes"),
        ).toEqual(true);
    });

    it("SUCCESS renders loading isRecipes true  <IngredientsLoading />", () => {
        expect(
            shallow(
                <IngredientsLoading isRecipes={true}></IngredientsLoading>,
            ).prop("isRecipes"),
        ).toEqual(true);
    });
    it("SUCCESS renders loading isRecipes false  <IngredientsLoading />", () => {
        expect(
            shallow(
                <IngredientsLoading isRecipes={false}></IngredientsLoading>,
            ).prop("isRecipes"),
        ).toEqual(false);
    });

    it("FAILED renders and create snapshot <Ingredients />", () => {
        expect(toJson(mount(successElement))).toMatchSnapshot();
    });

    it("FAILED renders get value title <Ingredients />", () => {
        expect(
            shallow(failedElement)
                .find({ test_id: "text-ingredients-bottom" })
                .find(".ingredients__date")
                .text(),
        ).toEqual("- ");
    });

    it("FAILED renders get value date <Ingredients />", () => {
        expect(
            shallow(failedElement)
                .find({ test_id: "text-ingredients-bottom" })
                .find(".ingredients__date")
                .text(),
        ).toEqual("- ");
    });

    it("FAILED renders get value date <Ingredients />", () => {
        expect(
            shallow(failedElement)
                .find({ test_id: "text-ingredients-bottom" })
                .find(".ingredients__date")
                .text(),
        ).toEqual("- ");
    });
});
