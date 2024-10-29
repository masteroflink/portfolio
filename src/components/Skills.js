import SectionTitle from "./SectionTitle";
import "./Skills.css";

const Skills = () => {
  const skillsData = {
    languages: ["Python", "Go", "Java", "Elixir"],
    tools: [
      "Google Cloud",
      "Azure",
      "AWS",
      "Docker",
      "Kubernetes",
      "Cloud Functions",
      "PubSub",
    ],
  };

  return (
    <div id="skills" name="skills-section" className="skills-main">
      <SectionTitle title="Skills" />
      <div className="skills-content">
        <div className="skills-box">
          <div>
            <div className="skills-section">
              <h3 className="skills-title">Language/Frameworks</h3>
              <div className="skills-tags">
                {skillsData["languages"].map((item) => (
                  <span key={item} className="skills-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-section">
              <h3 className="skills-title">Tools</h3>
              <div className="skills-tags">
                {skillsData["tools"].map((item) => (
                  <span key={item} className="skills-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img
          className="skills-img"
          src={`${process.env.PUBLIC_URL}/skills.png`}
          alt="https://cdn.pixabay.com/photo/2019/02/28/17/31/tasks-4026398_1280.jpg"
        />
      </div>
    </div>
  );
};

export default Skills;
