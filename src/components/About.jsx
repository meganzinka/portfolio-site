import React from 'react';
import threeCircles from '../images/yellowcircles.png';
import logo from '../images/logo.png';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import gitHub from '../images/github.png';

const About = () => {
	return (
		<div>
			<div id="logo-container">
				<img className="logo" src={logo} />
			</div>

			<div className="main">
				<div id="about-me">
					<h3>ABOUT ME</h3>
					After six years as an Advanced Algebra and AP Statistics teacher in urban education, I am excited to
					transition into software engineering! After self-directed learning for months, I recently completed an
					intensive software development bootcamp program where I could fully immerse myself in the field. I found
					my background in mathematics and statistics not only to be incredibly useful in problem solving, I revelled in the opportunity to think
					critically, logically, and mathematically in new ways. As a teacher, I constantly thought about how
					to make math content accessbile - minimizing clicks and steps to getting to the core of the lesson -
					and I have found the design instincts I developed in my teaching career to be tremendously useful as
					I think about user experience and interface in software development. The more I learn, the more I find new interests and passions, like sleek design and building intuitive
					and efficient systems. I am excited to continue grow in the field!
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

export default About;
