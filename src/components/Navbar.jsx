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
                    <div className="left">
                        Vivek
                    </div>
                    <div className="right mobile">
                        <ul>
                            <li><a href="#Me">Home</a></li>
                            <li><a href="#about_section">About</a></li>
                            <li><a href="#home">Resume</a></li>
                            <li><a href="#home">Projects</a></li>
                            <li><a href="#home">Contact</a></li>
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
                    <Link to="/" onClick={()=>isOpen(false)}>Home</Link>
                </div>
                <div className="item">
                    <AiOutlineUser /> About
                </div>
                <div className="item">
                    <AiOutlineBook /> Resume
                </div>
                <div className="item">
                    <AiOutlineProject /> Project
                </div>
                <div className="item">
                    <AiOutlineContacts /> Contact
                </div>
            </div>
        </>
    )
}

export default Navbar