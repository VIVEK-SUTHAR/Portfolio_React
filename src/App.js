import Navbar from "./components/Navbar";
import "./App.css"
import About from "./components/About";
import Me from "./components/Me";
import Resume from "./components/Resume";
import Projects from "./Projects";
function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Me />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
