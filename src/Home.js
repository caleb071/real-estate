import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './index.css';
import wallpaper from './assets/walpaper.jpg';
import { toast } from 'react-toastify';


function Home() {
  const [showBanner, setShowBanner] = useState(true);
   const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
     
      <div
        className="absolute inset-0 bg-cover bg-center blur-xs brightness-50 z-0"
        style={{ backgroundImage: `url(${wallpaper})` }}
      ></div>

      {/* body */}
      <div className="relative z-10 flex flex-col items-center">
       
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
       <Link to="/get-started/register" className="bg-gray-400 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-500">
         Login
       </Link>
     </div>
   </nav>


        {/* Banner */}
        {showBanner && (
          <div className="flex items-center justify-between bg-gray-100 bg-opacity-90 px-6 py-4 rounded-lg shadow-md mx-auto mt-6 max-w-3xl">
            <p className="text-sm text-gray-700">
              <strong>Ongoing Projects:</strong> Join us every Friday for site visit and property viewing...
            </p>
            <div className="flex items-center gap-3">
              <Link to="/get-started/register" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-500">
                Get Started
                </Link>

              <button onClick={() => setShowBanner(false)} className="p-2 text-gray-600 hover:text-gray-800">
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Section */}
        <section className="max-w-4xl mt-20 text-center px-4 bg-white bg-opacity-80 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-4">Invest with Confidence. Own with Pride.</h3>
          <p className="text-gray-700 mb-4">
            At <span className="font-semibold text-blue-700">Calebian Properties</span>, we connect you to premium properties with verified ownership, flexible payment terms, and unmatched value. From residential homes to investment-ready plots, your perfect asset is just a click away.
          </p>
          <ul className="text-left space-y-2 mb-4">
            <li>✔️ Clean Title Deeds</li>
            <li>✔️ Prime Locations</li>
            <li>✔️ Transparent Transactions</li>
          </ul>
          <h4 className="font-medium text-lg mb-4">Luxury isn’t just a style — it’s a standard. Let us help you own it.</h4>
          <Link to="/properties/Buy">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-blue-500 font-semibold">View Properties</button>
          </Link>
        </section>

        {/* Search Banner */}
        <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-6 mt-12 max-w-3xl w-full">
          <form className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold">Start your Property search here:</h2>
            <select className="border rounded px-4 py-2">
              <option>Nairobi</option>
              <option>Nakuru</option>
              <option>Kiambu</option>
              <option>Mombasa</option>
            </select>
            <select className="border rounded px-4 py-2">
              <option>Buy property</option>
              <option>Rent property</option>
            </select>
            <select className="border rounded px-4 py-2">
              <option>Land/Building</option>
              <option>Commercial</option>
              <option>Residential</option>
            </select>
            <button className="bg-yellow-500 text-black py-2 rounded hover:bg-blue-500 font-semibold">
              Search Property
            </button>
          </form>
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
    </div>
  );
}

export default Home;
