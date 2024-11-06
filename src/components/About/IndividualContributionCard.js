import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function IndividualContributionCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">AstroRush</span> was developed by a team of students, here you can find out more about their specific <span className="purple">contributions</span> to the project:
          </p>

          <br />
          
          <strong>William Rolf:</strong>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Project Lead:</span>
              <ul>
                <li>In order to set up an effective work system, I needed to break down the project into bite-sized challenges. As project lead, I structured the workflow using the <span className="purple">Scrum</span> method...</li>
              </ul>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Graphics & Mechanics:</span>
              <ul>
                <li>In terms of <span className="purple">Mechanics/game design</span>, I implemented asteroids, asteroid field and their functionality...</li>
              </ul>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">3D Design & UX Challenges:</span>
              <ul>
                <li>My challenges involved the simulation of movement for the player, as well as improving user immersion...</li>
              </ul>
            </li>
          </ul>

          <br />

          <strong>Martin Håkansson:</strong>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Graphics & Mechanics:</span>
              <ul>
                <li>I had my hand in many parts of the project, but my main focus was <span className="purple">graphics</span> and <span className="purple">mechanics/game features</span>...</li>
              </ul>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Depth & 3D Challenges:</span>
              <ul>
                <li>Making something feel simple and intuitive is very hard, and a good result comes from getting the details right...</li>
              </ul>
            </li>
          </ul>

          <br />

          <strong>Ke Yang:</strong>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Interaction:</span>
              <ul>
                <li>I was primarily responsible for the development of the game’s start and end processes, as well as designing parts of the onboarding process...</li>
              </ul>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Mechanics:</span>
              <ul>
                <li>I was mainly responsible for some mechanics connected to the user's mobile device, specifically transmitting data from phone sensors...</li>
              </ul>
            </li>
          </ul>

          <br />

          <strong>Tianyi Yao:</strong>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Graphics & Mechanics:</span>
              <ul>
                <li>I was responsible for implementing some mechanics such as the <span className="purple">basic shooting</span> and <span className="purple">item pick-up</span> systems...</li>
              </ul>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Backend:</span>
              <ul>
                <li>I was responsible for implementing network-related features, such as hosting the server, enabling players to connect to it...</li>
              </ul>
            </li>
          </ul>

          <br />

          <strong>Yifan Ding:</strong>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Graphics:</span>
              <ul>
                <li>I was responsible for the <span className="purple">concept design</span>, including player character and the creation of a stylized astronomy environment...</li>
              </ul>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Mechanics:</span>
              <ul>
                <li>I contributed to the design proposals for game mechanics, like collaborating on initial gameplay ideas...</li>
              </ul>
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default IndividualContributionCard;
