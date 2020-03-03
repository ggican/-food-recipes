import React from "react";
import StylesFooter from "./index.styles";

const Footer = () => {
    return (
        <StylesFooter id="footer-components">
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
        </StylesFooter>
    );
};

export default Footer;
