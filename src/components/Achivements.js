import "./Achivements.css"
import { motion } from "framer-motion"
export default function Achivements() {
    return (
        // <section className="achivements_container">AC</section>
        <>
            <center className="title">Achivements</center>
            <motion.div class="achivements_container"
                initial={{ x: "-100%" }}
                whileInView={{ scale: 1, x: 0 }}
                transition={{ type: 'spring', duration: 1 }}
                viewport={{ once: true }}>
                <motion.span
                    className='achivemets'
                    initial={{ x: "-100%" }}
                    whileInView={{ scale: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1 }}
                    viewport={{ once: true }}
                >
                    <ul class="sessions">
                        <li className="li">
                            <div class="time">Won Wild Hacks-II, A MLH Hackathon </div>
                            <p>Built MetaMusic</p>
                        </li>
                        <li className="li">
                            <div class="time">Won DUHacks,A Hackathon By GDSC</div>
                            <p>Built DeBlog</p>
                        </li>

                    </ul>
                </motion.span>
            </motion.div>
        </>
    )
}