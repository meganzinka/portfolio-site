import React from "react";
import resume1 from "./../images/ResumePage1.png"
import resume2 from "./../images/ResumePage2.png"
import resumePDF from "./../images/MeganZinkaResume.pdf" 
const Resume = () => {
  return (
    <div>
      <div id ="resume-container">
			<iframe title="resume" src= {resumePDF} zoom = "70%" type="application/pdf" width="100%" height="100%"/>
		</div>


      <div id="resume-container-mobile">
        <img src={resume1} />
        <img src ={resume2} /> 
      </div>
    </div>
  );
};

export default Resume;
