import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

const Resume = () => {
  return (
    <div>
      <div id ="resume-container">
			<iframe title="resume" src= "./MeganZinkaResume.pdf" zoom = "70%" type="application/pdf" width="100%" height="800px"/>
		</div>
      <div id="resume-container-mobile">
        <PDFViewer
          id="resume-pdf"

          document={{
            url: "./MeganZinkaResume.pdf",
          }}
        />
      </div>
    </div>
  );
};

export default Resume;
