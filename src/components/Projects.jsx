import React from "react";
import gitHub from "../images/gitHub.svg";
import AdMagicGif from "../images/Admagic.gif";
import GeoVermonterGif from "../images/GeoVermonter.gif";
import TILGif from "../images/TIL.gif";
import YelpGif from "../images/Yelp.gif";

const Projects = () => {
  return (
    <div id="projects">
      <div id="projects-container">
        <div id="ad-magic" className="project">
          <a href="https://ad-magic.herokuapp.com/" target="_blank" rel="noreferrer">
            <img className="gif" src={AdMagicGif} alt="website gif AdMagic" />
          </a>
          <div className="project-description">
          <div id="languages">React | Javascript | CSS | HTML | ExpressJS | NodeJS | MongoDB | Apex Charts </div>
            <br />
            <b>AdMagic Sales Dashboard: </b>
            Created from scratch and hosts many ways to filter sales data. All
            tools are responsive to database updates and user input. My
            principal role in the project was to create the filtering tool from
            back to front end, set up database queries, and create hand-rolled
            styling.
            <a target="_blank" href="https://github.com/meganzinka/ad-magic" rel="noreferrer">
              <div id="github-icon-container">
                <img src={gitHub} id="github-icon" alt="github icon" />
              </div>
            </a>
          </div>
        </div>

        <div id="til" className="project">
          <a href="https://shrouded-gorge-48421.herokuapp.com/" target="_blank" rel="noreferrer">
            <img className="gif" src={TILGif} alt="website gif today I learned project" />
          </a>
          <div className="project-description">
          <div id="languages">React | Javascript | CSS | HTML | ExpressJS | NodeJS | MongoDB</div>
            <br />
            <b>Today I Learned Blog: </b>
            Web-server and front-end application built to mimic the "Today I
            Learned" SubReddit. Features include adding a new entry, searching
            by tag, editing and deleting entries, and reference various pieces
            of information that the user learned. Each entry includes a title,
            subject, content, link, and tag.
            <a
            rel="noreferrer"
              target="_blank"
              href="https://github.com/meganzinka/today-I-learned"
            >
              <div id="github-icon-container">
                <img src={gitHub} id="github-icon" alt="github icon"/>
              </div>
            </a>
          </div>
        </div>

        <div id="geo-vt" className="project">
          <a href="https://geo-vt.herokuapp.com/" target="_blank" rel="noreferrer">
            <img className="gif" src={GeoVermonterGif} alt="website gif geovermonter" />
          </a>
          <div className="project-description">
          <div id="languages">React | Javascript | CSS | HTML | ExpressJS | NodeJS | MongoDB</div>
            <br />
            <b>Geo-Vermonter: </b>
            Web-server and front-end game application developed to drop the
            player at a random location within Vermont and require the player to
            guess which county they are in using minimal moves. The user can
            move north, east, south, west, return to the original location,
            guess the county, and receive a message about the accuracy of the
            guess.
            <a
            rel="noreferrer"
              target="_blank"
              href="https://github.com/meganzinka/geo-vermonter-Megan"
            >
              <div id="github-icon-container">
                <img src={gitHub} id="github-icon" alt="github icon" />
              </div>
            </a>
          </div>
        </div>
        <div id="yelp" className="project">
          <a href="https://yelpington-mz.herokuapp.com/" target="_blank" rel="noreferrer">
            <img className="gif" src={YelpGif} alt="website gif Yelpington" />
          </a>
          <div className="project-description">
          <div id="languages">React | Javascript | CSS | HTML | React Leaflet | ExpressJS | NodeJS</div>
            <br />
            <b>Yelpington: </b>
            Yelp-like app created to enable users to view and learn about
            restaurants in Provincetown, MA. Features include zooming into a
            restaurant's location upon choosing a restaurant, viewing core info
            about the business, and leaving and viewing comments. All features
            are hand-styled.

            <a
              target="_blank"
              href="https://github.com/meganzinka/yelpington-meganzinka"
              rel="noreferrer"
            >
              <div id="github-icon-container">
                <img src={gitHub} id="github-icon" alt= "github icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
