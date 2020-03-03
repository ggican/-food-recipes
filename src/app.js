import React from "react";
import HomePage from "./pages/home";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

const App = () => {
    return (
        <>
            <Header></Header>
            <HomePage id="page-home"></HomePage>
            <Footer></Footer>
        </>
    );
};

export default App;
