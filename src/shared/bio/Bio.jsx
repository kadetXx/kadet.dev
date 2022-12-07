import React from "react";
import "./Bio.css";
import "./Bio.mobile.css";
import { Link } from "gatsby";

import avi from "../../assets/images/kadet_big.png";
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
              I'm a <span className="highlight">software engineer</span>. I
              create <span className="highlight">interactive </span> web
              experiences using{" "}
              <span className="highlight">frontend technology</span>. I am
              interested in <span className="highlight">user experience</span>,
              accessibility, <span className="highlight">design systems</span>,
              gaming, <span className="highlight">web3</span> and{" "}
              <span className="highlight">web animations.</span>{" "}
            </span>
          </p>
        </div>

        <div className="go_button_container">
          <Link to="/work" className="explore">
            <button className="explore">
              Explore <span className="material-icons">arrow_right</span>
            </button>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li className={active === "work" ? "active_menu" : ""}>
            <small>
              <span>00</span>
              <Link to="/">
                <span className="menu_bullet"></span> WORK
              </Link>
            </small>
          </li>

          <li className={active === "blog" ? "active_menu" : ""}>
            <small>
              <span>01</span>
              <Link to="/blog">
                <span className="menu_bullet"></span> ARTICLES
              </Link>
            </small>
          </li>

          <li className={active === "resume" ? "active_menu" : ""}>
            <small>
              <span>02</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/collinsenebeli/"
              >
                <span className="menu_bullet"></span> LINKED IN
              </a>
            </small>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <img src={avi} alt="" />
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

          <a
            href="mailto:hello@kadet.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-at"></i> Email{" "}
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
