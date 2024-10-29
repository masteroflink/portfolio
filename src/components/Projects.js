import FadeInOnScroll from "./FadeInOnScroll";
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
        "The Note Taker is a web application developed using Python's Django framework, leveraging PostgreSQL for efficient data management. It allows users to create, edit, and organize notes seamlessly, featuring user authentication and a responsive design for accessibility across devices. This project demonstrates expertise in Django development, database integration, and creating a user-friendly interface for effective note management.",
    },
    {
      name: "Shopping Cart",
      url: "https://github.com/masteroflink/simple-shopping-cart",
      imgSrc: `${process.env.PUBLIC_URL}/shopping_cart.jpg`,
      skills: ["Go"],
      description:
        "The Shopping Cart CLI Application is a command-line tool developed in Go that enables users to manage their shopping cart efficiently. It features functionalities for adding, removing, and viewing items, as well as calculating the total cost, all through an intuitive interface. This project showcases proficiency in Go programming and demonstrates the ability to create effective, user-friendly applications for managing e-commerce tasks.",
    },
    {
      name: "Todo List",
      url: "https://github.com/masteroflink/todo-list",
      imgSrc: `${process.env.PUBLIC_URL}/todo_list.jpg`,
      skills: ["Java", "PostgreSQL", "Docker", "API"],
      description:
        "The Todo List Backend API is a Java-based application that provides a RESTful interface for managing to-do items, utilizing PostgreSQL for data storage. Deployed in a Docker container, this project ensures scalability and easy integration into various environments. This implementation demonstrates expertise in Java development, API design, and containerization for efficient application deployment.",
    },
  ];

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
              imgSrc={item.imgSrc}
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
