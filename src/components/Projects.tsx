import { motion } from "framer-motion";
import React, { useState } from "react";
import Footer from "./Footer";
import "../styles/projects.css";
import projects from "../data/projects.json";
import ProjectCard from "./UI/ProjectCard";
import TrackAction, { Events } from "../utils/track";
function Projects() {
  const [isWeb3, setIsWeb3] = useState(false);
  React.useEffect(() => {
    void TrackAction(
      Events.Project,
      `Project Tab: ${isWeb3 ? "Web3" : "Web2"}`
    );
  }, [isWeb3]);
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
          <center>
            <button
              className="PROJECTS_TYPE"
              onClick={() => {
                setIsWeb3(false);
              }}
              style={{
                backgroundColor: !isWeb3 ? "aqua" : "transparent",
                color: !isWeb3 ? "black" : "aqua",
              }}
            >
              {" "}
              Web 2
            </button>
            <button
              className="PROJECTS_TYPE"
              onClick={() => {
                setIsWeb3(true);
              }}
              style={{
                backgroundColor: isWeb3 ? "aqua" : "transparent",
                color: isWeb3 ? "black" : "aqua",
              }}
            >
              Web 3
            </button>
          </center>
          <div className="grid">
            {!isWeb3 ? <Web2Projects /> : <Web3Projects />}
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}

export default Projects;

const Web2Projects = React.memo(() => {
  let web2Projects = projects.filter((project) => project.type === "web2");
  return (
    <>
      {web2Projects.map((project, index) => {
        return <ProjectCard item={project} key={`${project.name}_${index}`} />;
      })}
    </>
  );
});
const Web3Projects = React.memo(() => {
  let web3Projects = projects.filter((project) => project.type === "web3");
  return (
    <>
      {web3Projects.map((el, index) => {
        return <ProjectCard item={el} key={`${el.name}_${index}`} />;
      })}
    </>
  );
});
