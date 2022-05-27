import { motion } from 'framer-motion';
import React from 'react';
import "./components/skills.css";
import data from "./components/skills.json";
function Skills() {
    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <div id="skills">
                    <h1 className='title'>Skills</h1>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -200,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 1.9 }}
                        viewport={{ once: false }}
                    >
                        <div className="all">
                            {
                                data.All && data.All.map((skill) =>

                                    <img src={skill.img} alt="" key={skill.id} />
                                )
                            }
                        </div>
                    </motion.div>
                    <div className="skillsCard">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -200,
                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", duration: 1 }}
                            viewport={{ once: false }}
                        >
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
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -200,
                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", duration: 1 }}
                            viewport={{ once: false }}
                        >
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
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Skills