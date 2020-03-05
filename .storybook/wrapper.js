import React from "react";
import { ThemeProvider } from "styled-components";

const tokens = {
    data: "",
};
const Wrapper = ({ story }) => {
    return <ThemeProvider theme={tokens}>{story()}</ThemeProvider>;
};

export default Wrapper;
