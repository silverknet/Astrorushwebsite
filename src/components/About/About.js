import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import userimg1 from "../../Assets/about1.jpg";
import userimg2 from "../../Assets/about2.jpg";
import Toolstack from "./Toolstack";
import GraphandIntCard from "./GraphandIntCard";
import ChallengesCard from "./ChallengesCard";
import IndividualContributionCard from "./IndividualContributionCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              What's <strong className="purple">Astrorush?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              What <strong className="purple">graphics</strong> and <strong className="purple">interactions</strong> did we implement?
            </h1>
            <GraphandIntCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={userimg1} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={userimg2} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              What <strong className="purple">challenges</strong> did we face? How did we <strong className="purple">solve</strong> them?
            </h1>
            <ChallengesCard />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              What were our <strong className="purple">Individual Contributions?</strong>
            </h1>
            <IndividualContributionCard />
          </Col>
        </Row>
        
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> we used
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
