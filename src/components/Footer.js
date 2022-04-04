import React from 'react'
import "./footer.css"
import { AiOutlineHome, AiOutlineUser, AioutlineBook, AiOutlineBook, AiOutlineProject, AiOutlineContacts } from 'react-icons/ai';

function Footer() {
    return (
        <div className='footer'>
            <div className="heading">Made with ReactJS</div>
            <div className="txt">
                <div className="my">Vivek Suthar</div>
                <div className="connect">
                    <AiOutlineBook/>
                    <AiOutlineContacts/>
                    <AiOutlineHome/>    
                </div>
            </div>
        </div>
    )
}

export default Footer