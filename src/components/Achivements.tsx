import "../styles/Achivements.css";
import { motion } from "framer-motion";
import React from "react";
import Heading from "./UI/Title";
type AchievementsData = {
  title: string;
  description: string;
};

const achievementsData: Array<AchievementsData> = [
  {
    title: "Won Hackathon by D_DxPhala",
    description: "Built SafeShift",
  },
  {
    title: "Won SuperFluid WavePool,A Hackathon By SFxLens",
    description: "Created SuperRaise",
  },
  {
    title: "Launched LensPlay",
    description: "Crossed 550+ Downloades in 36 hours",
  },
  {
    title: "Won Hack-On-Chin,A MLH Hackathon",
    description: "Built VideoGram",
  },
  {
    title: "Won Wild Hacks-II, A MLH Hackathon",
    description: "Hacked on MetaMusic",
  },
  {
    title: "Won DUHacks,A Hackathon By GDSC",
    description: "Built DeBlog",
  },
];

function Achivements() {
  return (
    <React.Fragment>
      <Heading title={"Achievements"} />
      <motion.div
        className="achivements_container"
        initial={{ x: "-100%" }}
        whileInView={{ scale: 1, x: 0 }}
        transition={{ type: "spring", duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="achivemets"
          initial={{ x: "-100%" }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true }}
        >
          <ul className="sessions">
            {achievementsData.map((item, index) => {
              return (
                <li className="li" key={index}>
                  <div className="time">{item.title}</div>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </motion.span>
      </motion.div>
    </React.Fragment>
  );
}
export default React.memo(Achivements);
