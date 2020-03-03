import React from "react";
import Ingredients from "./index";

let successElement;
let failedElement;

beforeEach(() => {
    successElement = (
        <Ingredients title="Cooking" date="10-11-12"></Ingredients>
    );
    failedElement = <Ingredients></Ingredients>;
});

describe("Igredients Component", () => {
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
        ).toEqual("10-11-12");
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
        ).toEqual("-");
    });

    it("FAILED renders get value date <Ingredients />", () => {
        expect(
            shallow(failedElement)
                .find({ test_id: "text-ingredients-bottom" })
                .find(".ingredients__date")
                .text(),
        ).toEqual("-");
    });
});
