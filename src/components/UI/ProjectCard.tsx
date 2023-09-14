import React from "react";
import { motion } from "framer-motion";
import TrackAction, { Events } from "../../utils/track";

export interface Props {
  item: ProjectItem;
}
export interface ProjectItem {
  id: number;
  name: string;
  imgLink: string;
  type: string;
  catagory: string[];
  techStack: TechStack[];
  links: Link[];
}
export interface Link {
  id: number;
  live: string;
  github: string;
}

export interface TechStack {
  id: number;
  img: string;
}

function ProjectCard({ item }: Props) {
  const handleImageClicked = React.useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      const overlay = document.getElementById("overlay");
      const fullImage = document.getElementById("fullImage");
      const imgSrc = e.currentTarget.src;
      let body = document.querySelector("body");
      if (fullImage && overlay && body) {
        fullImage.setAttribute("src", imgSrc);
        overlay.classList.add("active");
        body.style.overflowY = "hidden";
      }
    },
    []
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.2,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <article className="cards">
        <img
          src={item.imgLink}
          alt="msg"
          loading="lazy"
          onClick={handleImageClicked}
        />
        <span className="Project_Name">{item.name}</span>
        <div className="tech">
          {item["techStack"].map((tech) => (
            <img
              src={tech.img}
              alt={`${tech.img}`}
              loading="lazy"
              key={`${tech.img}_${tech.id}`}
            />
          ))}
        </div>
        <div className="btns">
          {item.links.map((links, index) => (
            <div key={`${links.id}_${index}`} className="gap">
              <button>
                <a
                  href={links.live}
                  onClick={(e) => {
                    window.open(links.github, "_blank");
                    e.preventDefault();
                    TrackAction(
                      Events.SingleProject,
                      `Clicked Projects${item.name}`
                    );
                  }}
                >
                  View Live
                </a>
              </button>
              <button>
                <a
                  href={links.github}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(links.github, "_blank");
                    TrackAction(
                      Events.SingleProject,
                      `Clicked Project Github${item.name}`
                    );
                  }}
                >
                  Github
                </a>
              </button>
            </div>
          ))}
        </div>
      </article>
    </motion.div>
  );
}

export default ProjectCard;
