import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Wrapper from "./wrapper";

import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./redux/index";
import tokens from "./styles/tokens";
import "./styles/index.css";

ReactDOM.render(
    <ThemeProvider theme={tokens}>
        <StoreProvider>
            <Wrapper />
        </StoreProvider>
    </ThemeProvider>,
    document.getElementById("root"),
);

serviceWorker.unregister();
