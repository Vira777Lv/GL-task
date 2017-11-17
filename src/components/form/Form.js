import React, { Component } from 'react';
import styles from './Form.css';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`name: ${this.state.name}`);
    console.log(`email: ${this.state.email}`);
    console.log(`message: ${this.state.message}`);

    const { name, email, message } = this.state;
    window.name = name;
    window.email = email;
    window.message = message;

    window.localStorage.setItem('name', name);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('message', message);

    this.handleClearForm(event);
  }
  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleName}
        />
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <textarea
          rows="3"
          placeholder="Send a message"
          value={this.state.message}
          onChange={this.handleMessage}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}
