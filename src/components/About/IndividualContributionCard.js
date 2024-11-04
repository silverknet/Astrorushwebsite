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
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default IndividualContributionCard;
