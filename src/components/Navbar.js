import React from "react";
import "./Navbar.css";
import DownloadModal from "./DownloadModal";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Bruce Bruno
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <DownloadModal />
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} size="lg" />
        </button>
        <a
          className="socials"
          href="https://github.com/masteroflink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a
          className="socials"
          href="https://www.linkedin.com/in/bruce-bruno-159737111"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a className="socials" href="mailto:blbruno357@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
