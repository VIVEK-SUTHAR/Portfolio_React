import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Loader from "./components/Loader";
import ProjectWork from "./components/ProjectWork";
import mixpanel from "mixpanel-browser";
import Overlay from "./components/UI/Overlay";
const Contact = lazy(() => import("./components/Contact"));
const Main = lazy(() => import("./components/Main"));
const Me = lazy(() => import("./components/Me"));
const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Projects = lazy(() => import("./components/Projects"));

mixpanel.init("5030db963eb7a41e280efbf886e99139", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Navbar />
        <AppRoutes />
        <Overlay />
      </Router>
    </Suspense>
  );
}

export default App;

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<Me />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work/:catagory" element={<ProjectWork />} />
    </Routes>
  );
}
