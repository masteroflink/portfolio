import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Bruce Bruno";
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
