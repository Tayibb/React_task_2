import React from "react";
import Header from "../components/common/Header";
import Main from "../components/Home/Main";
import Companies from "../components/Home/Companies";
import Solution from "../components/Home/Solution";
import Experience from "../components/Home/Experience";
import BasicTab from "../components/Home/Tab";
import Vacancies from "../components/Home/Vacancies";
import Feedback from "../components/Home/Feedback";
import Blog from "../components/Home/Blog";
import Footer from "../components/Home/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <Main />
            <Companies />
            <Solution />
            <Experience />
            <BasicTab />
            <Vacancies />
            <Feedback />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;
