import ProjectContainer from "./ProjectContainer";
import "./Projects.css";
import SectionTitle from "./SectionTitle";

// Images need to be 1280x750

const Projects = () => {
  const projectData = [
    {
      name: "Note Taker",
      url: "https://github.com/masteroflink/note-taker",
      imgSrc: `${process.env.PUBLIC_URL}/note_taker.jpg`,
    },
    {
      name: "Shopping Cart",
      url: "https://github.com/masteroflink/simple-shopping-cart",
      imgSrc: `${process.env.PUBLIC_URL}/shopping_cart.jpg`,
    },
    {
      name: "Todo List",
      url: "https://github.com/masteroflink/todo-list",
      imgSrc: `${process.env.PUBLIC_URL}/todo_list.jpg`,
    },
  ];

  return (
    <div id="projects">
      <SectionTitle title="Projects" />
      <div className="projects-content">
        {projectData.map((item) => (
          <ProjectContainer
            key={item.name}
            projectName={item.name}
            url={item.url}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
