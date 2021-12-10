import React, { useState } from "react";
import "./Form.css";
import Success from "../success/Success";

const Form = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = (ev) => {
    ev.preventDefault();

    setLoading(true);

    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setLoading(false);
        setStatus("SUCCESS");
      } else {
        setLoading(false);
        setStatus("ERROR");
      }
    };

    xhr.send(data);
  };

  return (
    <div>
      <form
        name="contact"
        method="post"
        action="https://formspree.io/xqkyjgjr"
        onSubmit={(e) => submitForm(e)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="form_section">
          <label>
            <span>Your Name*</span>
            <input type="text" name="name" required />
          </label>
        </div>

        <div className="form_section">
          <label>
            <span>Your Email*</span>
            <input required type="email" name="email" />
          </label>
        </div>

        <div className="form_section">
          <label>
            <span>Your Message*</span>
            <textarea
              required
              name="message"
              rows="10"
              minLength="30"
            ></textarea>
          </label>
        </div>

        <div className="form_section">
          <button type="submit">
            {" "}
            {!loading ? "Shoot" : <i className="fas fa-ellipsis-h"></i>}{" "}
          </button>
        </div>
      </form>

      {status === "SUCCESS" ? <Success display={setStatus} /> : ""}

      {status === "ERROR" && (
        <p style={{ textAlign: "center", color: "red" }}>
          <b>Ooops! There was an error.</b>
        </p>
      )}
    </div>
  );
};

export default Form;
