import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import headshot from '../images/headshot.png';
import "./../style/SideBar.css";
import bulbIcon from "./../images/bulb.png"
import projectsIcon from "./../images/projects.png"
import resumeIcon from "./../images/resumeIcon.png"

const SideBar = (props) => {
	const history = useHistory();

	function hideSideBar (event) { 
		props.setShowSideBar(false)
	}

	function changePage(event) {
		history.push(event.target.value);
	}

	if (props.showSideBar || window.location.pathname !== "/") {
	return (
		<div id="sidebar">
			<Link to ="/">
			<div id ="photo-tile" className="sidebar-item-container" onClick = {hideSideBar}>
				<img id="headshot" src={headshot} />
			</div>
			</Link>

			<Link id="link" to="/about">
				<div className="sidebar-item-container">
					About Me
					<br></br>

					<img className = "sidebar-icon" src ={bulbIcon} />
				</div>
			</Link>

			<Link id="link" to="/resume">
				<div className="sidebar-item-container">
					Resume
					<br></br>

					<img className = "sidebar-icon" src ={resumeIcon} />
				</div>
			</Link>

			<Link id="link" to="/projects">
				<div id = "bottom-tile" className="sidebar-item-container">
					Projects
					<br></br>

					<img className = "sidebar-icon" src ={projectsIcon} />
				</div>
			</Link>
		</div>
	)} else return null; 
};

export default SideBar;
