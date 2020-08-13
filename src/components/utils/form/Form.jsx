import React, { Component } from 'react'
import './Form.css'
import Success from '../../contact/Success'

export class Form extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {

    const { status } = this.state;

    return (
      <div>
        <form name="contact" method="post" action="https://formspree.io/xqkyjgjr" onSubmit={this.submitForm} >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form_section">
            <label>
              <span>Your Name*</span>
              <input type="text" name="name" placeholder='Enter your name' required />
            </label>
          </div>

          <div className="form_section">
            <label>
              <span>Your Email*</span>
              <input required type="email" name="email" placeholder='Enter your email' />
            </label>
          </div>

          <div className="form_section">
            <label>
              <span>Your Message*</span>
              <textarea required name="message" placeholder='Hi, we would like you to be a part of our project, can we schedule...' rows="10"  ></textarea>
            </label>
          </div>

          <div className="form_section">
            <button type='submit' >Let's Go</button>
          </div>
        </form>

        {status === "SUCCESS" ? <Success display={this.setStatus.bind(this)} /> : ''}
        {status === "ERROR" && <p style={{textAlign: 'center'}}>Ooops! There was an error.</p>}

      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  setStatus() {
    this.setState({status: ""});
  }

}

export default Form
