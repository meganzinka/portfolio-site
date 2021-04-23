import "./style/App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div id="app-wrapper">
      <div>
        <div id="app-container">
          <div id="sidebar-container">
            <SideBar />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <div id="main-container">
              <Route exact path="/about" component={About} />
              <Route exact path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
            </div>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
