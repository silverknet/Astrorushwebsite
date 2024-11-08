import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/astrorush_ai_logo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <iframe style={{aspectRatio: "16 / 9", padding:"0 200px", paddingBottom:"80px"}} src="https://www.youtube.com/embed/jurtKDndc3k">
          </iframe>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: "2.6em"}}>
            Your Phone is the <span className="purple"> Controller </span>
            </h1>
            <p className="home-about-body">
              Dive into a game where your phone becomes the key to the action!
              <br/><br/>
              Connect with your phone, take control, and watch as your moves come to life on the big screen.
              <br/><br/>
              We’re passionate about building
              <span className="purple"><b> interactive, cooperative experiences </b></span>
              that bring people together for fun, teamwork, and excitement!
              <br/><br/>
              With real-time control from your device, the game is easy to join and thrilling to play – no matter where
              you are on the screen.
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>

        {/*<Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>*/}
      </Container>
    </Container>
  );
}

export default Home2;