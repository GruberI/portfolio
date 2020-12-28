import React, { Component } from 'react';
import Field from './Field';
import Button from './Button';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div id={this.props.id} className="contact-container">
      <h1>Contact</h1>

      <div className="contact-link-div">
        <button className="contact-link-buttons"><a href="https://www.linkedin.com/in/issagruber/" target="_blank" rel="noreferrer">LinkedIn</a></button>
        <button className="contact-link-buttons github-button"><a href="https://github.com/GruberI" target="_blank" rel="noreferrer">Github</a></button>
      </div>
  
      <div className="form-container">
            {/* Name field */}
            <Field
            label="Name"
            placeholder="Name"
            onChange={(event) => this.updateField('name', event.target.value)}
            value={this.state.name}
            />
            {/* Email field */}
            <Field
            label="Email"
            placeholder="Email"
            onChange={(event) => this.updateField('email', event.target.value)}
            value={this.state.email}
            />
            {/* Message textarea */}
            <Field
            label="Message"
            placeholder="Message"
            onChange={(event) => this.updateField('message', event.target.value)}
            /* This should be written like 'textarea' */
            textarea={true}
            value={this.state.message}
            />
            {/* Submit button */}
            <Button
            email="isnikgru@gmail.com"
            formValues={this.state}
            />
        </div>
      </div>
    );
  }
}

export default Form;