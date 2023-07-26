import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import "../styles/projects.css";

import data from "../data/projects.json";
import Footer from "./Footer";
import { useEffect } from "react";
function ProjectWork() {
  const { catagory } = useParams();
  let projectList = [];
  // eslint-disable-next-line array-callback-return
  data.map((project) => {
    let temp_project = project;
    // eslint-disable-next-line array-callback-return
    project.catagory.map((tech_name) => {
      if (tech_name === catagory) {
        projectList.push(temp_project);
      }
    });
  });

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
                <article className="cards" key={`${el.name}-${el.id}`}>
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
      </motion.section>
      <Footer />
    </>
  );
}

export default ProjectWork;
