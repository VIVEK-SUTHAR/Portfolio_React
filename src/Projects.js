import React from 'react'
import './projects.css'
import msg from "./Assets/msg-clone.jpg"
function Projects() {
    return (
        <div className='projectContainer'>
            <div className="projectHeading">What I have built</div>
            <div className="projectCards">
                <div className="projectCard">
                    <h1>Messenger-clone</h1>
                    <img src={msg} />
                    <p>
                        Tech Stack:<br></br>ReactJS
                    </p>
                </div>
                <div className="projectCard"></div>
                <div className="projectCard"></div>
                <div className="projectCard"></div>
            </div>
        </div>
    )
}

export default Projects