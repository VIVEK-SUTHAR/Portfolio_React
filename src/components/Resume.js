import { motion } from 'framer-motion';
import React from 'react';
import "./resume.css";
export default function Resume() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
            >
                <span className="edu title">My Time line</span>
                <div class="container">
                    <div class="time-wrapper">
                        <h1>Education</h1>
                        <ul class="sessions">
                            <li>
                                <div class="time">From SVIT,Vasad</div>
                                <p>B.E In Information Technology</p>
                            </li>
                            <li>
                                <div class="time">From Kalarav School,Halol</div>
                                <p>12<sup>th</sup> HSC</p>
                            </li>
                            <li>
                                <div class="time">From N.T high School Kanisa</div>
                                <p>10<sup>th</sup> SSC</p>
                            </li>
                        </ul>
                    </div>
                    <div class="time-wrapper">
                        <h1> Experience</h1>
                        <ul class="sessions">
                            <li>
                                <div class="time">November-'21 To Present</div>
                                <p>Co Head(Web), Hack Club SVIT</p>
                            </li>
                            <li>
                                <div class="time">2021-2022</div>
                                <p>Jt Social And Web-Design Secreatary ,SCC SVIT Vasad</p>
                            </li>
                            <li>
                                <div class="time">March-2022</div>
                                <p>Volunteer,Prakarsh'17 Web Team</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
