import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            whatup<span className="purple">sup</span>
            dfg <span className="purple"> sdf.</span>
            <br />
            game balbla
            <br />
            something bla bla
            <br />
            <br />
            Game bla shablo la
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Something
            </li>
            <li className="about-activity">
              <ImPointRight /> Something else
            </li>
            <li className="about-activity">
              <ImPointRight /> somethingh more
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
