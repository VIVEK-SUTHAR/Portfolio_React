import React from 'react'
import './projects.css'
import data from "./projects.json"
import { motion } from "framer-motion"
function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
        >
            <div className='project' id='Projects'>
                <div className="projectheader">
                    <h1>What I have Built?</h1><button>
                        See All
                    </button></div>
                <div className="projectContainer">
                    {
                        data && data.map((el) => {
                            return <div className="card" key={el.id}>
                                <h2>{el.name}</h2>
                                {/* <img src={el.project_picture} alt="" /> */}
                                <h3>Tech Stack Used</h3>
                                <p>{el.tech_stack}</p>
                                <button><a href={el.project_link}>Visit Now</a></button>
                            </div>
                        })
                    }
                </div>
            </div>
            
        </motion.div>

    )
}

export default Projects