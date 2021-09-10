import React from "react";
import lightComputer from "./../images/computer2ON.png";
import darkComputer from "./../images/darkComp.png";
import gitHub from "./../images/github.png"
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
  const [button, setButton] = useState("button");
  const [page, setPage] = useState(1);
  const [link, setLink] = useState();

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

  function changePage(event) {
    if (event.target.value === "down" && page !== 3) {
      setPage((page += 1));
    } else if (event.target.value === "up" && page !== 1) {
      setPage((page -= 1));
    }
    console.log(page);
  }

  useEffect(() => {
    if (menu) {
      setButton("button");
    } else setButton("hide-menu");
  }, [menu]);

  useEffect(() => {
    if (page === 1) {
      setLink("#section-one");
    } else if (page === 2) {
      setLink("#section-two");
    } else if (page === 3) {
      setLink("#section-three");
    }
  }, [page]);

  return (
    <div>
      {/* <div className="menu" onClick={toggleMenu}></div> */}
      {/* <div id="button-container">
        <a href="mailto:meganzinka@gmail.com" target="blank" rel="noreferrer" >
          <div className={button}><img src= "./../images/email.png"></img></div>
        </a>

        <a href="https://linkedin.com/in/meganzinka" rel="noreferrer" target="blank">
          <div className={button}></div>
        </a>

        <a href="https://github.com/meganzinka" target="blank" rel="noreferrer">
          <div className={button}><img className = "fill" src={"./../images/github.png"}/></div>
        </a>

        <a href={link}>
          <div id="up" className={button} onClick={changePage}></div>
        </a>
        <a href={link}>
          <div id="down" className={button} onClick={changePage}></div>
        </a>
      </div> */}
      <div id="home-page">
        <div id={leftWrapper}>
          <img src={computer} />

          <div id="switch-wrapper">
            <input
              class="l"
              type="checkbox"
              defaultChecked={checked}
              onChange={changeChecked}
            />
          </div>
        </div>
        <div id={rightWrapper}>
          <div className={tile}>
            <div className={text}>
              Hi! I'm Megan. I love reading, meditating, my two sweet dogs &
              coding!
            </div>
          </div>
          <a href="#section-three">
            <div
              className={tile}
              onClick={() => {
                setPage(3);
              }}
            >
              <div className={text}>
                I'm full-stack web developer with a background in mathematics
                and statistics.
              </div>
            </div>
          </a>
          <a href="#section-two">
            <div
              className={tile}
              onClick={() => {
                setPage(2);
              }}
            >
              <div className={text}>
                I'm a sucker for intuitive functionality & sleek design. Scroll
                down to learn more!
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
