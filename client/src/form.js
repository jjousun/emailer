import React, { Component } from 'react';
// import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      subject: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      email: e.target.value,
      subject: e.target.value,
      message: e.target.value,
    });
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success) {
        this.setState({formSent: true})
      }
      else this.setState({formSent: false})
    })
    .catch((error) => {
      console.error(error);
    });
    this.setState({
      email: '',
      subject: '',
      message: ''
    });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleSubjectChange(e) {
    this.setState({ subject: e.target.value });
  }
  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  render () {
    return (
      <div className="form">
        <div className="email-input-container">
          <input
            onChange={this.handleEmailChange}
            name="email"
            className="email-input-form"
            value={this.state.email}
            placeholder="Enter recipient email"
          />
        </div>
        <div className="subject-input-container">
          <input
            onChange={this.handleSubjectChange}
            name="subject"
            className="subject-input-form"
            value={this.state.subject}
            placeholder="Enter subject line"
          />
        </div>
        <div className="message-input-container">
          <textarea
            onChange={this.handleMessageChange}
            name="message"
            className="message-input-form"
            value={this.state.message}
            placeholder="Type a message"
          />
        </div>
        <div className="submit-button-container">
          <button
            className="submit-button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Yes, send it!
          </button>
        </div>
      </div>
    )
  }
}
export default Form;
