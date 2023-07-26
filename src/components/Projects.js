import { motion } from "framer-motion";
import React, { useState } from "react";
import Footer from "./Footer";
import "./projects.css";
import projects from "../data/projects.json";
function Projects() {
  const [isWeb3, setIsWeb3] = useState(false);
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
            >
              {" "}
              Web 2
            </button>
            <button
              className="PROJECTS_TYPE"
              onClick={() => {
                setIsWeb3(true);
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
  return web2Projects.map((el, index) => {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.2,
        }}
        key={`${el.id}-${index}`}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <article className="cards" key={el.id}>
          <img src={el.img_link} alt="msg" loading="lazy"></img>
          <span className="Project_Name">{el.name}</span>
          <div className="tech">
            {el["tech-stack"].map((tech) => (
              <img src={tech.img} alt="msg" loading="lazy" key={tech.id}></img>
            ))}
          </div>
          <div className="btns">
            {el.links.map((links) => (
              <>
                <button>
                  <a href={links.live}>View Live</a>
                </button>
                <button>
                  <a href={links.github}>Github</a>
                </button>
              </>
            ))}
          </div>
        </article>
      </motion.div>
    );
  });
});
const Web3Projects = () => {
  let web3Projects = projects.filter((project) => project.type === "web3");
  return web3Projects.map((el, index) => {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.2,
        }}
        key={`${el.id}-${index}`}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <article className="cards" key={el.id}>
          <img src={el.img_link} alt="msg" loading="lazy"></img>
          <span className="Project_Name">{el.name}</span>
          <div className="tech">
            {el["tech-stack"].map((tech) => (
              <img src={tech.img} alt="msg" loading="lazy" key={tech.id}></img>
            ))}
          </div>
          <div className="btns">
            {el.links.map((links) => (
              <>
                <button>
                  <a href={links.live}>View Live</a>
                </button>
                <button>
                  <a href={links.github}>Github</a>
                </button>
              </>
            ))}
          </div>
        </article>
      </motion.div>
    );
  });
};
