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
              We set up the server using <span className="purple">Unity Relay</span> and hosted the client via <span className="purple">WebGL</span>, allowing each player to join using their <span className="purple">mobile devices</span>. Unity Relay handles multiplayer connections, while WebGL hosting enables the client to run directly in the browser, so players just open the webpage to jump into the game—<span className="purple">no app needed</span>. Players control movement by tilting their phones.
              <br />

              <br />
              <li className="about-activity">
              <ImPointRight /> How do we create a parallax effect in a space setting?
              </li>
              <br />
              We create a parallax effect by <span className="purple">layering stars and asteroids</span> at different distances—far layers move slower and look smaller, while closer ones move faster and appear larger. This gives depth to the space background.
              <br />

              <br />
              <li className="about-activity">
              <ImPointRight /> How do we make a game session a fulfilling and enjoyable experience? 
              </li>
              <br />
              By adding <span className="purple">engaging mechanics</span> like asteroid shooting, pickup items, and multiplayer features, players enjoy friendly competition and teamwork. <span className="purple">Richer interactions</span>, like tilting or shaking their phones, bring strategy and excitement, making the experience lively and memorable for everyone.<br />
            </ul>
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ChallengesCard;
