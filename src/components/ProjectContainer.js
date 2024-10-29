import "./ProjectContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ProjectContainer = ({
  projectName,
  url,
  imgSrc,
  skills,
  description,
}) => {
  const [contentStyle, setContentStyle] = useState({ display: "none" });
  const [imgBrightness, setImgBrightness] = useState(1);

  return (
    <div className="project-container">
      <h2>{projectName}</h2>
      <div
        className="project-wrapper"
        onMouseEnter={(e) => {
          setContentStyle({ display: "block" });
          setImgBrightness(0.15);
        }}
        onMouseLeave={(e) => {
          setContentStyle({ display: "none" });
          setImgBrightness(1);
        }}
      >
        <img
          className="project-img"
          src={imgSrc}
          alt="https://cdn.pixabay.com/photo/2019/02/28/17/31/tasks-4026398_1280.jpg"
          style={{
            filter: `brightness(${imgBrightness})`,
          }}
        />
        <div className="project-content" style={contentStyle}>
          <p className="project-description">{description}</p>
          <p>
            {skills.map((item) => (
              <span key={item} className="skill-item">
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
      <a href={url}>
        <FontAwesomeIcon
          className="ext-link-icon"
          icon={faArrowUpRightFromSquare}
        />
      </a>
    </div>
  );
};

export default ProjectContainer;
