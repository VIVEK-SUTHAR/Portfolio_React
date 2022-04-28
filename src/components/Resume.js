import { motion } from 'framer-motion';
import React from 'react';
import edu from "../Assets/edu.svg";
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
                <div id='Resume'>
                    <div className="resume_container">
                        <div className="education">
                            <img src={edu} alt="" />
                            <div className="edu_text">
                                Education<br />
                                Pursuing B.E I.T From SVIT,Vasad<br />
                                Current Sem:4 CGPA:8.60<br />
                                12th HSC,Science,Kalarav School,Halol<br />
                                Grade:68.5%<br />
                                10th SSC,N.T High School,Kanisa<br />
                                Grade:87.5%
                            </div>
                        </div>
                        <div className="achive">
                            <ol>
                                My Achivements
                                <li>👉3⭐At Codechef</li>
                                <li>👉4⭐At Hacker-Rank(C)</li>
                                <li>👉Qualified for Snackdown 2021</li>
                                <li>Global Rank 535 At Codechef Lunch-time(Nov-21)</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
