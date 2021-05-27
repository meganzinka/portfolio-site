import React from "react";
import { useState } from "react";
import threeCircles from "../images/yellowcircles.png";
import logo from "../images/logo.png";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";
import gitHub from "../images/github.png";
import "./../style/Projects.css"

const Projects = () => {
  const [popup, setPopup] = useState(false);

  function showDescription(event) {
    setPopup(true);
    console.log("inside showDescription, popup=", popup);
  }
  return (




    
    <div>
      <div id="logo-container">
        <img className="logo" src={logo} />
      </div>

      <div className="main-projects">
        <div id="projects-container">
          <h3>PROJECTS</h3>
          
          <a href="https://ad-magic.herokuapp.com" target="blank">
            AdMagic/BCA Capstone Project: Interactive Sales Dashboard
          </a>
          <br />
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/R5kDFPjVVMk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          />
          <br />
          <br />
          <div id="project-description">
            <b>Team:</b> Megan Zinka, Abdelrahman Hussein, Tristan Nelson
            <br />
            <b>Sprint:</b> 3 weeks
            <br />
            <b>Description:</b> An Executive Sales Dashboard created from
            scratch which hosts a variety of filter tools. All tools are
            responsive to real-time database updates and user input. My
            principal role in the project was to design and create the filtering
            tool from back to front end, set up database queries, and create
            hand-rolled styling.
          </div>
          <br />
          <br></br>
          More Projects Coming soon!
          <br></br>
          <a target="_blank" href="https://github.com/meganzinka">
            <img src={gitHub} id="github-icon" />
          </a>
        </div>

        <div id="contact-info">
          <img className="three-circles" src={threeCircles} />

          <div id="left-side">
            <a href="mailto:meganzinka@gmail.com" target="blank">
              <img className="footer-icon" src={email} />
            </a>
            <div>meganzinka@gmail.com</div>
          </div>

          <div id="right-side">
            <a href="https://linkedin.com/in/meganzinka" target="blank">
              <img className="footer-icon" src={linkedin} />
            </a>
            <div>linkedin.com/in/meganzinka</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
