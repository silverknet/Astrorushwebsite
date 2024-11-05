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
            <br />

            <br />
            William Rolf:
            <ul>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Project Lead:</span>
                <br />
                  <ul>
                  In order to set up an effective work system, I needed to break down the project into bite-sized challenges. 
                  I structured the workflow using the <span className="purple">Scrum</span> method, where each challenge is assigned to one or more group members over our week-long period of one sprint before the next roundup. I used <span className="purple">Trello</span> to visualise this for all group members.It’s really important to have a system where there is as little confusion as possible. 
                  That’s why I added a <span className="purple">Template for Git commits</span> so that we can always keep track of what was committed and a <span className="purple">Discord</span> server for sharing files, general communication and planning. As project lead I also took a speaker and evaluator role during public test demos to later be able to organize <span className="purple">User Feedback</span> into plans of action.
                  </ul> 
              </li>
            <br />
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Mechanics:</span>
                <br /> 
                  <ul>
                  TBA
                  </ul> 
              </li>
              <li className="about-activity">
              <ImPointRight /> <span className="purple">Graphics:</span>
                <br /> 
                  <ul>
                  TBA
                  </ul> 
              </li>
            </ul>
            <br />
            Martin Håkansson:
            <ul>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Graphics & Mechanics:</span>
                <br />
                <ul>
                  I had my hand in many parts of the project, but my main focus was <span className="purple">graphics</span> and <span className="purple">mechanics/game features</span>. Some of the features I implemented were aim assist, character movement, health indication together with a lot of small features to give a better look and feel to the game, like particles, camera movement, and fog.
                </ul>
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Depth & 3D Challenges:</span>
                <br />
                <ul>
                  Making something feel simple and intuitive is very hard, and a good result comes from getting the details right. A challenge for me was to solve the problem of depth in a 3D environment, especially in a space environment where there are no natural references. Creative solutions like light, shadows, and fog help sell the illusion, and the <span className="purple">aim assist</span> system also gives the player more control.
                </ul>
              </li>
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default IndividualContributionCard;
