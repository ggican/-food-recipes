import React from "react";
import Container from "../container";
import StylesHeader from "./index.styles";

const Header = () => {
    return (
        <StylesHeader id="header-components">
            <Container>
                <header>
                    <nav>
                        <h1>Recipes List</h1>
                    </nav>
                </header>
            </Container>
        </StylesHeader>
    );
};

export default Header;
