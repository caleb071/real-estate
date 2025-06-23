import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './contact.css';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_vtuhzkn',
      'template_j3hxzl9',
      form.current,
      '4coR4g0QCOmvMKUIx'
    ).then(() => {
      alert('Message sent!');
    }, (error) => {
      alert('Failed to send: ' + error.text);
    });
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-links">
          <Link to="/home">
            <button>Home</button>
          </Link>

          <Link to="/properties">
            <button>Properties</button>
          </Link>

          <Link to="/about">
            <button>About</button>
          </Link>

          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>

      {/* Contact Form */}
      <div className='section1'>
      <form ref={form} onSubmit={sendEmail}>
        <h2>Send us a message</h2>
        <input type="text" name="user_name" placeholder="Your Name" required /><br></br>
         <input type="number" name="user_contact" placeholder="Your contact" required /><br></br>
        <input type="email" name="user_email" placeholder="Your Email" required /><br></br>
        <textarea name="message" placeholder="Your Message" required /><br></br>
        <button type="submit">Send</button>
      </form>
      </div>


      <div className='footer'>
          <p>© 2025 All Rights Reserved</p>
        </div>
   

    


    </div>
  );
};

export default Contact;
