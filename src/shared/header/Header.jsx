import React, { useState } from "react";
import logo from "../../assets/svg/kadet.svg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [closed, setClosed] = useState(true);

  return (
    <div id="header">
      <div className="header_wrapper">
        <div className="logo_container">
          <a href="https://kadet.dev">
            <img src={logo} alt="kadet logo" />
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

      {closed ? (
        <nav>
          <div className="mobile_menu_container">
            <ul>
              <li>
                <Link to="/" onClick={this.toggleMenu.bind(this)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" onClick={this.toggleMenu.bind(this)}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="/resume" onClick={this.toggleMenu.bind(this)}>
                  Résumé
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={this.toggleMenu.bind(this)}>
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
