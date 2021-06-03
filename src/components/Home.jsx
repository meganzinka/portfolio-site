import React from 'react';
import computer from './../images/Computersmall.png';
import { useHistory } from 'react-router-dom';
import './../style/Home.css';

const Home = (props) => {
	const history = useHistory();

	function enterSite(event) {
		props.setShowSideBar(true)
		if (window.location.pathname === '/') {
			history.push('/about');
		} else history.push(window.location.pathname);
	}
	return (
		<div id="home-page">
			<div id="comp-wrapper" onClick={enterSite}>
			<img src={computer} onClick={enterSite} />
			<div className="wrapper" onClick={enterSite}>
				<div id="typing-demo" onClick={enterSite}>Megan Zinka</div>
			</div>
			<div className="wrapper" onClick={enterSite}>
				<div id="dev-title" onClick={enterSite}>Full Stack Developer</div>
			</div>
			<div className = "wrapper">
			<div id="tech">Javascript | React | CSS | Mongo DB | Web API </div>

			</div>
			</div>
		</div>
	);
};

export default Home;
