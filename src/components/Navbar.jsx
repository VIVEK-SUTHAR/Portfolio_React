import React from 'react'
import "./Navbar.css"
import { AiOutlineHome, AiOutlineUser, AioutlineBook, AiOutlineBook, AiOutlineProject, AiOutlineContacts } from 'react-icons/ai';
function Navbar() {
    return (
        <nav>
            <a href="#about_section" className='active'><AiOutlineHome /></a>
            <a href="#Me"><AiOutlineUser /></a>
            <a href="#"><AiOutlineBook /></a>
            <a href="#"><AiOutlineProject /></a>
            <a href="#"><AiOutlineContacts /></a>
        </nav>
    )
}

export default Navbar