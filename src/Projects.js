import React from 'react'
import './projects.css'
import msg from "./Assets/msg-clone.jpg"
function Projects() {
    return (
        <div className='project'>
            <div className="projectheader">
                <h1>What I have Built?</h1><button>See All</button></div>
            <div className="projectContainer">
                <div className="card">
                    <h2>Messenger Clone</h2>
                    <img src={msg} alt="" />
                    <h3>Tech Stack Used</h3>
                    <p>ReactJS,Firebase</p>
                    <p>Material Ui</p>
                    <button><a href="/">Visit Now</a></button>
                </div>
                <div className="card">
                    <h2>Whats-App Clone</h2>
                    <img src={msg} alt="" />
                    <h3>Tech Stack Used</h3>
                    <p>ReactJS,Firebase</p>
                    <p>Material Ui</p>
                    <button><a href="/">Visit Now</a></button>

                </div>
                <div className="card">
                    <h2>macOS Clone</h2>
                    <img src={msg} alt="" />
                    <h3>Tech Stack Used</h3>
                    <p>HTML,CSS Javascript</p>
                    <p>jQuery</p>
                    <button><a href="/">Visit Now</a></button>

                </div>
                <div className="card">
                    <h2>Hack-Club SVIT Website</h2>
                    <img src={msg} alt="" />
                    <h3>Tech Stack Used</h3>
                    <p>NextJS</p>
                    <p>Theme Ui</p>
                    <button><a href="/">Visit Now</a></button>

                </div>
            </div>
        </div>
    )
}

export default Projects