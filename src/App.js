import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Loader from "./components/Loader";
import ProjectWork from "./components/ProjectWork";
const Admin = lazy(() => import('./components/Admin'));
const Contact = lazy(() => import('./components/Contact'));
const Main = lazy(() => import('./components/Main'));
const Me = lazy(() => import('./components/Me'));
const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Projects = lazy(() => import('./components/Projects'));
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<Me />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:catagory" element={<ProjectWork />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App;
