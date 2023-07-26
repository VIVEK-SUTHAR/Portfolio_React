import { motion } from "framer-motion";
import "../styles/resume.css";
export default function Resume() {
  return (
    <>
      <span className="edu title">My Time line</span>
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
            <li>
              <div className="time">From SVIT,Vasad</div>
              <p>B.E In Information Technology</p>
            </li>
            <li>
              <div className="time">From Kalarav School,Halol</div>
              <p>
                12<sup>th</sup> HSC
              </p>
            </li>
            <li>
              <div className="time">From N.T high School Kanisa</div>
              <p>
                10<sup>th</sup> SSC
              </p>
            </li>
          </ul>
        </motion.span>
        <motion.span
          className="time-wrapper"
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true }}
        >
          <h1> Experience</h1>
          <ul className="sessions">
            <li>
              <div className="time">December-'22-Present</div>
              <p>Building LensPlay</p>
            </li>
            <li>
              <div className="time">November-'21</div>
              <p>Co Head(Web), Hack Club SVIT</p>
            </li>

            <li>
              <div className="time">March-2022</div>
              <p>Volunteer,Prakarsh'17 Web Team</p>
            </li>
          </ul>
        </motion.span>
      </div>
    </>
  );
}
