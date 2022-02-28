import React,{useEffect} from 'react'
import "./Navbar.css"
import { AiOutlineHome, AiOutlineUser, AioutlineBook, AiOutlineBook, AiOutlineProject, AiOutlineContacts } from 'react-icons/ai';
function Navbar() {
    useEffect(() => {
        let nav = document.getElementById("nav-bar");
        nav.classList.add("animate__zoomInUp");
    
    }, [])
    return (
        <nav  id="nav-bar" className='animate__animated'>
            <a href="#about_section" className='active'><AiOutlineHome /></a>
            <a href="#Me"><AiOutlineUser /></a>
            <a href="#Resume"><AiOutlineBook /></a>
            <a href="#"><AiOutlineProject /></a>
            <a href="#"><AiOutlineContacts /></a>
        </nav>
    )
}

export default Navbar