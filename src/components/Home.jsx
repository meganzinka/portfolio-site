import React from "react";
import lightComputer from "./../images/computer2ON.png";
import darkComputer from "./../images/darkComp.png";
import "./../style/Home.css";
import { useState, useEffect } from "react";

const Home = (props) => {
  const [rightWrapper, setRightWrapper] = useState("about-me-wrapper");
  const [leftWrapper, setLeftWrapper] = useState("comp-wrapper");
  const [tile, setTile] = useState("about-me-tile");
  const [text, setText] = useState("about-me-text");
  const [checked, setChecked] = useState("true");
  const [computer, setComputer] = useState(lightComputer);
  const [menu, setMenu] = useState(false);
  const [menuItem, setMenuItem] = useState("button");

  function changeChecked(event) {
    if (event.target.checked) {
      setRightWrapper("about-me-wrapper");
      setLeftWrapper("comp-wrapper");
      setTile("about-me-tile");
      setText("about-me-text");
      setComputer(lightComputer);
    } else {
      setRightWrapper("about-me-dark");
      setLeftWrapper("comp-dark");
      setTile("tile-dark");
      setText("text-dark");
      setComputer(darkComputer);
    }
  }

  function toggleMenu(event) {
    setMenu(!menu);
  }

  useEffect(() => {
    if (menu) {
      setMenuItem("menu-item");
    } else setMenuItem("hide-menu");
  }, [menu]);

  function changePage(event) {
    let currentPage = props.page 
    if (event.target.id==="down" && props.page !== 3) {
      currentPage++
      props.setPage(currentPage)
    } else if (event.target.id ==="up" && props.page !== 1) {
      currentPage--
      props.setPage(currentPage)
    } else if (event.target.id === "three") {
      props.setPage(3)
    } else if (event.target.id === "two") {
      props.setPage(2)
    }
  }
    
  return (
    <div>
      <div className="menu" onClick={toggleMenu}></div>
      <div id="button-container">
        <a href="mailto:meganzinka@gmail.com" target="blank" rel="noreferrer">
          <div className={menuItem} id="email-menu-item"></div>
        </a>

        <a
          href="https://linkedin.com/in/meganzinka"
          rel="noreferrer"
          target="blank"
        >
          <div className={menuItem} id="linked-in-button"></div>
        </a>

        <a href="https://github.com/meganzinka" target="blank" rel="noreferrer">
          <div className={menuItem} id="github-button"></div>
        </a>
          <div id="up" className={menuItem} onClick={changePage}></div>
          <div id="down" className={menuItem} onClick={changePage}></div>
      </div>
      <div id="home-page">
        <div id={leftWrapper}>
          <img src={computer} alt="computer" />

          <div id="switch-wrapper">
            <input
              className="l"
              type="checkbox"
              defaultChecked={checked}
              onChange={changeChecked}
            />
          </div>
        </div>
        <div id={rightWrapper}>
          <div className={tile}>
            <div className={text}>
              Hi! I'm Megan. My background is in mathematics, statistics, education, and web development. 
            </div>
          </div>
            <div
            id = "three"
              className={tile}
              onClick = {changePage}
            >
              <div className={text}>
                In the past year or so, I've gained more experience in analytics, data artchitecture, and a client's launch of a new customer data platform. 
              </div>
            </div>
            <div
              id = "two"
              className={tile}
              onClick = {changePage}
            >
              <div className={text}>
                I love learning new things and facing challenges I haven't faced before. Scroll down to see more! 
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
