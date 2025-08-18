import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import mansion1 from './assets/mansion1.webp';
import mansion2 from './assets/mansion2.jpeg';
import mansion3 from './assets/mansion3.jpeg';
import mansion4 from './assets/mansion4.jpg';
import mansion5 from './assets/mansion5.jpg';
import mansion6 from './assets/mansion6.jpeg';
import mansion7 from './assets/mansion7.png';
import mansion8 from './assets/mansion8.jpeg';

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBath, 
  faBed, 
  faCar, 
  faHeart, 
  faCrosshairs, 
  faBathtub, 
  faPhone, 
  faTags 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faInstagram, 
  faTwitter, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

const propertyList = [
  { id: 1, image: mansion1, title: "4BR Mansion to let 120,000Ksh", location: "Kiambu, membly estate", beds: "4br", baths: "5 bathrooms", parking: "4 parking spaces", save: "1.67%" },
  { id: 2, image: mansion2, title: "3BR mansion to let 95,000Ksh", location: "Ruiru, mugutha", beds: "4br", baths: "5 bathrooms", parking: "4 parking spaces", save: "1.02%" },
  { id: 3, image: mansion3, title: "4BR Mansion to let for 153,000Ksh", location: "Runda estate", beds: "4br(dsq)", baths: "5 bathrooms", parking: "2 parking spaces", save: "1.67%" },
  { id: 4, image: mansion4, title: "3BR Mansion to let for 87,000Ksh", location: "Ngong estate", beds: "3br", baths: "4 bathrooms", parking: "3 parking spaces", save: "0.3%" },
  { id: 5, image: mansion5, title: "3BR Mansion to let for 167,000Ksh", location: "Kileleshwa", beds: "5br+dsq", baths: "6 bathrooms", parking: "5 parking spaces", save: "0.11%" },
  { id: 6, image: mansion6, title: "4BR Mansion to let for 87,000Ksh", location: "Kimbo", beds: "4br", baths: "5 bathrooms", parking: "4 parking spaces", save: "0.9%" },
  { id: 7, image: mansion7, title: "4BR Mansion to let for 205,000Ksh", location: "Karen estate", beds: "6br", baths: "7 bathrooms", parking: "6 parking spaces", save: "0.2%" },
  { id: 8, image: mansion8, title: "4BR Mansion to let for 105 000Ksh", location: "Juja", beds: "4br", baths: "5 bathrooms", parking: "3 parking spaces", save: "1.3%" }
];

function Properties() {
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  // Get current cards for the page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = propertyList.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(propertyList.length / cardsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-white shadow py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        {/* Left Nav Links */}
        <div className="flex justify-center text-center space-x-4 relative">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>

          {/* Properties Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              Properties
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            {showDropdown && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-white shadow-lg rounded-md py-2 z-10">
                <Link
                  to="/properties/buy"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Buy
                </Link>
                <Link
                  to="/properties/let"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Let
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
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

        {/* Login Link */}
        <div className="flex items-center gap-3">
          <Link to="/get-started" className="bg-gray-400 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-500">
            Login
          </Link>
        </div>
      </nav>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 my-6 px-4">
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option>Date added (newest)</option>
          <option>Date added (oldest)</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option>Kiambu</option>
          <option>Nairobi</option>
          <option>Nakuru</option>
          <option>Other</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option>Prices (from Lowest)</option>
          <option>Prices (from Highest)</option>
        </select>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-8">
        {currentCards.map((property) => (
          <Link to={`/property/${property.id}`} key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{property.title}</h2>
              <div className="text-gray-600 mt-2 space-y-1">
                <div><FontAwesomeIcon icon={faCrosshairs} className="mr-2" /> {property.location}</div>
                <div><FontAwesomeIcon icon={faBed} className="mr-2" /> {property.beds}</div>
                <div><FontAwesomeIcon icon={faBathtub} className="mr-2" /> {property.baths}</div>
                <div><FontAwesomeIcon icon={faCar} className="mr-2" /> {property.parking}</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-blue-600 font-medium"><FontAwesomeIcon icon={faPhone} className="mr-2" />+254 732 005 004</span>
                <span className="text-sm text-gray-500">Save: {property.save} <FontAwesomeIcon icon={faTags} /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
        >
          Prev
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"}`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded ${currentPage === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
        >
          Next
        </button>
      </div>

      {/* Footer */}
      <footer className="w-full mt-20 py-6 border-t bg-white bg-opacity-90">
        <h3 className="text-center font-semibold mb-4">Follow us on:</h3>
        <div className="flex justify-center space-x-4 text-xl mb-4">
          <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-700" />
          <FontAwesomeIcon icon={faInstagram} className="hover:text-blue-700" />
          <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-700" />
          <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-700" />
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <Link to="/terms" className="text-gray-600 hover:underline">Terms & Conditions</Link>
          <Link to="/FAQ" className="text-gray-600 hover:underline">FAQ</Link>
          <Link to="/Privacy" className="text-gray-600 hover:underline">Privacy</Link>
        </div>
        <div className="flex justify-center mt-7 mb-7">
          <p className="text-gray-500 text-center">Subscribe to our newsletter: The latest news, articles, and resources, sent to your inbox weekly.</p>
        </div>
        <form className="flex items-center border rounded-md overflow-hidden max-w-md w-full justify-center ml-10">
          <input
            type="text"
            placeholder="Email..."
            className="px-4 py-2 w-full outline-none align-middle"
          />
          <button
            type="submit" className="bg-yellow-400 text-white px-4 py-2 hover:bg-blue-700">
            submit
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">© 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Properties;
