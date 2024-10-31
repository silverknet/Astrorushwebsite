import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            You may remember the game <span className="purple">Asteroids</span>, now imagine you can play it one more but in 3D... With a twist! Your phone is now the controller!
            <br />
            Our inspiration is taken from interactive billboards, we want to offer our users the ability to interact without committing to purchasing anything and freely join in on the fun!
            <br />
        
            <br />
            The <span className="purple">goal</span> of the <span className="purple">AstroRush</span> project is to:
            <ul>
              <li className="about-activity">
                <ImPointRight /> Create a visually pleasing, modern take on a retro experience.
              </li>
              <li className="about-activity">
              <ImPointRight /> To offer our users the ability to quickly and easily interact without committing to purchasing anything.
              </li>
              <li className="about-activity">
              <ImPointRight /> Facilitate user engagement and maintain user comfort through enabling the use of the user's phone as a controller!
              </li>
            </ul>
            <br />
            This goal naturally comes with a set of challenges, how will we connect our phones to the game? What will it look like? More on that below:
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
