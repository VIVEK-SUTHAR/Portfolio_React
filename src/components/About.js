import React, { useEffect, useRef } from 'react'
import "./About.css";
import Typed from "typed.js";
import Socials from './Socials';
function About() {
    useEffect(() => {
        let about = document.getElementById('about_section');
        about.classList.add("animate__rollIn");

    }, [])
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["An IT Student", "A Web-Developer", "3-⭐At Codechef ", "Co-Head HackClub SVIT(Web)"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 10,
            backDelay: 100,
            loop:true
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div id='about_section' className='animate__animated'>
                Hello, I am Vivek Suthar<br />
                <div className="my_tag">
                    I Am <span ref={el}></span>
                </div>
                <div className="btn">
                    <button> Download Resume</button>
                    <button> Let's Talk</button>
                </div>
                <Socials />
            </div>
        </>
    )
}

export default About