import "./ProjectContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectContainer = ({
  projectName,
  url,
  imgSrc,
  skills,
  description,
}) => {
  return (
    <div className="project-container">
      <div className="project-wrapper">
        <img
          className="project-img"
          src={imgSrc}
          alt={projectName}
        />
        <div className="project-overlay"></div>
        <div className="project-content">
          <h3 className="project-name">{projectName}</h3>
          <p className="project-description">{description}</p>
          <div className="project-skills">
            {skills.map((item) => (
              <span key={item} className="skill-item">
                {item}
              </span>
            ))}
          </div>
        </div>
        <a
          href={url}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${projectName} on GitHub`}
        >
          <FontAwesomeIcon
            className="ext-link-icon"
            icon={faArrowUpRightFromSquare}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectContainer;
