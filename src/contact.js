import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import emailjs from '@emailjs/browser';

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar */}
        <nav className="w-full bg-white shadow py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
  
  <div className="flex justify-center text-center space-x-4">
    <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
    <Link to="/Properties" className="text-gray-700 hover:text-blue-600 font-medium">Properties</Link>
    <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
    <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
  </div>

   <div className="flex items-center gap-3">
              <Link to="/get-started" className="bg-gray-400 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-500">
                login
                </Link>
                </div>

  {/* Search Bar */}
  <form className="flex items-center border rounded-md overflow-hidden max-w-md w-full">
    <input
      type="text"
      placeholder="Search properties..."
      className="px-4 py-2 w-full outline-none"
    />
    <button
      type="submit"
      className="bg-yellow-400 text-black px-4 py-2 rounded-sm hover:bg-blue-700"
    >
      Search
    </button>
  </form>
</nav>

      {/* Body */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 p-8 font-sans">
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Send us a message</h2>
            <input type="text" name="user_name" placeholder="Your Name" required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400" />
            <input type="number" name="user_contact" placeholder="Your Contact" required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400" />
            <input type="email" name="user_email" placeholder="Your Email" required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400" />
            <textarea name="message" placeholder="Your Message" required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"></textarea>
            <button type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded-md hover:bg-blue-700 font-medium hover:bg-blue-500 font-semibold">
              Send
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-4">
            Our team is available Monday through Saturday from 7:00 AM to 8:00 PM EAT.
          </p>

          <div className="space-y-4 text-gray-700">
            <div>
              <span className="font-medium">Location:</span><br />
              <FontAwesomeIcon icon={faCrosshairs} className="mr-2" />
              123 Kenyatta Avenue, Nairobi, 00100, Kenya
            </div>
            <div>
              <span className="font-medium">Telephone:</span><br />
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +254 732 005 004
            </div>
            <div>
              <span className="font-medium">Email:</span><br />
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              info@Calebianinvestments.com
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
       <footer className="w-full mt-10 py-6 border-t">
              <h3 className="text-center font-semibold mb-4">Follow us on:</h3>
              <div className="flex justify-center space-x-4 text-xl mb-4">
                <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-500" />
                <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500" />
                <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-400" />
                <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-700" />
              </div>
              <div className="flex justify-center space-x-4 mb-4">
                <Link to="/terms" className="text-gray-600 hover:underline">Terms & Conditions</Link>
                <Link to="/FAQ" className="text-gray-600 hover:underline">FAQ</Link>
                <Link to="/Privacy" className="text-gray-600 hover:underline">Privacy</Link>
              </div>
              <p className="text-center text-sm text-gray-500">© 2025 All Rights Reserved</p>
            </footer>
    </div>
  );
};

export default Contact;
