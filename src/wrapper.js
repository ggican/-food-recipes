import React from "react";
import PagesHome from "./pages/home";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

const Wrapper = () => {
    return (
        <>
            <Header></Header>
            <PagesHome id="page-home"></PagesHome>
            <Footer></Footer>
        </>
    );
};

export default Wrapper;
