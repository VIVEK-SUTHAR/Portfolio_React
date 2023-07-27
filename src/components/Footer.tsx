import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import react from "../Assets/react.png";
import { SocialLinks } from "../data";
import "../styles/footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="heading">
        Made with ReactJS{" "}
        <span>
          <img src={react} alt="made_with_reactjs" />
        </span>
      </div>
      <div className="txt">
        <div className="my">Vivek Suthar</div>
        <div className="connect">
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
      </div>
    </div>
  );
}

export default React.memo(Footer);
