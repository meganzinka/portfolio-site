import React from 'react';
import { useState } from 'react';
import threeCircles from '../images/yellowcircles.png';
import logo from '../images/logo.png';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import gitHub from '../images/github.png';

// const Projects = () => {
// 	const [ project, setProject ] = useState('Ad-Magic');
// 	let projectArray = [ 'Ad-Magic', 'Today I Learned', 'Yelpington', 'Geo-Vermonter' ];

// 	function changeProject(event) {
// 		let index = projectArray.findIndex((currentProject) => currentProject === project);
// 		console.log(index);
// 		console.log(event.target.id);
// 		if (event.target.id === 'previous') {
// 			setProject(projectArray[index - 1]);
// 		} else if (event.target.id === 'next') {
// 			setProject(projectArray[index + 1]);
// 		}
// 	}
// 	return (
// 		<div>
// 			<div id="logo-container">
// 				<img className="logo" src={logo} />
// 			</div>

// 			<div className="main-projects">
// 				<div id="projects-container">
// 					<div id="projects-bar">
// 						<div id="previous" onClick={changeProject}>
// 							Previous
// 						</div>PROJECTS<div id="next" onClick={changeProject}>
// 							Next
// 						</div>
// 					</div>
// 					{project === 'Today I Learned' ? (
// 						<div>
// 							<a href="https://shrouded-gorge-48421.herokuapp.com/" target="blank">
// 								Today I Learned: Journaling App
// 							</a>
// 							<br />
// 							<br />
// 							<iframe
// 								width="100%"
// 								height="400px"
// 								src=""
// 								title="YouTube video player"
// 								frameborder="0"
// 								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 								allowfullscreen="true"
// 							/>
// 							<br />
// 							<br />
// 							<div id="project-description">
// 								<b>Team:</b> Megan Zinka
// 								<br />
// 								<b>Sprint:</b> 1 week
// 								<br />
// 								<b>Description:</b> Built a web-server and front-end application that can be used to
// 								record, search, edit, and reference answers for various tasks. Each entry includes an
// 								option to add a tag to make it easier to search for tags of a specific category.
// 								<b>Technologies used:</b> React, Javascript, CSS, HTML, ExpressJS, NodeJS, MongoDB
// 								<a target="_blank" href="https://github.com/meganzinka/today-I-learned">
//                   <div id="github-icon-container">
// 									<img src={gitHub} id="github-icon" />
//                   </div>
// 								</a>
// 							</div>
// 						</div>
// 					) : null}
// 					{project === 'Yelpington' ? (
// 						<div>
// 							<a href="" target="blank">
// 								Yelpington: Provincetown Restaurant Review App
// 							</a>
// 							<br />
// 							<br />
// 							<iframe
// 								width="100%"
// 								height="400px"
// 								src=""
// 								title="YouTube video player"
// 								frameborder="0"
// 								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 								allowfullscreen="true"
// 							/>
// 							<br />
// 							<br />
// 							<div id="project-description">
// 								<b>Team:</b> Megan Zinka
// 								<br />
// 								<b>Sprint:</b> 1 week
// 								<br />
// 								<b>Description:</b> Created a Yelp-like app which allows users to view and learn about
// 								restaurants in Provincetown.
// 								<b>Technologies used:</b> React, Javascript, CSS, HTML, React Leaflet, ExpressJS, NodeJS
// 								<a target="_blank" href="https://github.com/meganzinka/yelpington-meganzinka">
// 									<img src={gitHub} id="github-icon" />
// 								</a>
// 							</div>
// 						</div>
// 					) : null}
// 					{project === 'Ad-Magic' ? (
// 						<div>
// 							{' '}
// 							<a href="https://ad-magic.herokuapp.com" target="blank">
// 								AdMagic/BCA Capstone Project: Interactive Sales Dashboard
// 							</a>
// 							<br />
// 							<br />
// 							<iframe
// 								width="100%"
// 								height="400px"
// 								src="https://www.youtube.com/embed/R5kDFPjVVMk"
// 								title="YouTube video player"
// 								frameborder="0"
// 								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 								allowfullscreen="true"
// 							/>
// 							<br />
// 							<br />
// 							<div id="project-description">
// 								<b>Team:</b> Megan Zinka, Abdelrahman Hussein, Tristan Nelson
// 								<br />
// 								<b>Sprint:</b> 3 weeks
// 								<br />
// 								<b>Description:</b> Created Executive Sales Dashboard created from scratch which hosts a variety of ways to filter sales (date, client, item). All tools are responsive to real-time database updates and user input. My principal role in the project was to design and create the filtering tool from
// 								back to front end, set up database queries, and create hand-rolled styling.
// 								<a target="_blank" href="https://github.com/meganzinka/ad-magic">
//                 <div id="github-icon-container">

// 									<img src={gitHub} id="github-icon" />
//                   </div>
// 								</a>
// 							</div>
// 						</div>
// 					) : null}
// 					<br />
// 					<br />
// 					More Projects Coming soon!
// 					<br />
// 				</div>

// 				<div id="contact-info">
// 					<img className="three-circles" src={threeCircles} />

// 					<div id="left-side">
// 						<a href="mailto:meganzinka@gmail.com" target="blank">
// 							<img className="footer-icon" src={email} />
// 						</a>
// 						<div>meganzinka@gmail.com</div>
// 					</div>

// 					<div id="right-side">
// 						<a href="https://linkedin.com/in/meganzinka" target="blank">
// 							<img className="footer-icon" src={linkedin} />
// 						</a>
// 						<div>linkedin.com/in/meganzinka</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

const Projects = () => {


return (<div id = "projects-container">
<div id="ad-magic"></div>
<div id="til"></div>

<div id="geo-vt"></div>
<div id="yelp"></div>



</div>) 

}

export default Projects;
