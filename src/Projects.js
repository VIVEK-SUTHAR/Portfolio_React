import React from 'react'
import './projects.css'
import msg from "./Assets/msg-clone.jpg"
import data from "./projects.json"
function Projects() {
    return (
        <div className='project'>
            <div className="projectheader">
                <h1>What I have Built?</h1><button>
                    See All
                </button></div>
            <div className="projectContainer">
                {
                    data && data.map((el) => {
                        return <div className="card">
                            <h2>{el.name}</h2>
                            <img src={msg} alt="" />
                            <h3>Tech Stack Used</h3>
                            <p>{el.tech_stack}</p>
                            <button><a href={el.project_link}>Visit Now</a></button>
                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default Projects