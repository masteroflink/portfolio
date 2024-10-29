import "./About.css";
import FadeInOnScroll from "./FadeInOnScroll";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div id="about" className="about-main">
      <FadeInOnScroll>
        <SectionTitle title="About" />
        <div className="about-section">
          <img
            className="about-img"
            src={`${process.env.PUBLIC_URL}/avatar.png`}
            alt="https://cdn.pixabay.com/photo/2019/02/28/17/31/tasks-4026398_1280.jpg"
          />
          <div className="about-details">
            <h2>Bruce Bruno</h2>
            <span className="about-desc">
              Highly talented and energetic professional with progressive
              experience in streamlining the backend software development
              process by applying agile methodologies for sprint planning,
              design sessions, development, testing, and deployment. Adept at
              building and improving backend code interfaces with external
              systems. Instrumental in collaborating with other engineers to
              support the development and scaling of major applications and
              projects. Skilled in leveraging various platforms, software, and
              tools (Elixir, Python, Google Cloud, Azure) to establish and
              execute numerous technical functions and processes. Ability to
              negotiate and engage with clients and partner businesses;
              providing assurance and complete satisfaction for various
              projects.
            </span>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
};

export default About;
