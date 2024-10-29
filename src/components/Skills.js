import FadeInOnScroll from "./FadeInOnScroll";
import SectionTitle from "./SectionTitle";
import "./Skills.css";

const Skills = () => {
  const skillsData = {
    languages: ["Python", "Typescript", "Go", "Java", "Elixir"],
    frameworks: ["Django", "React", "FastAPI"],
    tools: [
      "Google Cloud",
      "Azure",
      "AWS",
      "Docker",
      "Kubernetes",
      "Cloud Functions",
      "PubSub",
    ],
    databases: ["Big Query", "PostgreSQL", "MongoDB", "ElasticSearch", "Redis"],
  };

  const capitalize = (string) => {
    if (!string) return ""; // Handle empty strings or undefined input
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <div id="skills" name="skills-section" className="skills-main">
      <FadeInOnScroll>
        <SectionTitle title="Skills" />
        <div className="skills-content">
          <div className="skills-box">
            <div>
              {Object.keys(skillsData).map((item) => (
                <div className="skills-section">
                  <h3 className="skills-title">{capitalize(item)}</h3>
                  <div className="skills-tags">
                    {skillsData[item].map((skill) => (
                      <span key={skill} className="skills-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            className="skills-img"
            src={`${process.env.PUBLIC_URL}/skills.png`}
            alt="https://cdn.pixabay.com/photo/2019/02/28/17/31/tasks-4026398_1280.jpg"
          />
        </div>
      </FadeInOnScroll>
    </div>
  );
};

export default Skills;
