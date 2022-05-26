import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import react from "../Assets/react.png";
import "./footer.css";
function Footer() {
    return (
        <div className='footer'>
            <div className="heading">Made with ReactJS <span><img src={react} alt="" /></span></div>
            <div className="txt">
                <div className="my">Vivek Suth
                    <Link to="/admin">
                        a
                    </Link>r</div>
                <div className="connect">
                    <AiOutlineGithub />
                    <AiOutlineLinkedin />
                    <AiOutlineTwitter />
                </div>
            </div>
        </div>
    )
}

export default Footer