import React from 'react';
import "../App.css";
import Projects from "../Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Me from "./Me";
import Resume from "./Resume";
function Main() {
    return (
        <>
            <About />
            <Me />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Main