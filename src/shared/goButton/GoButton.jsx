import React from "react";
import './GoButton.css'
import { Link } from "gatsby";

const GoButton = ({ prev, next }) => {
  return (
    <div className="go_button_container">
      <Link to={prev.url}>
        <button>
          <span className="material-icons">arrow_left</span> {prev.text}
        </button>
      </Link>
      <Link to={next.url}>
        <button>
          {next.text} <span className="material-icons">arrow_right</span>
        </button>
      </Link>
    </div>
  );
};

export default GoButton;
