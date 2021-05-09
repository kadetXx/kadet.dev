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
          <a href="https://kadet.dev">
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
                <Link to="/resume" onClick={() => setClosed(true)}>
                  Résumé
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setClosed(true)}>
                  Contact
                </Link>
              </li>
            </ul>

            <div className="social_box">
              <h3>Connect With Me</h3>
              <div className="social_icons">
                <a href="https://github.com/kadetXx">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/kadetXx">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/collins-enebeli-online/">
                  <i className="fab fa-linkedin"></i>
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
