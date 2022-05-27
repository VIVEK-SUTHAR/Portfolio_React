import { motion } from "framer-motion"
import React from 'react'
import Pic from "../Assets/Pic.webp"
import "./me.css"

export default function Me() {
    // let me = document.querySelector("#Me");
    // window.onscroll() > 20 ? me.classList.add("animate__rollIn") : me.classList.add("animate__rollIn")
    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
        >
            <div id='Me' className='animate__animated'>
                <center><h2 className="title">About Me</h2></center>
                <div class="cont">
                    <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: false }}
                    >
                        <div class="img">
                            <img src={Pic} alt="" />
                        </div>
                    </motion.span>
                    <motion.span className="text"
                        initial={{ x: -300 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: false }}
                    >
                        Hi! 👋 I'm Vivek, a 19-year-old engineering sophomore pursuing BTech
                        in Information Technology. I am a passionate self-learner, CP
                        Enthusiast,exploring and building projects👨‍💻 using various
                        technologies. I am a frontend web developer well versed in HTML, CSS,
                        JavaScript and stand at a beginner-intermediate level of React.
                    </motion.span>
                </div>
            </div>
        </motion.span>
    )
}
