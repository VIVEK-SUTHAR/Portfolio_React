import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
