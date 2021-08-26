import React from "react";
import threeCircles from "../images/yellowcircles.png";
import logo from "../images/logo.png";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";
import gitHub from "../images/github.png";

const About = () => {
  return (
    <div>
      <div id="logo-container">
        <img className="logo" src={logo} />
      </div>

      <div className="main">
        <div id="about-me">
          <h3>ABOUT ME</h3>
          I’ve always loved math. As a Math for America/Noyce fellow, I spent the past six years trying to show students in Boston Public Schools how cool and empowering it can be, but now I’m so excited to be in the tech field! When I was teaching, I spent my nights learning how to code, but this year I took the plunge and completed an intensive software development bootcamp. I find my background in mathematics and statistics not only to be incredibly useful in problem solving, I am revelling in the opportunity to think critically, logically, and mathematically in new and exciting ways. As a teacher, I constantly thought about how to make math content accessible - minimizing clicks and steps to getting to the core of the lesson - and I have found the design instincts I developed in my teaching career to be tremendously useful as I think about user experience and interface in web development. The more I learn, the more I find new interests and passions, like sleek design, intuitive systems, and efficiency.
         <br></br>
         <br></br>
 
         After completing the bootcamp, I spent a month in Brazil on a film crew as a gaffer (the person who does lighting). The documentary features women who have transformed their lives, families and communities through entrepreneurship, and being a part of the crew was one of the most incredible experiences of my life. Now that I'm back, I'm excited to enter the tech field and continue learning, growing, and creating!
       </div>



        <a target="_blank" href="https://github.com/meganzinka">
          <img src={gitHub} id="about-github-icon" />
        </a>

        <div id="contact-info">
          <img className="three-circles" src={threeCircles} />

          <div id="left-side">
            <a href="mailto:meganzinka@gmail.com" target="blank">
              <img className="footer-icon" src={email} />
            </a>
            meganzinka@gmail.com
          </div>

          <div id="right-side">
            <a href="https://linkedin.com/in/meganzinka" target="blank">
              <img className="footer-icon" src={linkedin} />
            </a>
            linkedin.com/in/meganzinka
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
