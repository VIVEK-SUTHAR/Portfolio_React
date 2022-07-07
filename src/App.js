import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Main from "./components/Main";
import Me from "./components/Me";
import Navbar from "./components/Navbar";
import Projects from "./Projects";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  window.addEventListener('load', () => {
    setIsLoading(false);
  })
  return (
    isLoading ? (
      <Loader />

    ) :
      (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<Me />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      )
  );
}

export default App;
