import React from "react";
import { Link } from "gatsby";

import avi from "../../assets/images/kadet_big.png";
import navLine from "../../assets/svg/menu-line.svg";
import logo from "../../assets/images/smallavi.png";
import arrow from "../../assets/svg/arrow.svg";

const Bio = ({ active }) => {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>
            Hello, I'm <br /> Collins Enebeli.
          </h1>
          <div className="avi">
            <img src={avi} alt="avatar" />
          </div>
        </div>

        <div className="description">
          <p>
            <span>
              I'm a <span className="highlight">frontend developer</span>. I
              create interactive{" "}
              <span className="highlight two">experiences</span> for amazing
              people using <span className="highlight">technology</span>. I
              enjoy tweaking <span className="highlight two">stylesheets</span>{" "}
              and crafting <span className="highlight">layouts</span> to achieve{" "}
              <span className="highlight two">desired</span> aesthetics.
            </span>
          </p>
        </div>

        <div className="go_button_container">
          <Link to="/work" className="explore">
            <button className="explore">
              Explore <span class="material-icons">arrow_right</span>
            </button>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li className={active === "work" ? "active_menu" : ""}>
            <small>
              00
              <Link to="/">
                <img src={navLine} alt="menu bullet" /> WORK
              </Link>
            </small>
          </li>

          <li className={active === "resume" ? "active_menu" : ""}>
            <small>
              01
              <Link to="/resume">
                <img src={navLine} alt="menu bullet" /> RESUME
              </Link>
            </small>
          </li>

          <li className={active === 'contact' ? "active_menu" : ""}>
            <small>
              02{" "}
              <Link to="/contact">
                <img src={navLine} alt="menu bullet" /> CONTACT
              </Link>
            </small>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <img src={logo} alt="" />
        <div className="social">
          <a
            href="https://github.com/kadetXx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> Github
            <img src={arrow} alt="pointer" />
          </a>

          <a
            href="https://twitter.com/kadetXx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i> Twitter{" "}
            <img src={arrow} alt="pointer" />
          </a>
        </div>

        <div className="credits">
          <p>
            Inspired by
            <a
              href="https://sarahdayan.dev/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Sarah Dayan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
