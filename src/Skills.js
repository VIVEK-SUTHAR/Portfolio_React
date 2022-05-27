import { motion } from 'framer-motion';
import React from 'react';
import "./components/skills.css";
import data from "./components/skills.json";
function Skills() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
                viewport={{ once: false }}
            >
                <div id="skills">
                    <h1 className='title'>Skills</h1>
                    <motion.div
                        className='all'
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: 'spring', duration: 0.9 }}
                        viewport={{ once: false }}
                    >
                        {
                            data.All && data.All.map((skill) =>

                                <img src={skill.img} alt="" key={skill.id} />
                            )
                        }
                    </motion.div>
                    <div className="skillsCard">
                        <motion.div
                            className='dev'
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ type: 'spring', duration: 0.9 }}
                            viewport={{ once: false }}
                        >
                            <h2>Development</h2>
                            <div className="content">
                                {
                                    data.dev && data.dev.map((tech) =>
                                        <span>{tech.name}</span>
                                    )
                                }
                            </div>
                        </motion.div>
                        <motion.div
                            className='design'
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ type: 'spring', duration: 0.9 }}
                            viewport={{ once: false }}
                        >
                            <h2>Design</h2>
                            <div className="content">
                                {
                                    data.design && data.design.map((tech) =>
                                        <span>{tech.name}</span>
                                    )
                                }
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Skills