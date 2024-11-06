import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function IndividualContributionCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            <span className="purple">AstroRush</span> was developed by a team of students, here you can find out more
            about their specific <span className="purple">contributions</span> to the project:
            <br/>

            <br/>
            William Rolf:
            <ul>
              <li className="about-activity">
                <ImPointRight/> <span className="purple">Project Lead:</span>
                <br/>
                <ul>
                  In order to set up an effective work system, I needed to break down the project down into bite-sized
                  challenges. As project lead I structured the workflow using the <span className="purple">Scrum</span> method, created <span className="purple">Templates for Git commits</span> so that we can always
                  keep track of what was committed and a <span className="purple">Discord</span> server for sharing
                  files, general communication and planning. As project lead I organized <span className="purple">User Feedback</span> into plans of action for the next Scrum.
                </ul>
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> <span className="purple">Graphics & Mechanics:</span>
                <br/>
                <ul>
                In terms of <span className="purple">Mechanics/game design</span>, I implemented asteroids, asteroid field and their functionality together with player destruction and the game's end scenes, including the scoreboard and its functionality. I also implemented audio and music into the game. 
                For <span className="purple">graphics</span> I modelled procedural asteroids, created shields pickups as well as implemented particle systems, shaders and VFX for the assets in the game. I also experimented on using environmental assets with Martin to enhance sense of depth.
                
                </ul>
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> <span className="purple">3D Design & UX Challenges:</span>
                <br/>
                <ul>
                My challenges involved the simulation of movement for the player, as well as improving user immersion.
                Implementing environmental assets such as an asteroid field, depth-based visiblity, together with giving the player a wide-angled view improved user sense of depth.
                Implementing audio effects and music to the game and experimenting with features such as fog and light also enhanced immersion.
                </ul>
              </li>
            </ul>
            <br/>
            Martin Håkansson:
            <ul>
              <li className="about-activity">
                <ImPointRight/> <span className="purple">Graphics & Mechanics:</span>
                <br/>
                <ul>
                  I had my hand in many parts of the project, but my main focus was <span
                    className="purple">graphics</span> and <span className="purple">mechanics/game features</span>. Some
                  of the features I implemented were aim assist, character movement, health indication together with a
                  lot of small features to give a better look and feel to the game, like particles, camera movement, and
                  fog.
                </ul>
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> <span className="purple">Depth & 3D Challenges:</span>
                <br/>
                <ul>
                  Making something feel simple and intuitive is very hard, and a good result comes from getting the
                  details right. A challenge for me was to solve the problem of depth in a 3D environment, especially in
                  a space environment where there are no natural references. Creative solutions like light, shadows, and
                  fog help sell the illusion, and the <span className="purple">aim assist</span> system also gives the
                  player more control.
                </ul>
              </li>
            </ul>
            <br/>
            Ke Yang:
            <ul>
              <li className="about-activity">
                <ImPointRight/> <span className="purple">Interaction:</span>
                <br/>
                <ul>
                  I was primarily responsible for the development of the game’s start and end processes, as well as designing parts of the onboarding process. Together with the team, I designed and developed the game’s <span
                    className="purple">unattended start and restart mode </span>, allowing players to start the game by gathering on the planet. This way, we didn’t need staff to manually start the game.
                </ul>
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> <span className="purple">Mechanics:</span>
                <br/>
                <ul>
                  I was mainly responsible for some mechanics connected to the user's mobile device, specifically transmitting data from phone sensors and interaction data on the interface to the server side, where it was processed. I implemented mechanisms such as the shooting function, shake detection, and character movement.
                </ul>
              </li>
            </ul>
            <br/>
            Tianyi Yao:
            <ul>
              <li className="about-activity">
                <ImPointRight/> <span className="purple">Graphics & Mechanics:</span>
                <br/>
                <ul>
                  I was responsible for implementing some mechanics such as the <span className="purple">basic shooting</span> and <span className="purple">item pick-up</span> systems, as well as handling their graphical elements. Additionally, I implemented a player identity feature, assigning each player a unique color to ensure clear differentiation within the game environment.
                </ul>
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> <span className="purple">Backend:</span>
                <br/>
                <ul>
                  I was responsible for implementing network-related features, such as hosting the server, enabling players to connect to it, and managing data transmission between the client and server. This included establishing <span className="purple">real-time multiplayer</span> functionality, ensuring that data was efficiently and accurately shared across multiple players during gameplay.
                </ul>
              </li>
            </ul>
      <br/>
            Yifan Ding:
            <ul>
              <li className="about-activity">
                <ImPointRight/> <span className="purple">Graphics:</span>
                <br/>
                <ul>
                  I was responsible for the <span className="purple">concept design </span> , including player character and the creation of a stylized astronomy environment. This involved modeling spaceship and planet, setting up materials to achieve a cohesive low-poly look. I also defined the visual style for <span className="purple">3D </span>  environment and integrated HDRI skybox in Unity’s Universal Render Pipeline to enhance the lighting and atmosphere. Additionally, I designed <span className="purple">2D </span> elements, such as UI and layouts for starting and ending pages, and created the project poster to represent our game’s concept.
                </ul>
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> <span className="purple">Mechanics:</span>
                <br/>
                <ul>
                  I contributed to the design proposals for game mechanics, like collaborating on initial gameplay ideas, suggesting interaction mechanisms, and ensuring the mechanics fit within the game’s style and competitive-cooperative structure.
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
