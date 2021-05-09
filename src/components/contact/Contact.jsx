import React, { Component } from "react";
import "./Contact.css";

import { Link } from "gatsby";

import Form from "../../shared/form/Form";

const Contact = () => {
  return (
    <div className="contact">
      <Form />
      <div className="go_button_container">
        <Link to="/work">
          <button>
            <span class="material-icons">arrow_left</span> Work
          </button>
        </Link>
        <Link to="/resume">
          <button>
            Resume <span class="material-icons">arrow_right</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
