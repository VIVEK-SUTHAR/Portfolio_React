import React from 'react'
import "./footer.css"
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

function Footer() {
    return (
        <div className='footer'>
            <div className="heading">Made with ReactJS</div>
            <div className="txt">
                <div className="my">Vivek Suthar</div>
                <div className="connect">
                    <AiOutlineLinkedin/>
                    <AiOutlineGithub/>
                </div>
            </div>
        </div>
    )
}

export default Footer