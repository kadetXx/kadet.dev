import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../utils/form/Form";
import "./Contact.css";

export class Contact extends Component {
  componentDidMount() {
    this.props.activeMenu(2);
  }

  render() {
    return (
      <div className='contact'>
        <Form />
        <div className='go_button_container'>
          <Link to='/work'>
            <button>
              <span class='material-icons'>arrow_left</span> Work
            </button>
          </Link>
          <Link to='/resume'>
            <button>
              Resume <span class='material-icons'>arrow_right</span>{" "}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Contact;
