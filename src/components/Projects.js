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
      skills: ["Python", "HTML", "Django", "PostgreSQL"],
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Libero ad maecenas dis tellus maecenas per fringilla massa euismod.",
    },
    {
      name: "Shopping Cart",
      url: "https://github.com/masteroflink/simple-shopping-cart",
      imgSrc: `${process.env.PUBLIC_URL}/shopping_cart.jpg`,
      skills: ["Go"],
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Libero ad maecenas dis tellus maecenas per fringilla massa euismod.",
    },
    {
      name: "Todo List",
      url: "https://github.com/masteroflink/todo-list",
      imgSrc: `${process.env.PUBLIC_URL}/todo_list.jpg`,
      skills: ["Java", "PostgreSQL", "Docker", "API"],
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Libero ad maecenas dis tellus maecenas per fringilla massa euismod.",
    },
  ];

  return (
    <div id="projects" className="projects-main">
      <SectionTitle title="Projects" />
      <div className="projects-content">
        {projectData.map((item) => (
          <ProjectContainer
            key={item.name}
            projectName={item.name}
            url={item.url}
            imgSrc={item.imgSrc}
            skills={item.skills}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
