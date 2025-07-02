import React, { Component } from 'react';
import '../../css/Contact.css';
import emailjs from 'emailjs-com';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      email: '',
      message: '',
      feedback: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject, email, message } = this.state;

    if (!name || !subject || !email || !message) {
      this.setState({ feedback: 'Please fill in all fields.' });
      return;
    }

    const templateParams = {
      sender_name: name,
      subject: subject,
      reply_to: email,
      message: message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        'service_hqbg0og', // Replace with your EmailJS service ID
        'template_p9zyac5', // Replace with your EmailJS template ID
        templateParams,
        'DrpwDUdK9JLWPFiDh' // Replace with your EmailJS user ID (public key)
      )
      .then(
        (response) => {
          this.setState({
            feedback: 'Message sent successfully!',
            name: '',
            subject: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          this.setState({ feedback: 'Failed to send message. Please try again later.' });
        }
      );
  };

  render() {
    const { name, subject, email, message, feedback } = this.state;
    return (
      <div className="contact-container">
        <h1 className="contact-header">Contact Us</h1>
        <div className="flex">
          <div className="panel1">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group-c">
                <input
                  name="name"
                  placeholder="Name : "
                  type="text"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group-c">
                <input
                  name="subject"
                  placeholder="Subject : "
                  type="text"
                  value={subject}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group-c">
                <input
                  name="email"
                  placeholder="Email : "
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group-c">
                <textarea
                  name="message"
                  placeholder="Text hear..!"
                  value={message}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="buttoncontact">
                <button type="submit" className="contact-button">
                  Submit
                </button>
              </div>
            </form>
            {feedback && <p className="feedback-message">{feedback}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
