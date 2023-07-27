import React, { useEffect, useRef } from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Typed from "typed.js";
import { SocialLinks } from "../data";
import "../styles/About.css";

const strings = [
  "Building LensPlay",
  "MERN Dev",
  "Building With RN",
  "Web3.0 Enthusiast",
];

function About() {
  const el = useRef<string | Element>("");
  const typedConfig = {
    strings: strings,
    startDelay: 300,
    typeSpeed: 100,
    backSpeed: 20,
    backDelay: 100,
    loop: true,
  };
  useEffect(() => {
    const typed = new Typed(el.current, typedConfig);
    return () => {
      typed.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="about_section">
      <div id="landing_text">
        👋 Hello, I am Vivek Suthar
        <div className="my_tag">
          <span
            className="my_tag"
            ref={el as React.RefObject<HTMLSpanElement>}
          />
        </div>
      </div>
      <div id="socials">
        <a href={SocialLinks.GitHub}>
          <AiOutlineGithub />
        </a>
        <a href={SocialLinks.LinkedIn}>
          <AiOutlineLinkedin />
        </a>
        <a href={SocialLinks.Twitter}>
          <AiOutlineTwitter />
        </a>
      </div>
      <div id="mark">
        <blockquote>
          "The Only Way To Do Great Work is do what you love"-Some Legend
        </blockquote>
      </div>
    </div>
  );
}

export default React.memo(About);
