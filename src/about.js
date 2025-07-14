import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
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

      {/* Section A */}
      <section 
        className="text-center mt-10 text-base text-black w-96 mx-auto font-medium bg-no-repeat bg-contain hover:border-2 hover:border-yellow-400 hover:p-5 hover:rounded-lg transition" 
        style={{ backgroundImage: "url('./assets/buildings.jpeg')" }}
      >
        <h3 className="text-yellow-400 text-lg overline mt-5">About us</h3>
        <div className="mt-5 text-center font-sans font-medium">
          <p>
            Welcome to <span className="text-teal-500 font-medium font-sans text-lg">Calebian Investment</span>, 
            where technology meets trust. We're redefining the real estate experience by offering smart, 
            streamlined solutions for modern homebuyers, renters, and sellers. From virtual tours to instant valuations, 
            our tools are built for convenience — while our team of dedicated professionals ensures a personal, 
            human touch at every step.
          </p>
        </div>
      </section>

      <hr className="my-8 mx-12 border-gray-400" />

      {/* Section B */}
      <section className="text-center mt-10 text-base text-black w-96 mx-auto font-medium hover:border-2 hover:border-yellow-400 hover:p-5 hover:rounded-lg transition">
        <h3 className="text-yellow-400 text-lg overline mt-5">Mission</h3>
        <div className="mt-5 text-center font-sans font-medium">
          <p>
            To simplify property ownership by connecting clients with affordable, secure, and quality real estate solutions.
          </p>
        </div>
      </section>

      <hr className="my-8 mx-12 border-gray-400" />

      {/* Section C */}
      <section className="text-center mt-10 text-base text-black w-96 mx-auto font-medium hover:border-2 hover:border-yellow-400 hover:p-5 hover:rounded-lg transition mb-10">
        <h2 className="text-yellow-400 text-lg overline mt-5 mb-5">Why Choose Us?</h2>
        <div className=" flex  flex-col">
          <div>Over 10 years of real estate experience</div>
          <div> Friendly, licensed agents</div>
          <div> 1000+ happy homeowners</div>
           <div>Fast property listings and updates</div>
        </div>
      </section>

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
}

export default About;
