import { motion } from "framer-motion"
import Footer from "./Footer"
import '../projects.css'
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
                    HAl
                    </div>
                </section>
            </motion.div>
            <Footer />
        </>

    )
}

export default ProjectWork