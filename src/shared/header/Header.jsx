import React from "react";
import "./Header.css";

import Logo from "../../assets/svg/kadet.svg";

const Header = () => {
  return (
    <div id="header">
      <div className="header_wrapper">
        <div className="logo_container">
          <a href="/">
            <img src={Logo} alt="kadet logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
