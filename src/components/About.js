import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import "./About.css";
function About() {
    useEffect(() => {
        let about = document.getElementById('landing_text');
        let btn = document.getElementsByClassName('btn')[0];
        btn.classList.add('animate__fadeInUp');
        about.classList.add("animate__backInUp");

    }, [])
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["An IT Student", "A Web-Developer", "Co Head HackClub SVIT"], // Strings to display
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 10,
            backDelay: 100,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>

            <div id='about_section'>
                <div id='landing_text' className='animate__animated'>
                    👋 Hello, I am Vivek Suthar
                    <div className="my_tag" >
                        <span className='my_tag' ref={el}></span>
                    </div>
                </div>
                <div className="animate__animated btn">
                    <button > Resume</button>
                </div>
                <div id="mark">
                    "The Only Way To Do Great Work is do what you love"-Some Legend
                </div>
            </div>

        </>
    )
}

export default About