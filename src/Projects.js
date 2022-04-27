import { motion } from "framer-motion"
import React from 'react'
import { Link } from "react-router-dom"
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
                viewport={{ once: false }}
            >
                <section className="projectsContainer">
                    <h1>Stuff I built</h1>
                    <div className="grid">
                        {
                            projects && projects.map((el) =>
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
                                                    <button ><Link to={links.live}>View live</Link></button>
                                                    <button><Link to={links.github}>Github</Link></button>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
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