import React from 'react';
import "../App.css";
import Skills from '../Skills';
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
            <Skills />
            {/* <Contact /> */}
            <Footer />
        </>
    )
}

export default Main