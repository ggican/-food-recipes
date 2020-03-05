import React from "react";
import Container from "../container";
import StylesFooter from "./index.styles";

const Footer = () => {
    return (
        <StylesFooter id="footer-components">
            <Container>
                <footer>
                    <p>Posted by: Ikhsan Mahendri</p>
                    <p>
                        Contact information:{" "}
                        <a href="mailto:ikhsan.mahendri@gmail.com">
                            ikhsan.mahendri@gmail.com
                        </a>
                        .
                    </p>
                </footer>
            </Container>
        </StylesFooter>
    );
};

export default Footer;
