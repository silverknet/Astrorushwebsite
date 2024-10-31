import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ChallengesCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Like taking an asteroid by the crater, we had to find a way to face the <span className="purple">challenges</span> met when trying to implement our graphics and interactions.
            <br />

            <br />
            <ul>
              <li className="about-activity">
                <ImPointRight /> How do we connect the user to the game?
              </li>
              <br />
              In order to appreciate these graphics, the user has to <span className="purple">interact</span> somehow, so what kind of ways can the user interact?
              <br />

              <br />
              <li className="about-activity">
              <ImPointRight /> How do we create a parallax effect in a space setting?
              </li>
              <br />
              In order to appreciate these graphics, the user has to <span className="purple">interact</span> somehow, so what kind of ways can the user interact?
              <br />

              <br />
              <li className="about-activity">
              <ImPointRight /> How do we make a game session a fulfilling and enjoyable experience? 
              </li>
              <br />
              In order to appreciate these graphics, the user has to <span className="purple">interact</span> somehow, so what kind of ways can the user interact?
              <br />
            </ul>
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ChallengesCard;
