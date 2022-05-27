import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Me from "./components/Me";
import Navbar from "./components/Navbar";
import Projects from "./Projects";
function App() {
  const back = document.querySelector(".back");
  useEffect(() => {
    setTimeout(() => {
      if (window.scrollY > 25) {
        back.style.display = "block";
      }
      else {
        back.style.display = "none";
      }
    }, 0);
  })


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<Me />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
