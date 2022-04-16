import React from 'react'
import "./resume.css";
import edu from "../Assets/edu.svg"
import c from "../Assets/c.svg";
import cpp from "../Assets/cpp.svg";
import js from "../Assets/js.svg";
import java from "../Assets/java.gif";
import git from "../Assets/git.svg";
import react from "../Assets/react.gif";
import jq from "../Assets/jQuery.png";
import linux from "../Assets/linux.png";
import mysql from "../Assets/mysql.svg";
import vscode from "../Assets/vscode.svg";
import windows from "../Assets/win10.svg";
import next from "../Assets/next.svg"
import bt from "../Assets/bootstrap.svg"
export default function Resume() {
    return (
        <>
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
            <div id="skills">
                Skills
                <div className="skillContainer">
                    <table>
                        <th>Languages I Use</th>
                        <tr>
                            <td><img src={c} alt=""></img></td>
                            <td>C</td>
                        </tr>
                        <tr>
                            <td><img src={cpp} alt=""></img></td>
                            <td>C++</td>
                        </tr>
                        <tr>
                            <td><img src={java} alt=""></img></td>
                            <td>Java</td>
                        </tr>
                        <tr>
                            <td><img src={js} alt=""></img></td>
                            <td>Javascript</td>
                        </tr>
                        <tr>
                            <td><img src={cpp} alt=""></img></td>
                            <td>PHP</td>
                        </tr>
                    </table>
                    <table>
                        <th>Tools I use</th>
                        <tr>
                            <td><img src={vscode} alt=""></img></td>
                            <td>VS Code</td>
                        </tr>
                        <tr>
                            <td><img src={git} alt=""></img></td>
                            <td>Git</td>
                        </tr>
                        <tr>
                            <td><img src={linux} alt=""></img></td>
                            <td>Linux(WSL)</td>
                        </tr>
                        <tr>
                            <td><img src={windows} alt=""></img></td>
                            <td>Windows</td>
                        </tr>
                        <tr>
                            <td><img src={mysql} alt=""></img></td>
                            <td>MYSQL</td>
                        </tr>
                    </table>
                    <table>
                        <th>Libraries And FrameWorks I Use</th>
                        <tr>
                            <td><img src={react} alt=""></img></td>
                            <td>ReactJS</td>
                        </tr>
                        <tr>
                            <td><img src={jq} alt=""></img></td>
                            <td>jQuey</td>
                        </tr>
                        <tr>
                            <td><img src={next} alt=""></img></td>

                            <td>NextJS</td>
                        </tr>
                        <tr>
                            <td><img src={bt} alt=""></img></td>

                            <td>Bootstarp</td>
                        </tr>
                        <tr>
                            <td>ChakraUI</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}
