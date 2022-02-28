import Navbar from "./components/Navbar";
import "./App.css"
import About from "./components/About";
import Me from "./components/Me";
import Resume from "./components/Resume";
function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Me />
      <Resume />
    </div>
  );
}

export default App;
