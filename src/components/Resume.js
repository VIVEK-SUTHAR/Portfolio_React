import React from 'react'
import "./resume.css";
import edu from "../Assets/edu.svg"
export default function Resume() {
    return (
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
                    My Achivements<br />
                    👉3⭐At Codechef<br />
                    👉4⭐At Hacker-Rank(C)<br />
                    👉Qualified for Snackdown 2021<br />
                    👉Global Rank 535 At Codechef Lunch-time(Nov-21)<br />


                </div>
            </div>
        </div>
    )
}
