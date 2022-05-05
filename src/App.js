import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./Projects";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
