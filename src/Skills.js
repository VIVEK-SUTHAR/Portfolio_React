import React from 'react';
import "./components/skills.css";
import data from "./components/skills.json";
function Skills() {
    return (
        <>
            <div id="skills">
                <h1 className='title'>Skills</h1>
                <div className="all">
                    {
                        data.All && data.All.map((skill) =>

                            <img src={skill.img} alt="" key={skill.id} />
                        )
                    }
                </div>
                <div className="skillsCard">
                    <div className="dev">
                        <h2>Development</h2>
                        <div className="content">
                            {
                                data.dev && data.dev.map((tech) =>
                                    <span>{tech.name}</span>
                                )
                            }
                        </div>
                    </div>
                    <div className="design">
                        <h2>Design</h2>
                        <div className="content">
                            {
                                data.design && data.design.map((tech) =>
                                    <span>{tech.name}</span>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills