import React from "react";
import { Link } from "react-router-dom";
import './properties.css';
import mansion1 from './assets/mansion1.webp';
import mansion2 from './assets/mansion2.jpeg';
import mansion3 from './assets/mansion3.jpeg';
import mansion4 from './assets/mansion4.jpg';
import mansion5 from './assets/mansion5.jpg';
import mansion6 from './assets/mansion6.jpeg';
import mansion7 from './assets/mansion7.png';
import mansion8 from './assets/mansion8.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCrosshairs, faBabyCarriage, faBed, faBathtub, faTags } from '@fortawesome/free-solid-svg-icons';
import { faCar } from "@fortawesome/free-solid-svg-icons/faCar";

function properties(){

    return(
        <>
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
        <div className="top">
 <select>
          <option>Date added(newest)</option>
          <option>Date added(oldest)</option>
            </select>
        

<select>
          <option>Kiambu</option>
          <option>Nairobi</option>
          <option>Nakuru</option>
          <option>Other</option>
            </select>

<select>
          <option>prices(from Lowest)</option>
          <option>prices(from Highest)</option>
            </select>

            <br></br>
</div>
   {/* card */}
<div class="section1">
      <div className="image">
      <img src={mansion1} alt="mansion1" />
   </div>
   <div className="description">
      <h2>4BR Mansion on sale for 24M</h2>
      <p class="details">
    <FontAwesomeIcon icon={faCrosshairs} className="icons"/><label> Kiambu,membly estate</label><br></br> 
       <FontAwesomeIcon icon={faBed} className="icons"/> <label> 4br</label>  
        <FontAwesomeIcon icon={faBathtub} className="icons"/> <label> 5 bathrooms</label>
        <FontAwesomeIcon icon={faCar} className="icons"/> <label> 2parking spaces</label> 
      </p>  

      <div className="lower">
      <FontAwesomeIcon icon={faPhone} /><label>+254 732 005 004</label> 
      <span>Save: 1.67% <FontAwesomeIcon icon={faTags} className="icons"/></span> 
      </div>
</div>
</div>

  {/* card */}
<div class="section1">
      <div className="image">
      <img src={mansion2} alt="mansion2" />
   </div>
   <div className="description">
      <h2>4BR Mansion on sale for 18.5M</h2>
      <p class="details">
    <FontAwesomeIcon icon={faCrosshairs} className="icons"/><label> Ruiru,mugutha</label><br></br> 
       <FontAwesomeIcon icon={faBed} className="icons"/> <label> 4br</label>  
        <FontAwesomeIcon icon={faBathtub} className="icons"/> <label> 5 bathrooms</label>
        <FontAwesomeIcon icon={faCar} className="icons"/> <label> 4parking spaces</label> 
      </p>  

      <div className="lower">
      <FontAwesomeIcon icon={faPhone} /><label>+254 732 005 004</label> 
      <span>Save: 1.02%<FontAwesomeIcon icon={faTags} className="icons"/></span> 
      </div>
</div>
</div>

  {/* card */}
<div class="section1">
      <div className="image">
      <img src={mansion3} alt="mansion3" />
   </div>
   <div className="description">
      <h2>4BR Mansion on sale for 45.4M</h2>
      <p class="details">
    <FontAwesomeIcon icon={faCrosshairs} className="icons"/><label> Runda estate</label><br></br> 
       <FontAwesomeIcon icon={faBed} className="icons"/> <label> 4br(dsq)</label>  
        <FontAwesomeIcon icon={faBathtub} className="icons"/> <label> 5 bathrooms</label>
        <FontAwesomeIcon icon={faCar} className="icons"/> <label> 2parking spaces</label> 
      </p>  

      <div className="lower">
      <FontAwesomeIcon icon={faPhone} /><label>+254 732 005 004</label> 
      <span>Save: 1.67%<FontAwesomeIcon icon={faTags} className="icons"/></span> 
      </div>
</div>
</div>

  {/* card */}
<div class="section1">
      <div className="image">
      <img src={mansion4} alt="mansion4" />
   </div>
   <div className="description">
      <h2>3BR Mansion on sale for 17.9M</h2>
      <p class="details">
    <FontAwesomeIcon icon={faCrosshairs} className="icons"/><label> Ngong estate</label><br></br> 
       <FontAwesomeIcon icon={faBed} className="icons"/> <label> 3br</label>  
        <FontAwesomeIcon icon={faBathtub} className="icons"/> <label> 4 bathrooms</label>
        <FontAwesomeIcon icon={faCar} className="icons"/> <label> 2parking spaces</label> 
      </p>  

      <div className="lower">
      <FontAwesomeIcon icon={faPhone} /><label>+254 732 005 004</label> 
      <span>Save: 0.3%<FontAwesomeIcon icon={faTags} className="icons"/></span> 
      </div>
</div>
</div>

 {/* card */}
<div class="section1">
      <div className="image">
      <img src={mansion5} alt="mansion5" />
   </div>
   <div className="description">
      <h2>3BR Mansion on sale for 56.9M</h2>
      <p class="details">
    <FontAwesomeIcon icon={faCrosshairs} className="icons"/><label> Kileleshwa</label><br></br> 
       <FontAwesomeIcon icon={faBed} className="icons"/> <label> 5br+dsq</label>  
        <FontAwesomeIcon icon={faBathtub} className="icons"/> <label> 6 bathrooms</label>
        <FontAwesomeIcon icon={faCar} className="icons"/> <label> 5parking spaces</label> 
      </p>  

      <div className="lower">
      <FontAwesomeIcon icon={faPhone} /><label>+254 732 005 004</label> 
      <span>Save: 0.11%<FontAwesomeIcon icon={faTags} className="icons"/></span>  
      </div>
</div>
</div>


 {/* card */}
<div class="section1">
      <div className="image">
      <img src={mansion6} alt="mansion6" />
   </div>
   <div className="description">
      <h2>4BR Mansion on sale for 23.2M</h2>
      <p class="details">
    <FontAwesomeIcon icon={faCrosshairs} className="icons"/><label> Kimbo</label><br></br> 
       <FontAwesomeIcon icon={faBed} className="icons"/> <label> 4br</label>  
        <FontAwesomeIcon icon={faBathtub} className="icons"/> <label> 5 bathrooms</label>
        <FontAwesomeIcon icon={faCar} className="icons"/> <label> 4parking spaces</label> 
      </p>  

      <div className="lower">
      <FontAwesomeIcon icon={faPhone} /><label>+254 732 005 004</label> 
      <span>Save: 0.9%<FontAwesomeIcon icon={faTags} className="icons"/></span> 
      </div>
</div>
</div>


 {/* card */}
<div class="section1">
      <div className="image">
      <img src={mansion7} alt="mansion7" />
   </div>
   <div className="description">
      <h2>6BR Mansion on sale for 105.4M</h2>
      <p class="details">
    <FontAwesomeIcon icon={faCrosshairs} className="icons"/><label> Karen estate</label><br></br> 
       <FontAwesomeIcon icon={faBed} className="icons"/> <label> 6br</label>  
        <FontAwesomeIcon icon={faBathtub} className="icons"/> <label> 7 bathrooms</label>
        <FontAwesomeIcon icon={faCar} className="icons"/> <label> 6parking spaces</label> 
      </p>  

      <div className="lower">
      <FontAwesomeIcon icon={faPhone} /><label>+254 732 005 004</label> 
      <span>Save: 0.2%<FontAwesomeIcon icon={faTags} className="icons"/></span> 
      </div>
</div>
</div>


  {/* card */}
<div class="section1">
      <div className="image">
      <img src={mansion8} alt="mansion8" />
   </div>
   <div className="description">
      <h2>4BR Mansion on sale for 25.1M</h2>
      <p class="details">
    <FontAwesomeIcon icon={faCrosshairs} className="icons"/><label> Juja</label><br></br> 
       <FontAwesomeIcon icon={faBed} className="icons"/> <label> 4br</label>  
        <FontAwesomeIcon icon={faBathtub} className="icons"/> <label> 5 bathrooms</label>
        <FontAwesomeIcon icon={faCar} className="icons"/> <label> 3parking spaces</label> 
      </p>  

      <div className="lower">
      <FontAwesomeIcon icon={faPhone} /><label>+254 732 005 004</label> 
      <span>Save: 1.3%<FontAwesomeIcon icon={faTags} className="icons"/></span> 
      </div>
</div>
</div>


<div className='footer'>
          <p>© 2025 All Rights Reserved</p>
        </div>

 
        
        
        
        
        
        
        </>
    );
}
export default properties;