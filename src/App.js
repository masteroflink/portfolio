import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
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
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
