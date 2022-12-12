import React, { useState } from "react";
import "./Header.css";
import { Link } from "gatsby";

import Logo from "../../assets/svg/kadet.svg";

const Header = () => {
  const [closed, setClosed] = useState(true);

  return (
    <div id="header">
      <div className="header_wrapper">
        <div className="logo_container">
          <a href="/">
            <img src={Logo} alt="kadet logo" />
          </a>
        </div>

        <div className="menu_btn_wrapper">
          <button
            className={closed ? "menu_btn" : "menu_btn menu_btn_open"}
            onClick={() => setClosed(!closed)}
          >
            <div className="menu_btn_line"></div>
            <div className="menu_btn_line"></div>
          </button>
        </div>
      </div>

      {!closed ? (
        <nav>
          <div className="mobile_menu_container">
            <ul>
              <li>
                <Link to="/" onClick={() => setClosed(true)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" onClick={() => setClosed(true)}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setClosed(true)}>
                  Articles
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/collinsenebeli/"
                  onClick={() => setClosed(true)}
                >
                  LinkedIn
                </a>
              </li>
            </ul>

            <div className="social_box">
              <h3>Connect With Me</h3>
              <div className="social_icons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/kadetXx"
                  onClick={() => setClosed(true)}
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/kadetXx"
                  onClick={() => setClosed(true)}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:hello@kade.dev"
                  onClick={() => setClosed(true)}
                >
                  <i className="fas fa-at"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
