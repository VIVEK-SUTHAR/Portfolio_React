import React from 'react';
import "../App.css";
import Skills from '../Skills';
import About from "./About";
import Footer from "./Footer";
import Me from "./Me";
import Resume from "./Resume";
function Main() {
    return (
        <>
            <About />
            <Me />
            <Resume />
            <Skills />
            <Footer />
        </>
    )
}

export default Main