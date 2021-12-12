import React from "react";
import "./Contact.css";

import Form from "../../shared/form/Form";
import GoButton from "../../shared/goButton/GoButton";

const Contact = () => {
  return (
    <div className="contact">
      <Form />
      <GoButton
        prev={{ url: "/work", text: "Work" }}
        next={{ url: "/resume", text: "Resume" }}
      />
    </div>
  );
};

export default Contact;
