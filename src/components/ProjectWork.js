import { motion } from "framer-motion"
import { useState } from 'react'
import Footer from "./Footer"
import '../projects.css'
import projects from "../projects.json"
import Web3 from "../Web3.json"
import { useParams } from "react-router-dom"
function ProjectWork() {
    const { catagory } = useParams();
    console.log(catagory);
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <section className="projectsContainer">
                    <h1 className="Projecttitle">Built with {catagory} </h1>
                    <div className="grid">

                    </div>
                </section>
            </motion.div>
            <Footer />
        </>

    )
}

export default ProjectWork