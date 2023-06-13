import { motion } from "framer-motion";
import "./me.css";

export default function Me() {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div id="Me" className="animate__animated">
        <center>
          <h2 className="title">About Me</h2>
        </center>
        <div class="cont">
          <motion.span
            className="img"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={"/img/Pic.png"} alt="" />
          </motion.span>
          <motion.span
            className="text"
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Hi! I'm Vivek, a 20-year-old engineering student pursuing a BTech in
            Information Technology. I'm passionate about self-learning and enjoy
            creating projects using different technologies. I'm highly skilled
            in frontend web development, focusing on HTML, CSS, and JavaScript.
            I'm also experienced in developing high-performance mobile apps
            using React Native, Expo, and TypeScript.
          </motion.span>
        </div>
      </div>
    </motion.span>
  );
}
