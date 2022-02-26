import React from 'react'
import "./Social.css";
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
export default function Socials() {
    return (
        <div className='container'>
            <ul>
                <li><a href="#"><AiOutlineLinkedin /></a></li>
                <li><a href="#"><AiOutlineGithub /></a></li>
                <li><a href="#"><CgMail /></a></li>
            </ul>
        </div>
    )
}
