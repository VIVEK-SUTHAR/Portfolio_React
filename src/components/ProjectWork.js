import { motion } from "framer-motion";
import Footer from "./Footer";
import "../projects.css";
import { useParams } from "react-router-dom";
import data from "../projects.json";
import { useEffect } from "react";
function ProjectWork() {
  
  const { catagory } = useParams();
  let projectList = [];
  data.map((project) => {
    let temp_project = project;
    project.catagory.map((tech_name) => {
      if (tech_name === catagory) {
        projectList.push(temp_project);
      }
    });
  });
  console.log(projectList);
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
            {projectList &&
              projectList.map((el) => (
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
                      {el["tech-stack"].map((tech) => (
                        <img
                          src={tech.img}
                          alt="msg"
                          loading="lazy"
                          key={tech.id}
                        ></img>
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
              ))}
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}

export default ProjectWork;
