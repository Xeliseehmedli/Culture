import "./Projects.scss";
import icon from "../../assets/icon.svg";
import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";

export default function Projects() {
  return (
    <section>
      <div className="projects-section">
        <div className="title">
          <img src={icon} alt="news-icon" />
          <h4>Layihələr</h4>
        </div>
        <div className="projects-images">
          <img src={Project1} alt="project-image" />
          <img src={Project2} alt="project-image" />
        </div>
      </div>
    </section>
  );
}
