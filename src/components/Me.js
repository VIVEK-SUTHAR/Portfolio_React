import { motion } from "framer-motion";
import React from "react";
import { AboutText } from "../data";
import "../styles/me.css";

function Me() {
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
            {AboutText}
          </motion.span>
        </div>
      </div>
    </motion.span>
  );
}
export default React.memo(Me);
