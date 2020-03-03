import React, { Fragment } from "react";
import StylesHomePage from "./index.style";
import { defaultPropsType, interFace } from "./index.interface";
import homePageService from "./index.service";

import Ingredients from "../../components/ingredients";
import Container from "../../components/layouts/container";
import useDataFetching from "../../utils/customHooks/useDataFetching";

const Hoc = ({
    renderLoading = () => {},
    renderFailed = () => {},
    renderSuccess = () => {},
    functionService,
}) => {
    const {
        errorResponse,
        isLoading,
        resultsResponse,
        messageResponse,
    } = useDataFetching(functionService);

    let render;

    if (isLoading) {
        render = renderLoading();
    } else {
        if (errorResponse) {
            render = renderFailed(messageResponse);
        }
        if (renderSuccess) {
            render = renderSuccess(resultsResponse);
        }
    }

    return render;
};

const Home = () => {
    return (
        <StylesHomePage>
            <Container>
                <Hoc
                    functionService={homePageService.ingredientsList}
                    renderLoading={() => (
                        <Fragment>
                            <Ingredients.Loading></Ingredients.Loading>
                            <Ingredients.Loading></Ingredients.Loading>
                            <Ingredients.Loading></Ingredients.Loading>
                        </Fragment>
                    )}
                    renderSuccess={response => {
                        return response.map((item, key) => (
                            <Ingredients
                                key={key}
                                title={item.title}
                                date={item["use-by"]}
                            ></Ingredients>
                        ));
                    }}
                    renderFailed={() => <div>something wrong</div>}
                ></Hoc>
            </Container>
        </StylesHomePage>
    );
};

Home.defaultProps = defaultPropsType;
Home.propTypes = interFace;

export default Home;
