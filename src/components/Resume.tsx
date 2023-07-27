import { motion } from "framer-motion";
import "../styles/resume.css";
import Heading from "./UI/Title";
import data from "../data/timeline.json";
export default function Resume() {
  return (
    <>
      <Heading title={"My Timeline"} />
      <div className="container">
        <motion.span
          className="time-wrapper"
          initial={{ x: "-100%" }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true }}
        >
          <h1>Education</h1>
          <ul className="sessions">
            {data[0]?.educational?.map((item, index) => {
              return (
                <li key={`${item.title}_${index}`}>
                  <div className="time">{item.title}</div>
                  <p>{item.desc}</p>
                </li>
              );
            })}
          </ul>
        </motion.span>
        <motion.span
          className="time-wrapper"
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true }}
        >
          <h1>Experience</h1>
          <ul className="sessions">
            {data[1]?.experience?.map((item, index) => {
              return (
                <li key={`${item.title}_${index}`}>
                  <div className="time">{item.title}</div>
                  <p>{item.desc}</p>
                </li>
              );
            })}
          </ul>
        </motion.span>
      </div>
    </>
  );
}
