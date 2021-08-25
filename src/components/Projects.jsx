import React from "react";
import { useState } from "react";
import threeCircles from "../images/yellowcircles.png";
import logo from "../images/logo.png";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";
import gitHub from "../images/github.png";
import AdMagicGif from "../images/Admagic.gif";
import GeoVermonterGif from "../images/GeoVermonter.gif";
import TILGif from "../images/TIL.gif";
import YelpGif from "../images/Yelp.gif";

const Projects = () => {
  return (
    <div>
      <div id="projects-container">
        <div id="ad-magic" className="project">
          <a href="https://ad-magic.herokuapp.com/" target="_blank">
            <img className="gif" src={AdMagicGif} />
          </a>
          <div className="project-description">
            <b>AdMagic Sales Dashboard: </b>
          Created from scratch and hosts many ways to filter
            sales data. All tools are responsive to database updates and user input.
            My principal role in the project was to create the filtering tool
            from back to front end, set up database queries, and create
            hand-rolled styling.
            <br />
            <br />
            React | Javascript | CSS | HTML | ExpressJS | NodeJS | MongoDB |
            Apex Charts
            <a target="_blank" href="https://github.com/meganzinka/ad-magic">
              <div id="github-icon-container">
                <img src={gitHub} id="github-icon" />
              </div>
            </a>
          </div>
        </div>

        <div id="til" className="project">
          <a href="https://shrouded-gorge-48421.herokuapp.com/" target="_blank">
            <img className="gif" src={TILGif} />
          </a>
          <div className="project-description">
          <b>Today I Learned Blog: </b>
            Web-server and front-end application built to mimic the "Today I
            Learned" SubReddit. Features include adding a new entry, searching
            by tag, editing and deleting entries, and reference various pieces
            of information that the user learned. Each entry includes a title,
            subject, content, link, and tag.
            <br />
            <br />
            React | Javascript | CSS | HTML | ExpressJS | NodeJS | MongoDB
            <a
              target="_blank"
              href="https://github.com/meganzinka/today-I-learned"
            >
              <div id="github-icon-container">
                <img src={gitHub} id="github-icon" />
              </div>
            </a>
          </div>
        </div>

        <div id="geo-vt" className="project">
          <a href="https://geo-vt.herokuapp.com/" target="_blank">
            <img className="gif" src={GeoVermonterGif} />
          </a>
          <div className="project-description">
          <b>Geo-Vermonter: </b>
            Web-server and front-end game application developed to drop the
            player at a random location within Vermont and require the player to
            guess which county they are in using minimal moves. The user can
            move north, east, south, west, return to the original location,
            guess the county, and receive a message about the accuracy of the
            guess.
            <br />
            <br />
            React | Javascript | CSS | HTML | ExpressJS | NodeJS | MongoDB
            <a
              target="_blank"
              href="https://github.com/meganzinka/today-I-learned"
            >
              <div id="github-icon-container">
                <img src={gitHub} id="github-icon" />
              </div>
            </a>
          </div>
        </div>
        <div id="yelp" className="project">
          <a href="https://yelpington-mz.herokuapp.com/" target="_blank">
            <img className="gif" src={YelpGif} />
          </a>
          <div className="project-description">
          <b>Yelpington: </b> 
            Yelp-like app created to enable users to view and learn about
            restaurants in Provincetown, MA. Features include zooming into a
            restaurant's location upon choosing a restaurant, viewing core info
            about the business, and leaving and viewing comments. All features are hand-styled.
            <br />
            <br />
            React | Javascript | CSS | HTML | React Leaflet | ExpressJS | NodeJS
            <a
              target="_blank"
              href="https://github.com/meganzinka/yelpington-meganzinka"
            >
              <div id="github-icon-container">
                <img src={gitHub} id="github-icon" />
              </div>
            </a>
          </div>
        </div>
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
  );
};

export default Projects;
