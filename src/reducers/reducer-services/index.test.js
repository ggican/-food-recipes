import React from "react";
import { servicesRedux, servicesState } from "./reducer-services.redux";

describe("Reducer Services Component", () => {
    const state = servicesState;
    beforeEach(() => {});

    it("SUCCESS servicesRedux type 200 function and Snapshot servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "recipes",
            key: "ingredients",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 200,
            isError: false,
            isSuccess: true,
        };

        expect(servicesRedux(servicesState, actionTest)).toMatchSnapshot();
    });
    it("SUCCESS servicesState  Snapshot servicesState", () => {
        expect(servicesState).toMatchSnapshot();
    });
    it("SUCCESS servicesRedux type 200 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "recipes",
            key: "ingredients",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 200,
            isError: false,
            isSuccess: true,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            recipes: {
                ingredients: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 201 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "recipes",
            key: "ingredients",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 201,
            isError: false,
            isSuccess: true,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            recipes: {
                ingredients: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 201 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "recipes",
            key: "ingredients",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 204,
            isError: false,
            isSuccess: true,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            recipes: {
                ingredients: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 201 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "recipes",
            key: "ingredients",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 400,
            isError: true,
            isSuccess: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            recipes: {
                ingredients: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 401 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "recipes",
            key: "ingredients",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 401,
            isError: true,
            isSuccess: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            recipes: {
                ingredients: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 404 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "recipes",
            key: "ingredients",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 404,
            isError: true,
            isSuccess: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            recipes: {
                ingredients: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 409 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "recipes",
            key: "ingredients",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 409,
            isError: true,
            isSuccess: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            recipes: {
                ingredients: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 500 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "recipes",
            key: "ingredients",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 500,
            isError: true,
            isSuccess: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            recipes: {
                ingredients: actionTest,
            },
        });
    });
    it("SUCCESS servicesRedux type CLEAR function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "recipes",
            key: "ingredients",
            defaultData: {
                isDefault: true,
            },
            type: "CLEAR",
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            recipes: { ingredients: { isDefault: true } },
        });
    });
    it("SUCCESS servicesRedux type DEFAULT function servicesRedux", () => {
        const actionTest = {
            type: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            recipes: { ingredients: false },
        });
    });
});
