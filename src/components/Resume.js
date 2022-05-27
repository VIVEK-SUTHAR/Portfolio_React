import { motion } from 'framer-motion';
import React from 'react';
import "./resume.css";
export default function Resume() {
    return (
        <>

            <span className="edu title">My Time line</span>
            <div class="container">
                <motion.span
                    className='time-wrapper'
                    initial={{ x: "-100%" }}
                    whileInView={{ scale: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1 }}
                    viewport={{ once: false }}

                >
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
                </motion.span>
                <motion.span
                    className='time-wrapper'
                    initial={{ x: "-100%" }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'spring', duration: 1 }}
                    viewport={{ once: false }}

                >
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
                </motion.span>
            </div>
        </>
    )
}
