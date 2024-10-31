import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Martin from "../../Assets/Projects/Martin.png";
import Tianyi from "../../Assets/Projects/Tianyi.png";
import Dingding from "../../Assets/Projects/DingDing.png";
import William from "../../Assets/Projects/William.png";
import Ke from "../../Assets/Projects/Ke.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          The <strong className="purple">Team</strong>
        </h1>
        <p style={{ color: "white" }}>
          The team behind AstroRush.
        </p>
        <div className="project-card-container">
          <div className="project-card">
            <ProjectCard
              imgPath={Tianyi}
              isBlog={false}
              title="Tianyi"
              description="What was your role in the project"
            />
          </div>
          <div className="project-card">
            <ProjectCard
              imgPath={Dingding}
              isBlog={false}
              title="Dingding"
              description="What was your role in the project"
            />
          </div>
          <div className="project-card">
            <ProjectCard
              imgPath={William}
              isBlog={false}
              title="William"
              description="What was your role in the project"
            />
          </div>
          <div className="project-card">
            <ProjectCard
              imgPath={Ke}
              isBlog={false}
              title="Ke Yang"
              description="What was your role in the project"
            />
          </div>
          <div className="project-card">
            <ProjectCard
              imgPath={Martin}
              isBlog={true}
              title="Martin "
              description="What was your role in the project"
            />
          </div>
        </div>
      </Container>
    </Container>
  );
}


export default Projects;
