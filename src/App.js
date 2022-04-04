import Navbar from "./components/Navbar";
import "./App.css"
import About from "./components/About";
import Me from "./components/Me";
import Resume from "./components/Resume";
import Projects from "./Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Me />
      <Resume />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
