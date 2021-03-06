import { motion } from "framer-motion"
import { useState } from 'react'
import Footer from "./components/Footer"
import './projects.css'
import projects from "./projects.json"
import Web3 from "./Web3.json"
function Projects() {
    const [whatProjects, setWhatProjects] = useState(projects);
    const projectData = whatProjects;
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <section className="projectsContainer">
                    <h1 className="Projecttitle">Stuff I built</h1>
                    <center ><button className="PROJECTS_TYPE" onClick={() => setWhatProjects(projects)}> Web 2</button><button className="PROJECTS_TYPE" onClick={() => setWhatProjects(Web3)}>Web 3</button></center>
                    <div className="grid">
                        {
                            projectData && projectData.map((el) =>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.2,
                                    }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <article className="cards" key={el.id}>
                                        <img src={el.img_link} alt="msg" loading="lazy"></img>
                                        <span className="Project_Name">{el.name}</span>
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
                                    </article>
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