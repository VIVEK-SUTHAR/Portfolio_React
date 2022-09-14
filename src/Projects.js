import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import "./projects.css";
import projects from "./projects.json";
function Projects() {
  const [whatProject, setwhatProject] = useState(undefined);

  useEffect(() => {
    getWeb2Projects();
  }, []);

  function getWeb2Projects() {
    let web2Projects = [];
    for (const project of projects) {
      if (project.type === "web2") {
        web2Projects.push(project);
      }
    }
    setwhatProject(web2Projects);
  }
  function getWeb3Projects() {
    let web3Projects = [];
    for (const project of projects) {
      if (project.type === "web3") {
        web3Projects.push(project);
      }
    }
    setwhatProject(web3Projects);
  }

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
            <button className="PROJECTS_TYPE" onClick={getWeb2Projects}>
              {" "}
              Web 2
            </button>
            <button className="PROJECTS_TYPE" onClick={getWeb3Projects}>
              Web 3
            </button>
          </center>
          <div className="grid">
            {whatProject &&
              whatProject.map((el, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.2,
                  }}
                  key={el.id}
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

export default Projects;
