import React from "react";
import { Link } from 'react-router-dom';
import kid from './assets/mansion1.webp';
import mansion2 from './assets/mansion2.jpeg';
import mansion3 from './assets/mansion3.jpeg';
import mansion4 from './assets/mansion4.jpg';
import mansion5 from './assets/mansion5.jpg';
import mansion6 from './assets/mansion6.jpeg';
import mansion7 from './assets/mansion7.png';
import mansion8 from './assets/mansion8.jpeg';
import walpaper from './assets/walpaper.jpg';

import './Home.css';

function Home() {
  return (
   <div className="App">

  <div className="navbar">

    <div className="nav-links">
        <Link to="/home">
          <button>Home</button>
        </Link>
      
       <Link to="/Properties">
          <button>Properties</button>
        </Link>
        
         <Link to="/about">
          <button>about</button>
        </Link>
        
          <Link to="/contact">
          <button>contact</button>
        </Link>

</div>
      </div>
<div className="section1">
<div className="sectionA">
  <h3>Invest with Confidence. Own with Pride.</h3>
  <p>At <span>Calebian Properties</span>, we connect you to premium properties with verified ownership, flexible payment terms, and unmatched value. 
    From residential homes to investment-ready plots, 
    your perfect asset is just a click away.</p>

    <ul>
      <li>✔️ Clean Title Deeds</li>
      <li>✔️ Prime Locations</li>
      <li>✔️ Transparent Transactions</li>

    </ul>
    <h4>Luxury isn’t just a style — it’s a standard. Let us help you own it.</h4>
    <button>View Properties</button>
</div>
</div>


<div className="banner">
  <form className="search">
        <h2>Start your Property search here:</h2>
        <select>
          <option>Nairobi</option>
          <option>Nakuru</option>
          <option>Kiambu</option>
          <option>Mombasa</option>
        </select><br></br>

        <select>
          <option>Buy property</option>
          <option>Rent propert</option>
           </select><br></br>

 <select>
          <option>Land/building</option>
          <option>commercial</option>
          <option>Residential</option>
             </select><br></br>
             <button className="btn">Search property</button><br></br>
</form>
</div>

 <div className='footer'>
          <p>© 2025 All Rights Reserved</p>
        </div>




</div>


   
  
  );
}

export default Home;