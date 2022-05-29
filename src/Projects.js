import { motion } from "framer-motion"
import React from 'react'
import Footer from "./components/Footer"
import './projects.css'
import projects from "./projects.json"
function Projects() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <section className="projectsContainer">
                    <h1 className="title">Stuff I built</h1>
                    <div className="grid">
                        {
                            projects && projects.map((el) =>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 200
                                    }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="cards" key={el.id}>
                                        <img src={el.img_link} alt="msg" loading="lazy"></img>
                                        {el.name}
                                        <div className="tech">
                                            {
                                                el["tech-stack"].map((tech) =>
                                                    <img src={tech.img} alt="msg" loading="lazy" key={tech.id}></img>
                                                )
                                            }
                                        </div>
                                        <div className="btns">
                                            {
                                                el.links.map((links) =>
                                                    <>
                                                        <button><a href={links.live}>View Live</a></button>
                                                        <button><a href={links.github}>Github</a></button>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        }
                    </div>
                </section>
            </motion.div>
            <Footer />
        </>

    )
}

export default Projects