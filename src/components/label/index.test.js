import React from "react";
import Label from "./index";
import StyleLabel from "./index.style";

describe("Label Component", () => {
    let result;
    const onCloseLabel = value => {
        result = value;
    };
    let successElement;
    let failedElement;

    beforeEach(() => {
        successElement = (
            <Label onCloseLabel={onCloseLabel} title="Cooking"></Label>
        );
        failedElement = <Label></Label>;
    });

    it("SUCCESS renders and create snapshot  <Label />", () => {
        expect(toJson(mount(successElement))).toMatchSnapshot();
    });

    it("SUCCESS renders style  <Label />", () => {
        expect(toJson(mount(<StyleLabel></StyleLabel>))).toMatchSnapshot();
    });

    it("SUCCESS renders succe  <Label />", () => {
        expect(
            shallow(successElement)
                .find(".label__text")
                .text(),
        ).toEqual("Cooking");
    });

    it("SUCCESS renders OnClickCloseLabel  <Label />", () => {
        shallow(successElement)
            .find(".label__close")
            .simulate("click", {
                preventDefault: () => {},
            });
        expect(result).toEqual("Cooking");
    });
    it("FAILED renders Went Does't have title  <Label />", () => {
        expect(
            shallow(failedElement)
                .find(".label__text")
                .text(),
        ).toEqual("-");
    });
});
