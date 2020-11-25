import React, { Component } from 'react'
import './Form.css'
import Success from '../../contact/Success'

export class Form extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      loading: false
    };
  }

  render() {

    const { status, loading } = this.state;

    return (
      <div>
        <form name="contact" method="post" action="https://formspree.io/xqkyjgjr" onSubmit={this.submitForm} >
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
              <input required type="email" name="email"  />
            </label>
          </div>

          <div className="form_section">
            <label>
              <span>Your Message*</span>
              <textarea required name="message" rows="10"  minLength="30" ></textarea>
            </label>
          </div>

          <div className="form_section">
            <button type='submit' > { !loading ? "Shoot" : <i class="fas fa-ellipsis-h"></i> } </button>
          </div>
        </form>

        {status === "SUCCESS" ? <Success display={this.setStatus.bind(this)} /> : ''}
        {status === "ERROR" && <p style={{textAlign: 'center', color: 'red'}}> <b>Ooops! There was an error.</b></p>}

      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault();

    this.setState({loading: true});

    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS", loading: false });
      } else {
        this.setState({ status: "ERROR", loading: false });
      }
    };
    xhr.send(data);
  }

  setStatus() {
    this.setState({status: ""});
  }

}

export default Form
