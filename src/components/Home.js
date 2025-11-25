import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="Home-main">
      <div className="intro">
        <p className="intro-greeting">Welcome</p>
        <h1 className="intro-name">I'm Bruce Bruno</h1>
        <p className="intro-title">Full-Stack Engineer</p>
        <div className="intro-cta">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#about" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
