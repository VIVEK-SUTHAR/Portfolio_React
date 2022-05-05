import React from 'react';
import { AiOutlineBook, AiOutlineContacts, AiOutlineHome, AiOutlineProject, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./Navbar.css";
function Navbar() {
    let isOpen = false;
    const shownav = () => {
        const l1 = document.getElementsByClassName('line1')[0];
        const l2 = document.querySelector(".line2");
        const l3 = document.querySelector(".line3");
        const sidebar = document.getElementsByClassName('mobilenav')[0];
        if (!isOpen) {
            isOpen = true;
            l1.style.transform = "rotate(45deg)";
            l2.style.width = 0;
            l3.style.transform = "rotate(-45deg)";
            sidebar.style.left = 0;
        }
        else {
            l1.style.transform = "rotate(0deg)";
            l2.style.width = "52%";
            l3.style.transform = "rotate(0deg)";
            sidebar.style.left = "-100%";
            isOpen = false;
        }
    }
    return (
        <>
            <div className="navbar">
                <div className="wrapper">
                    <div className="right mobile">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="hamburger" onClick={shownav}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                </div>
            </div>
            <div className="mobilenav">
                <div className="item">
                    <AiOutlineHome />
                    <Link to="/" onClick={() => isOpen(false)}>Home</Link>
                </div>
                <div className="item">
                    <AiOutlineUser /><a href='#about_section' onClick={() => isOpen = false}>About</a>
                </div>
                <div className="item">
                    <AiOutlineBook /> Resume
                </div>
                <div className="item">
                    <AiOutlineProject />
                    <Link to="/projects" onClick={() => isOpen(false)}>Projects</Link>

                </div>
                <div className="item">
                    <AiOutlineContacts />
                    <Link to="/contact" onClick={() => isOpen(false)}>Contact</Link>

                </div>
            </div>
        </>
    )
}

export default Navbar