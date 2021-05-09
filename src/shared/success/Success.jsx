import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <div id="success">
      <div className="error_container">
        <h1>
          <i className="fas fa-check-double"></i>
        </h1>
        <h2>Your message has been sent</h2>
        <p>
          Thanks for reaching out. Don't worry, I normally reply mails within
          24hrs.{" "}
        </p>
        <div className="go_button_container" style={{ display: "flex" }}>
          <button onClick={this.props.display.bind()}>Thanks</button>
        </div>
      </div>
    </div>
  );
};

export default Success;
