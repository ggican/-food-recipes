// begin reducer
import { servicesAction } from "../../redux";
// end reducer

const homePageService = {
    ingredientsList: dispatch => {
        servicesAction(dispatch).reduxFetch({
            url: "/ingredients",
            method: "GET",
            reducer: "service",
            key: "ingredients",
            group: "recipes",
            message: {
                200: {
                    mode: {
                        use: "alert",
                        type: "success",
                        timeOut: 3000,
                    },
                    text: "Success Get Ingredients",
                },
                403: {
                    mode: {
                        use: "alert",
                        type: "error",
                        timeOut: 3000,
                    },
                    text: "Missing Authentication Token",
                },
            },
        });
    },
};

export default homePageService;
