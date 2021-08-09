import React from 'react';
// import resume from './../files/MeganZinkaResume.pdf';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'
import {useState, useEffect} from "react"
import PDFViewer from "pdf-viewer-reactjs";

const Resume = () => {



	return (
		<div>
		<div id ="resume-container">
		<PDFViewer document={{
				url: "./MeganZinkaResume.pdf"
			}} />		</div>
				<div id ="resume-container-mobile">
			<PDFViewer id="resume-pdf" document={{
				url: "./MeganZinkaResume.pdf"
			}} />
			</div>
			</div>
	);
};

export default Resume;
