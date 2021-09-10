import "./style/App.css";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { useState } from "react";
import computer from "./images/computer2ON.png";
import "./style/Home.css";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div id="app-wrapper">
      <section id ="section-one" className="snap-child">
        <Home/>
      </section>
      <section id ="section-two" className="snap-child">
      <Projects/>
      </section>
      <section id ="section-three" className="snap-child">
      <Resume/>
      </section>
    </div>
  );
}

export default App;
