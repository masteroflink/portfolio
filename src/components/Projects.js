import FadeInOnScroll from "./FadeInOnScroll";
import ProjectContainer from "./ProjectContainer";
import "./Projects.css";
import SectionTitle from "./SectionTitle";
import projectData from "../data/projects.json";

// Images need to be 1280x750

const Projects = () => {

  return (
    <div id="projects" className="projects-main">
      <FadeInOnScroll>
        <SectionTitle title="Projects" />
        <div className="projects-content">
          {projectData.map((item) => (
            <ProjectContainer
              key={item.name}
              projectName={item.name}
              url={item.url}
              imgSrc={`${process.env.PUBLIC_URL}${item.imgSrc}`}
              skills={item.skills}
              description={item.description}
            />
          ))}
        </div>
      </FadeInOnScroll>
    </div>
  );
};

export default Projects;
