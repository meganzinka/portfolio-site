import React from 'react';
import resume from './../files/MeganZinkaResume.pdf';
import {useState} from "react"

const Resume = () => {

	return (
		<div id ="resume-container">
			<embed src={resume} type="application/pdf" width="100%" height="800px"/>
		</div>
	);
};

export default Resume;
