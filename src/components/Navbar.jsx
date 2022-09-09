import {
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineProject,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  let isOpen = false;
  const shownav = () => {
    const l1 = document.getElementsByClassName("line1")[0];
    const l2 = document.querySelector(".line2");
    const l3 = document.querySelector(".line3");
    const sidebar = document.getElementsByClassName("mobilenav")[0];
    let body = document.querySelector("body");
    if (!isOpen) {
      isOpen = true;
      l1.style.transform = "rotate(45deg)";
      l2.style.transform = "translateX(10px)";
      l2.style.width = 0;
      l3.style.transform = "rotate(-45deg)";
      sidebar.style.transform = "rotate(0deg)";
      sidebar.style.transform = "scale(1)";
      body.style.overflowY = "hidden";
    } else {
      l1.style.transform = "rotate(0deg)";
      l2.style.width = "52%";
      l2.style.transform = "translateY(0px)";
      l3.style.transform = "rotate(0deg)";
      sidebar.style.transform = "rotate(180deg)";
      sidebar.style.transform = "scale(0)";
      isOpen = false;
      body.style.overflowY = "auto";
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="right">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="https://blogbyvivek.hashnode.dev/" target={"_blank"}>
                  Blogs
                </a>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={shownav}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
      <div className="mobilenav">
        <div className="item">
          <AiOutlineHome />
          <Link to="/" onClick={() => isOpen(false)}>
            Home
          </Link>
        </div>
        <div className="item">
          <SiHashnode />
          <a href="https://blogbyvivek.hashnode.dev/" target={"_blank"}>
            Blogs
          </a>
        </div>
        <div className="item">
          <AiOutlineProject />
          <Link to="/projects" onClick={() => isOpen(false)}>
            Projects
          </Link>
        </div>
        <div className="item">
          <AiOutlineContacts />
          <Link to="/contact" onClick={() => isOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
