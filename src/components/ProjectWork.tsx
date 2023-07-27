import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import "../styles/projects.css";

import data from "../data/projects.json";
import Footer from "./Footer";
import { useEffect } from "react";
import ProjectCard, { ProjectItem } from "./UI/ProjectCard";
function ProjectWork() {
  const { catagory } = useParams();
  let projectList: ProjectItem[] = [];

  for (let i = 0; i < data.length; i++) {
    let temp_project = data[i];
    for (let j = 0; j < data[i].catagory.length; j++) {
      if (data[i].catagory[j] === catagory) {
        projectList.push(temp_project);
      }
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="projectsContainer"
      >
        <h1 className="Projecttitle">Built with {catagory} </h1>
        <div className="grid">
          {projectList &&
            projectList.map((el, index) => (
              <ProjectCard item={el} key={`${el.name}_${index}`} />
            ))}
        </div>
      </motion.section>
      <Footer />
    </>
  );
}

export default ProjectWork;
