import React from 'react'
import "./Social.css";
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
export default function Socials() {
    return (
        <div className='container'>
            <ul>
                <li><a href="https://www.linkedin.com/in/vivek-suthar-160152202/"><AiOutlineLinkedin /></a></li>
                <li><a href="https://github.com/VIVEK-SUTHAR"><AiOutlineGithub /></a></li>
                <li><a href="sutharvivek18@gmail.com"><CgMail /></a></li>
            </ul>
        </div>
    )
}
