import React from "react";
import Recipes from "./index";
import StyleRecpies from "./index.style";
import RecipesLoading from "./index.loading";

describe("Recipes Component", () => {
    let successElement;

    beforeEach(() => {
        successElement = (
            <Recipes title="Cooking">
                <div test_id="children">children</div>
            </Recipes>
        );
    });

    it("SUCCESS renders and create snapshot  <Recipes />", () => {
        expect(toJson(mount(successElement))).toMatchSnapshot();
    });

    it("SUCCESS renders style and create snapshot  <StyleRecpies />", () => {
        expect(toJson(mount(<StyleRecpies></StyleRecpies>))).toMatchSnapshot();
    });
    it("SUCCESS renders style  and create snapshot <RecipesLoading />", () => {
        expect(
            toJson(mount(<RecipesLoading></RecipesLoading>)),
        ).toMatchSnapshot();
    });

    it("SUCCESS renders and get value title  <Recipes />", () => {
        expect(
            shallow(successElement)
                .find(".recipes__title")
                .text(),
        ).toEqual("Cooking");
    });

    it("SUCCESS renders and get element children  <Recipes />", () => {
        expect(
            shallow(successElement)
                .find(".recipes__list-ingredients")
                .find({ test_id: "children" })
                .text(),
        ).toEqual("children");
    });
    it("SUCCESS renders and get element children  <RecipesLoading />", () => {
        expect(
            shallow(
                <RecipesLoading>
                    <div test_id="children">children</div>
                </RecipesLoading>,
            )
                .find(".recipes__list-ingredients")
                .find({ test_id: "children" })
                .text(),
        ).toEqual("children");
    });
});
