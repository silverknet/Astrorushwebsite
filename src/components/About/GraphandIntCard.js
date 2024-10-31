import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function GraphandIntCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            In order to re-imagine Asteroids in a <span className="purple">visually pleasing</span> and <span className="purple">modern</span> way we implemented advanced <span className="purple">graphics</span> techniques to our game, including:
            <br />

            <br />
            <ul>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Infinite scrolling "parallax"</span> effect to simulate movement in 3D space!
              </li>
              <li className="about-activity">
              <ImPointRight /> <span className="purple">Volumetric fog</span> to enhance depth and immersion!
              </li>
              <li className="about-activity">
              <ImPointRight /> <span className="purple">Procedurally generated materials</span> via shaders to add a dash of realism to our low-poly game! 
              </li>
            </ul>
            <br />
            In order to appreciate these graphics, the user has to <span className="purple">interact</span> somehow, so what kind of ways can the user interact?
            <br />
            <br />
            <ul>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Tilt functionality</span>, so that the user can move their character on a 2D axis in front of them!
              </li>
              <li className="about-activity">
              <ImPointRight /> <span className="purple">Shoot functionality</span>, defend yourself and your planet with the press of a button!
              </li>
              <li className="about-activity">
              <ImPointRight /> <span className="purple">Phone shake</span>, free yourself from being frozen in place by shield failure by shaking yourself loose! 
              </li>
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default GraphandIntCard;
