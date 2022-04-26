import { motion } from "framer-motion"
import React from 'react'
import Pic from "../Assets/Pic.jpg"
import "./me.css"

export default function Me() {
    // let me = document.querySelector("#Me");
    // window.onscroll() > 20 ? me.classList.add("animate__rollIn") : me.classList.add("animate__rollIn")
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div id='Me' className='animate__animated'>
                {/* <div className="image">
                <img src={Pic} alt=""></img>
            </div>
            <div className="me-text">
                Hi! 👋 I'm Vivek, a 19-year-old engineering sophomore pursuing BTech
                in Information Technology. I am a passionate self-learner, CP
                Enthusiast,exploring and building projects👨‍💻 using various
                technologies. I am a frontend web developer well versed in HTML, CSS,
                JavaScript and stand at a beginner-intermediate level of React.
            </div> */}
                <div class="cont">

                    <div class="img">
                        <img src={Pic} alt="" />
                    </div>
                    <div class="text">
                        Hi! 👋 I'm Vivek, a 19-year-old engineering sophomore pursuing BTech
                        in Information Technology. I am a passionate self-learner, CP
                        Enthusiast,exploring and building projects👨‍💻 using various
                        technologies. I am a frontend web developer well versed in HTML, CSS,
                        JavaScript and stand at a beginner-intermediate level of React.
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
