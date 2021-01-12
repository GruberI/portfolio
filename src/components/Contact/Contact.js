import React, { Component } from "react";
import Field from "./Field";
import Button from "./Button";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
    this.baseState = this.state;
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  // resetForm = () => {
  //   this.setState(this.baseState)
  // }

  render() {
    return (
      <div id={this.props.id} className="contact-container">
        <h1>Contact</h1>

        <div className="contact-link-div">
          <button className="contact-link-buttons">
            <div className="contact-btn-text">
              <a
                href="https://www.linkedin.com/in/issagruber/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <LinkedInIcon className="icon" />
            </div>
          </button>

          <button className="contact-link-buttons github-button">
            <div className="contact-btn-text">
              <a
                href="https://github.com/GruberI"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <GitHubIcon className="icon"/>
            </div>
          </button>
        </div>

        <div className="form-container">
          {/* Name field */}
          <Field
            label="Name"
            placeholder="Name"
            onChange={(event) => this.updateField("name", event.target.value)}
            value={this.state.name}
          />
          {/* Email field */}
          <Field
            label="Email"
            placeholder="Email"
            onChange={(event) => this.updateField("email", event.target.value)}
            value={this.state.email}
          />
          {/* Message textarea */}
          <Field
            label="Message"
            placeholder="Message"
            onChange={(event) =>
              this.updateField("message", event.target.value)
            }
            /* This should be written like 'textarea' */
            textarea={true}
            value={this.state.message}
          />
          {/* Submit button */}
          <Button email="isnikgru@gmail.com" formValues={this.state} onClick={this.baseState}/>
        </div>
      </div>
    );
  }
}

export default Form;
