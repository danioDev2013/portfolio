import React, { Component } from "react";
import "./style.css";
import emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
      
  handleSubmit = (e) => {

    e.preventDefault();
    const { name, email, message } = this.state

    let templateParams = {
      name: name,
      email: email,
      message: message,
    }

    emailjs.send(
      'service_gi5a95a',
      'template_lw77dfo',
      templateParams,
      'user_WREPr2wxcfWjBNM0uTvxy'
    )
    this.resetForm()
  };
  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  onClick = e => {
    e.preventDefault();
    window.location.replace("/");
 
  }
 

 

  render() {
  return (
          <div className="row">
            <h2 className="contactT text-center">Contact Me</h2>
            <div className="col-sm-1 random"></div>
            <div className="col-sm-5">
              <form action="#" className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="mb-3">
                      <label for="name" className="form-label">Name:</label>
                      <input
                       type="text"
                       name="name"
                       id="name"
                       value={this.state.name}
                       className="text-primary"
                       onChange={this.handleChange.bind(this, 'name')}
                       placeholder="Jane Doe" />
                  </div>
                  <div className="mb-3">
                      <label for="email" className="form-label">Email address:</label>
                      <input 
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      className="text-primary"
                      onChange={this.handleChange.bind(this, 'email')}
                      placeholder="janeDoe@gmail.com"/>
                  </div>
                  <div className="mb-3">
                      <label for="message" className="form-label">Message:</label>
                      <textarea 
                      type="textarea"
                      name="message"
                      id="message"
                      className="text-primary"
                      value={this.state.message}
                      onChange={this.handleChange.bind(this, 'message')}
                      placeholder="Enter a message..."></textarea>
                  </div>

                  <div className="mb-3">
                    <button 
                    variant="primary" 
                    type="submit" 
                    id="send"
                    className="p-2">Submit</button>
                    <button onClick={this.onClick} className="p-2 m-2" id="cancel">Back</button>
                  </div>
                  
              </form>
            </div>
              
              <div className="col-sm-5">
                  <ul className="contact-list">
                      <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Marysville, WA</span></i></li>
                      <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email" id="email2">danio.2013@outlook.com</a></span></i></li>
                  </ul>
                  <hr></hr>
                  <ul className="social-media-list">
                      <li><a className="contact-icon" href="https://github.com/dorley1993" target="_blank"><i className="icons fab fa-github-square fa-2x"></i></a></li>
                      <li><a className="contact-icon" href="https://www.linkedin.com/in/danielle-orley/" target="_blank"><i className="icons fab fa-linkedin fa-2x"></i></a></li>
                      <li><a className="contact-icon" href="https://www.instagram.com/rainbowdevmonster/ " target="_blank"><i className="icons fab fa-instagram fa-2x"></i></a></li>
                      <li><a className="contact-icon" href="/"><i className="icons fas fa-home fa-2x"></i></a></li>
                  </ul>
                  <hr></hr>
              </div>
          </div>
    );
  }
};

export default Contact;