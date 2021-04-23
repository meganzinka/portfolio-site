import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import headshot from '../images/headshot.png';
import "./../style/SideBar.css";
import bulbIcon from "./../images/bulb.png"
import projectsIcon from "./../images/projects.png"
import resumeIcon from "./../images/resumeIcon.png"

const SideBar = () => {
	const history = useHistory();

	function changePage(event) {
		console.log('in change page function');
		console.log(event.target);
		history.push(event.target.value);
	}

	return (
		<div id="sidebar">
			<Link to ="/">
			<div id ="photo-tile" className="sidebar-item-container">
				<img id="headshot" src={headshot} />
			</div>
			</Link>

			<Link id="link" to="/about">
				<div className="sidebar-item-container">
					About Me
					<img className = "sidebar-icon" src ={bulbIcon} />
				</div>
			</Link>

			<Link id="link" to="/resume">
				<div className="sidebar-item-container">
					Resume
					<img className = "sidebar-icon" src ={resumeIcon} />
				</div>
			</Link>

			<Link id="link" to="/projects">
				<div id = "bottom-tile" className="sidebar-item-container">
					Projects
					<img className = "sidebar-icon" src ={projectsIcon} />
				</div>
			</Link>
		</div>
	);
};

export default SideBar;
