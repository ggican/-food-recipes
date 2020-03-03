import React, { Fragment } from "react";

//begin home page file import
import StylesHomePage from "./index.style";
import { defaultPropsType, interFace } from "./index.interface";
import homePageService from "./index.service";
//end home page file import

//begin global import
import Ingredients from "../../components/ingredients";
import Container from "../../components/layouts/container";
import Wrapper from "../../wrapper";
//end global import

const Home = () => {
    return (
        <StylesHomePage>
            <Container>
                <Wrapper
                    functionService={homePageService.ingredientsList}
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
                                key={key}
                                title={item.title}
                                date={item["use-by"]}
                            ></Ingredients>
                        ))
                    }
                    renderFailed={() => <div>something wrong</div>}
                ></Wrapper>
            </Container>
        </StylesHomePage>
    );
};

Home.defaultProps = defaultPropsType;
Home.propTypes = interFace;

export default Home;
