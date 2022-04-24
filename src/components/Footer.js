import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className="heading">Made with ReactJS</div>
            <div className="txt">
                <div className="my">Vivek Suth
                    <Link to="/admin">
                        a
                    </Link>r</div>
                <div className="connect">
                    <AiOutlineLinkedin />
                    <AiOutlineGithub />
                </div>
            </div>
        </div>
    )
}

export default Footer