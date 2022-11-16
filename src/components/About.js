import { useEffect, useRef } from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Typed from "typed.js";
import "./About.css";

function About() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN Dev", "Passionate Developer", "Web 3.0 Enthusist"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 20,
      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div id="about_section">
        <div id="landing_text">
          👋 Hello, I am Vivek Suthar
          <div className="my_tag">
            <span className="my_tag" ref={el}></span>
          </div>
        </div>
        <div className="animate__animated btn">
          <button>
            <a
              href="https://ipfs.filebase.io/ipfs/bafkreieuf5tirk4zjbpk53womdno5rttkqn5e5rjv2xfjdpcdsfs25itde"
              download="true"
            >
              {" "}
              Resume
            </a>
          </button>
        </div>
        <div id="socials">
          <a href="https://github.com/VIVEK-SUTHAR">
            <AiOutlineGithub />
          </a>
          <a href="https://www.linkedin.com/in/vivek-suthar-160152202">
            <AiOutlineLinkedin />
          </a>
          <a href="https://twitter.com/theviveksuthar">
            <AiOutlineTwitter />
          </a>
        </div>
        <div id="mark">
          <blockquote>
            "The Only Way To Do Great Work is do what you love"-Some Legend
          </blockquote>
        </div>
      </div>
    </>
  );
}

export default About;
