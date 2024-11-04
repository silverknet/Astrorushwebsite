import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Martin from "../../Assets/Projects/Martin.jpeg";
import Tianyi from "../../Assets/Projects/Tianyi.jpg";
import Dingding from "../../Assets/Projects/Dingding.jpg";
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
              description={<>Mechanics <br />Graphics <br />Backend</>}
              ghLink="https://github.com/Radranger/DH2413-Project-1-Group-3-Advanced-Graphics-and-Interaction-agi24-/pull/40"
            />
          </div>
          <div className="project-card">
            <ProjectCard
              imgPath={Dingding}
              isBlog={false}
              title="Dingding"
              description={<>
                Modeling <br />Environment <br />User interface
              </>}
              ghLink="https://github.com/Radranger/DH2413-Project-1-Group-3-Advanced-Graphics-and-Interaction-agi24-/pull/40"
            />
          </div>
          <div className="project-card">
            <ProjectCard
              imgPath={William}
              isBlog={false}
              title="William"
              description={<>Project lead <br /> Mechanics <br /> Graphics</>}
              ghLink="https://www.linkedin.com/in/william-rolf-0b8514235/"
            />
          </div>
          <div className="project-card">
            <ProjectCard
              imgPath={Ke}
              isBlog={false}
              title="Ke Yang"
              description={<>
                Interaction lead <br /> 
              </>}
              ghLink="https://github.com/Radranger/DH2413-Project-1-Group-3-Advanced-Graphics-and-Interaction-agi24-/pull/40"
            />
          </div>
          <div className="project-card">
            <ProjectCard
              imgPath={Martin}
              isBlog={false}
              title="Martin "
              description={<>Graphics <br /> Mechanics <br /> Rendering</>}
              ghLink="https://www.linkedin.com/in/martin-håkansson-3329b0269/"
            />
          </div>
        </div>
      </Container>
    </Container>
  );
}


export default Projects;
