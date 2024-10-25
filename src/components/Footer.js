import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div>
          <h2>Bruce Bruno</h2>
        </div>
        <div>
          <h2>Explore</h2>
          <ul className="footer-list-links">
            <li>
              <a className="footer-links" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="footer-links" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="footer-links" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="footer-links" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Follow</h2>
          <div>
            <a className="socials" href="https://github.com/masteroflink">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a
              className="socials"
              href="https://www.linkedin.com/in/bruce-bruno-159737111"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
